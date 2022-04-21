const axios = require("axios");
const wrapper = require("../utils/wrapper");

const fetch = async (options) => {
    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        if (error.response) {
            return wrapper.error(null, error.message, error.response.status);
        } else {
            return wrapper.error(null, "Failed to fetch data. Please contact developer.");
        }
    };
};
module.exports = fetch;
