const mongoose = require('mongoose');
const winston = require('winston');

module.exports = {
    setup() {
        // TODO: connect to mongodb, pg, etc
        return mongoose.connect('mongodb://mongo:27017/workshop', (err) => {
            if (err) {
                winston.error(`db connection error: ${err.message}`);
                return;
            }
            winston.info('db connection stablished');
        });
    }
}
