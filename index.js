
const config = require('./src/configs/global_config');
const logger = require("./src/helpers/utils/logger");
const server = require("./src/server");
const PORT = config.get('/port');

server.listen(PORT, () => {
    const ctx = 'app-listen';
    logger.log(ctx, `Apps started, listening at ${PORT}`, 'initate application');
})