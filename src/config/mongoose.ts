require('dotenv').config()
import mongoose from 'mongoose';
import chalk from 'chalk';

const { MONGO_HOST, MONGO_DATABASE } = process.env;

const DB_CONN_URL = `mongodb://${MONGO_HOST}/${MONGO_DATABASE}?ssl=false`;

mongoose.Promise = global.Promise;

const CONN_CONF = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true

};

export const mongo_connection = mongoose.connect(DB_CONN_URL, CONN_CONF, err => {
    console.log("database connection ", DB_CONN_URL);
    if (err)
        console.log(
            chalk.red(`[mongoose] error connecting to mongodb: ${err.message}`)
        );
    else console.log(chalk.green('[mongoose] mongodb connected'));
});