const wrapper = require("../helpers/utils/wrapper");
const logger = require("../helpers/utils/logger");
const { ERROR, SUCCESS } = require("../helpers/http-status/status_code");
const RESPONSE_STATUS = require("../helpers/response-status/status");
const fetch = require("../helpers/utils/fetch");
const command = require("../services/command/patient");
const query = require("../services/query/patient");

const updateAdditionalEachDay = async () => {
    const ctx = "Patient.Controller";

    const options = {
        url: `https://data.covid19.go.id/public/api/update.json`,
        method: "GET",
    };

    const fetchDataCovid = await fetch(options);
    if (fetchDataCovid.error) {
        logger.log(ctx, "Failed to fetch data covid", "fetchDataCovid()");
        return wrapper.error(null, "Failed to fetch data covid");
    };

    const patientAggregationAlreadyExist = await query.findOneAdditionalPatientAggregation({ "penambahan.created": fetchDataCovid.update.penambahan.created });
    if (!patientAggregationAlreadyExist.error) {
        logger.log(ctx, "Today aggregate of covid patients has been updated, try again tomorrow", "query.findOneAdditionalPatientAggregation()");
        return wrapper.error(null, "Try again tomorrow", ERROR.CONFLICT, RESPONSE_STATUS.ERROR.CONFLICT);
    };

    const payload = { penambahan: fetchDataCovid.update.penambahan };
    const result = await command.insertAdditionalPatientAggregation(payload);
    if (result.error) {
        logger.log(ctx, result.message, "command.insertAdditionalPatientAggregation()");
        return wrapper.error(null, "Internal Server Error");
    };

    return wrapper.data(null, "Update aggregate of covid patient");
};

module.exports = { updateAdditionalEachDay }