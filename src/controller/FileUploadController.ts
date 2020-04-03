require('dotenv').config()
const { STATICS_FILES } = process.env;
import { Router } from 'express'
import { validateAdd } from '../validators/index'
import { responseHandler, errorResponseHandler, successResponseHandler } from '../responseHandler'
import { status_codes, response_messages } from '../constants'
import { GateWayHandler } from '../middileware'
import multer from 'multer';

const route = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/src/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + '_' + file.originalname.split(' ').join('_'));
    }
}, (err) => {
    throw { message: 'Error While Uploading' };
});
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 100 } }).array('images', 5);
const fileUpload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 100 } }).single('file');




/**** post api for save about   ****/
route.post('/', fileUpload, async function (req, res) {
    try {

        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, req.file.filename);
    } catch (err) {
        console.log("Uploading err", err)
        responseHandler(res, status_codes.ERROR, err.message, err);
    }
});

export default route;
