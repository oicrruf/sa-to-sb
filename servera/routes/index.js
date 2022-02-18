const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function (req, res, next) {
  res.send({ name: "SERVER A" });
});

router.get("/send/:text", async (req, res, next) => {
  console.log(req.params.text);
  try {
    let text = await axios.post("http://localhost:3001/text", {
      string: req.params.text,
    });
    res.send({ name: "SERVER A", string: req.params.text });
    return text.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
});

module.exports = router;
