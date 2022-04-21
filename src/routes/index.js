const wrapper = require("../helpers/utils/wrapper");
const { ERROR } = require("../helpers/http-status/status_code");
const RESPONSE_STATUS = require("../helpers/response-status/status");

const init = server => {
    server.use(require("./patient"));

    server.use((req, res, next) => {
        const error = new Error("Page Not Found");
        res.status(404);
        next(error);
    });

    server.use((error, req, res, next) => {
        wrapper.response(res, "fail", null, error.message, RESPONSE_STATUS.ERROR.NOT_FOUND, ERROR.NOT_FOUND);
    });
};

exports.init = init;