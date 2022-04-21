const controller = require("../controllers/patient");
const wrapper = require("../helpers/utils/wrapper");

const updateAdditionalEachDay = async (req, res) => {
    const result = await controller.updateAdditionalEachDay();
    if (result.error) {
        return wrapper.response(res, "fail", result.data, result.message, result.status, result.code);
    } else {
        return wrapper.response(res, "success", result.data, result.message, result.status, result.code);
    };
};

module.exports = { updateAdditionalEachDay };