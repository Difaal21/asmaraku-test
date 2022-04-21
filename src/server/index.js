const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("../routes");
const cron = require('node-cron');
const mongoDbConnection = require("../services/mongodb/connection");
const controllerPatient = require("../controllers/patient");
const logger = require("../helpers/utils/logger");

mongoDbConnection();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routes.init(app);

cron.schedule("59 23 * * *", async () => {
    const ctx = "cronJob";
    const request = await controllerPatient.updateAdditionalEachDay();
    logger.log(ctx, request.message, "controllerPatient.updateAdditionalEachDay()");
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
});

module.exports = app;