const emailData = require("../model/emailDataModel");
const sendEmail = require("../utils/sendEmail");
const cron = require("node-cron");

exports.emailSend = async (req, res, next) => {
  const { emails, subject, message, email_from } = req.body;
  try {
    const arr = [];
    emails.forEach((e) => {
      arr.push({
        email: e,
        subject: subject,
        message: message,
        email_from: email_from,
      });
    });
    emailData.insertMany(arr);
    cron.schedule("00 * * * * *", () => {
      emailData
        .find({ email_status: false })
        .limit(5)
        .exec(function (err, emailsData) {
          if (emailsData) {
            emailsData.forEach(async (oneEmail) => {
              sendEmail({
                email: oneEmail.email,
                subject: oneEmail.subject,
                message: oneEmail.email,
                email_from: oneEmail.email_from,
              });
              await emailData.findByIdAndUpdate(oneEmail._id, {
                email_status: true,
              });
            });
          }
        });
    });
    res.status(200).json({
      status: "success",
      message: "Email sent",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: `Email Not sent ${err}`,
    });
  }
};
