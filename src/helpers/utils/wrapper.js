const { ERROR, SUCCESS } = require("../http-status/status_code");
const { RESPONSE_STATUS } = require("../response-status/status");

const error = (data = null, message = "Internal Server Error", code = ERROR.INTERNAL_SERVER_ERROR, status) => ({ error: true, data, status, code, message });

const data = (data, message = '', code = SUCCESS.OK, status) => ({ error: false, data, status, code, message });

const response = (res, type, data, message = "", status, code = 200) => {
    let success = true;
    if (type === "fail") {
        success = false;
    };
    return res.status(code).json({ success, data, status, code, message });
};

module.exports = { response, error, data }