require('dotenv').config()
import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import logger from 'morgan';
import { errorHandler } from './responseHandler';
import { mongo_connection } from './config';

import {
    FileUploadController, CategoryController, RegistrationController
} from './controller';
import fs from 'fs'
import path from 'path'
import cors from 'cors';
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}
app.use(cors())
app.use(
    bodyParser.json({
        limit: '50mb',
        extended: false,
        type: 'application/json'
    })
);

app.use(
    bodyParser.urlencoded({
        limit: '200mb',
        extended: true,
        parameterLimit: 50000
    })
);


mongo_connection

app.use('/', express.static(path.join(__dirname, '../src/upload')));

export const checkFolder = (path) => {

    if (!fs.existsSync(path)) {
        // if not then create
        fs.mkdirSync(path);
        return true;
    }

    return true;
};


app.use('/category', CategoryController)
app.use('/auth', RegistrationController)

app.use('/upload', FileUploadController);

app.use(errorHandler);
export { app }
