import { Request } from 'express';
import { IUserModel } from '../types/Models';

declare module '*.png' {
    const value: string;
    export default value;
}

export interface CustomError extends Error {
    err: string;
    message: string;
}

export interface JWTRequest extends Request {
    files: any;
    file: any;
    user: {
        email: string;
        role_Id: number;
    };
}
