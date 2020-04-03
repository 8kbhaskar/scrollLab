require('dotenv').config()
import { Router } from 'express'
import { validateAdd } from '../validators/index'
import { Category } from '../domain'
import { ICategoryModel, IRegistationOneModel } from '../util/types/Models'
import { RegistrationService } from '../service'
import { responseHandler } from '../responseHandler'
import { status_codes, response_messages } from '../constants'
import uuid from 'node-uuid';


const route = Router();



//**** login api ****/  // todo have to move in login controller
route.post('/login', async function (req, res) {
    try {
        let category: ICategoryModel = {
            categoryId: uuid.v4(),
            name: req.body.name,
            image: req.body.image
        }

        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await Category.create(category));
    } catch (err) {
        console.log('[login err] :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});


//**** registration api ****/
route.post('/registration/one', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await RegistrationService.step_one(req.body));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});


//**** registration api ****/
route.post('/registration/two', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await RegistrationService.step_two(req.body));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});


//**** registration api ****/
route.post('/registration/three', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await RegistrationService.step_three(req.body));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});



//**** registration api ****/
route.post('/registration/four', async function (req, res) {
    try {
        responseHandler(res, status_codes.SUCCESS, status_codes.SUCCESS, await RegistrationService.step_four(req.body));
    } catch (err) {
        console.log('err :', err);
        responseHandler(res, status_codes.ERROR, status_codes.ERROR, err);
    }
});



export default route;
