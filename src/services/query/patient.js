const Patients = require("../../models/patient");
const wrapper = require("../../helpers/utils/wrapper");
const { ERROR } = require("../../helpers/http-status/status_code");
const { RESPONSE_STATUS } = require("../../helpers/response-status/status")

const findOneAdditionalPatientAggregation = async (query, field) => {
    try {
        const result = await Patients.findOne(query).exec();
        if (!result) {
            return wrapper.error(null, "Data not found", ERROR.NOT_FOUND, RESPONSE_STATUS.ERROR.NOT_FOUND);
        }
        return result;
    } catch (error) {
        return wrapper.error(null, error.message);
    }
};

module.exports = { findOneAdditionalPatientAggregation };