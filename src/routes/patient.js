const express = require("express");
const router = express.Router();
const httpHandler = require("../http-handler/patient");

router.get("/v1/patient/covid/additional/each-day", httpHandler.updateAdditionalEachDay);

module.exports = router;