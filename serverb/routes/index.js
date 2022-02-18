const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");

router.get("/", function (req, res, next) {
  res.send({ name: "SERVER B" });
});

router.post("/text", function (req, res, next) {
  const { string } = req.body;

  console.log(CryptoJS.AES.encrypt(string, "12345").toString());
  res.send({ name: "SERVER B", encrypted: CryptoJS.AES.encrypt(string, "12345").toString()});
});

module.exports = router;
