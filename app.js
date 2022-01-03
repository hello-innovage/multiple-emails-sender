const express = require("express");
const router = require("./router/emailrouter");

const app = express();

app.use(express.json());

app.use("/api", router);

module.exports = app;
