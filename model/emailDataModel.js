const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
  email_status: {
    type: Boolean,
    default: "false",
    required: false,
  },
  subject: {
    type: String,
    required: [true, "Please Enter Subject of Email"],
  },
  email_from: {
    type: String,
    required: [true, "Please provide your email"],
    lowecase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  message: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

const emailData = mongoose.model("emailData", emailSchema);
module.exports = emailData;
