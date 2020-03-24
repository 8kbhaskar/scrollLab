require('dotenv').config()
import { Router } from 'express'
import { validateAdd } from '../validators/index'
import { Category } from '../domain'
import { ICategoryModel } from '../util/types/Models'
import { AboutService } from '../service'
import { responseHandler } from '../responseHandler'
import { status_codes, response_messages } from '../constants'
import uuid from 'node-uuid';


const route = Router();



// // /**** save category  ****/
route.post('/', async function (req, res) {
    try {
        let category: ICategoryModel = {
            categoryId: uuid.v4(),
            name: req.body.name,
            image: req.body.image
        }

        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.create(category));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});

// // /**** save category  ****/
route.get('/', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.find({ isDeleted: { $ne: true } }));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});

// // /**** save category  ****/
route.get('/:id', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.findOne({ isDeleted: { $ne: true }, categoryId: req.params.id }));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});
// // /**** save category  ****/
route.put('/:id', async function (req, res) {
    try {
        let category: ICategoryModel = {
            name: req.body.name,
            image: req.body.image
        }
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.findOneAndUpdate({ categoryId: req.params.id }, category, { new: true }));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});
// // /**** save category  ****/
route.delete('/:id', async function (req, res) {
    try {

        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.findOneAndUpdate({ categoryId: req.params.id }, { isDeleted: true }, { new: true }));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});




export default route;
