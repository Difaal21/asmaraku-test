const mongoose = require("mongoose");
const logger = require("../../helpers/utils/logger");
const config = require("../../configs/global_config");

const connectDB = async () => {
    const ctx = "MongoDB Connection";

    try {
        const conn = await mongoose.connect(config.get("/mongoDbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 10
        });
        logger.log(ctx, `MongoDB Connected : ${conn.connection.host}`, "mongoose.connect()");
        return conn;
    } catch (error) {
        logger.log(ctx, error.message, "mongoose.connect()");
        process.exit(1);
    }
}

module.exports = connectDB