import {responseHandler,errorResponseHandler,successResponseHandler,coustomErrorHandler } from '../responseHandler'
import { status_codes } from '../constants'
export const validateAddArea = async (req, res, next) => {
    checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId","areaName","address","pinCode","categoryId"],next,res)
}

export const validateAddAbout = async (req, res, next) => {
    console.log("request is ",req.body)
    checkMissingKeys(req.body, ["stateId","districtId","ulbId","cityName","description","banners"],next,res)
}

export const validateAddRwa = async (req, res, next) => {
    checkMissingKeys(req.body, ["stateId","districtId","ulbId","wardId","areaId","address","name","categoryId","rwaJson"],next,res)
}

export const validateAddInfra = async (req, res, next) => {
    checkMissingKeys(req.body, ["stateId","districtId","ulbId","wardId","areaId","name","address","landmark","pinCode","categoryId","infrastructureJson"],next,res)
}

export const validateAddOther = async (req, res, next) => {
    checkMissingKeys(req.body, ["stateId","districtId","ulbId","wardId","areaId","name","address","landmark","pinCode","categoryId","otherInfoJson"],next,res)
}

const checkMissingKeys = (obj: any, array: any, next: any, res: any) => {
    try {
        array.forEach((data: any) => {
            if (!obj[data]) {
                return next(errorResponseHandler(res, status_codes.BAD_REQUEST, `Please provide ${data}`))
            }
        });
    }
    catch (e) {
        throw e;
    }
}


