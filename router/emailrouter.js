const express = require("express");
const router = express.Router();
const { emailSend } = require("../controller/emailController");

router.post("/send-email", emailSend);

module.exports = router;
