const Patients = require("../../models/patient");
const wrapper = require("../../helpers/utils/wrapper");
const { ERROR } = require("../../helpers/http-status/status_code");

const insertAdditionalPatientAggregation = async (document) => {
    try {
        const db = new Patients(document);
        return await db.save();
    } catch (error) {
        return wrapper.error(null, error.message, ERROR.INTERNAL_SERVER_ERROR);
    };
};

module.exports = { insertAdditionalPatientAggregation };