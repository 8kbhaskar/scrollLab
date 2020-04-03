import { response_messages, status_codes } from './constants'
const responseHandler = (res, status, message, data) => {
    res.json({
        responseCode: status,
        responseMessage: message,
        data: data
    })
}

const errorResponseHandler = (res, status, message) => {
    res.json({
        responseCode: status,
        responseMessage: message
    })
}

const successResponseHandler = (res, status, message) => {
    res.json({
        responseCode: status,
        responseMessage: message
    })
}
const gatewayErrorResponse = async (res, status, message) => {
    if (res.headersSent)
        return;
    res.status(status).json({
        responseCode: status,
        responseMessage: message
    })
}


export const errorHandler = (err, req, res, next) => {
    if (res.headersSent)
        return;

    res.status(404).json({
        responseCode: status,
        responseMessage: err.message

    });
};

const coustomErrorHandler = (err, res) => {

    // stateId
    if (err && err.original && (err.original.sqlMessage).includes("'stateId'"))
        err.status = status_codes.BAD_REQUEST, err.message = response_messages.INVALID_ID.replace("{subject}", "stateId")
    //districtId
    if (err && err.original && (err.original.sqlMessage).includes("'districtId'"))
        err.status = status_codes.BAD_REQUEST, err.message = response_messages.INVALID_ID.replace("{subject}", "districtId")
    //ulbId
    if (err && err.original && (err.original.sqlMessage).includes("'ulbId'"))
        err.status = status_codes.BAD_REQUEST, err.message = response_messages.INVALID_ID.replace("{subject}", "ulbId")

    else if (err && err.original && (err.original.sqlMessage).includes("'wardNumber'"))
        err.status = status_codes.ALREADY_EXISTS, err.message = response_messages.NAMEEXISTS.replace("{subject}", "wardNumber")

    else if (err && err.original && (err.original.errno) == 1452)
        err.status = status_codes.BAD_REQUEST, err.message = response_messages.INVALID_ID.replace("{subject}", "Zone")
    else if (err && err.original && (err.original.sqlMessage).includes("'ward_ulb_id_ward_number'"))
        err.status = status_codes.BAD_REQUEST, err.message = response_messages.DUBLICATE_KEY.replace("{subject}", "ULB or Ward Number")
    if (!err.status) {
        err.status = 400;
    }

    res.json({
        responseCode: err.status,
        responseMessage: err.message
    })
}

export {
    responseHandler,
    errorResponseHandler,
    coustomErrorHandler,
    successResponseHandler,
    gatewayErrorResponse
}