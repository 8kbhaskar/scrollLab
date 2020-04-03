import crypto from 'crypto';
import jsonWebToken from 'jsonwebtoken';
import chalk from 'chalk';
// import bcrypt from 'bcryptjs';
import multer from 'multer';
// import moment from 'moment';
import { IRegistationOneModel } from './types/Models'


const { AUTH, USER_JWT_TOKEN_TTL } = process.env;

import { promisify } from 'util';
// import request, { Request, Response } from 'request';

// const [request_get, request_post, request_put] = [
//     promisify(request.get),
//     promisify(request.post),
//     promisify(request.put)
// ];


function generatetaskId(n) {
    var add = 1,
        max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (n > max) {
        return generatetaskId(max) + generatetaskId(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ('' + number).substring(add);
}


const generateUserJWToken = (
    user: IRegistationOneModel,
    expireTime: string = USER_JWT_TOKEN_TTL
): Promise<string> => {
    const { JWT_SECRET } = process.env;

    const token_payload: any = {
        email: user.email,
        role: user.role,
        username: user.username
    };

    const options = {
        expiresIn: expireTime
    };

    return Promise.resolve(
        jsonWebToken.sign(token_payload, JWT_SECRET, options)
    );
};

const generateOTP = (otp_length: number = 4): number => {
    let counter: number = 0;
    let result: number = 0;

    while (counter++ < otp_length) {
        const randDigit: number = Math.floor(Math.random() * 10);
        if (randDigit == 0) result = result * 10 + 1;
        else result = result * 10 + randDigit;
    }

    return result;
};

export {
    generateUserJWToken
}