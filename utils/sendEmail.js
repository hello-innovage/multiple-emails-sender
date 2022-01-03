const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port: process.env.email_port,
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass,
    },
  });
  const mailOptions = {
    from: options.email_from,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
