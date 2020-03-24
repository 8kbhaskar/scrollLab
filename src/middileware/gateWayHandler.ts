import {gatewayErrorResponse } from '../responseHandler'


export const getUserAccessLevel = async (req, res, next) => {
    try {
        let role: any = ['SUPER_ADMIN', 'ADMIN', 'ANONYMOUS', 'MANUFACTURER', 'VENDOR', 'CITIZEN', 'OFFICIAL', 'INSTITUTION'];
        let headers: any = req.headers;
        if (!headers.x_authority || !headers.x_user_id || !headers.x_username)
            gatewayErrorResponse(res, 502, `Bad Gateway`)
        else {
            let index: any = (role).indexOf(headers.x_authority);
            if (index == -1)
                gatewayErrorResponse(res, 401, `Unauthourized`);
            else
            {
                req.body.createdBy=headers.x_username;
                req.body.userId=headers.x_user_id;
                next();
            }
        }

    }
    catch (e) {
        throw e;
    }
}