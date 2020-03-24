import { responseHandler, errorResponseHandler, successResponseHandler } from '../responseHandler'
import { status_codes } from '../constants'
export const validateAddArea = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "cityId", "wardId", "areaName", "address", "landmark", "pinCode", "categoryId", "areaJson", "ulbId"], res, next)
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddAbout = async (req, res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "cityName", "description", "banners"], res, next)
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddRwa = async (req, res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "address", "name", "categoryId", "rwaJson"], res, next)
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddInfra = async (req, res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "name", "address", "categoryId", "pinCode", "infrastructureJson"], res, next)

    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddOther = async (req, res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "name", "address", "landmark", "pinCode", "categoryId", "otherInfoJson"], res, next)
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}


export const validateAddContact = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["name", "designationId", "contactLevelId", "email", "mobile"], res, next);
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}


export const validateAddMaps = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "areaId"], res, next);
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}
export const validateAddSanitation = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "areaId", "address", "name", "categoryId", "rwaJson"], res, next);
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddWardProgress = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "wardId", "date"], res, next)
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}
export const validateAddWard = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "warName", "wardNumber", "zoneId", "pinCode"], res, next)
    }
    catch (e) {

        errorResponseHandler(res, 400, e.message)


    }

}

export const validateAddWaste = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "address"], res, next);
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

export const validateAddZone = async (req, [], res, next) => {
    try {
        checkMissingKeys(req.body, ["stateId", "districtId", "ulbId", "zoneName", "zoneDetail", "zoneId"], res, next);
    }
    catch (e) {
        errorResponseHandler(res, 400, e.message);
    }

}

const checkMissingKeys = (obj: any, array: any, res: any, next: any) => {
    try {
        array.forEach((data: any) => {
            if (!obj[data]) {
                // errorResponseHandler(res,400,`${data} is missing.`)
                throw new Error(`${data} is missing`);
            }
        });
        next()
    }
    catch (e) {
        throw e;
    }
}

