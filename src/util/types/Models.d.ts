import { Model } from 'mongoose';

export interface IRegistationOneModel extends Model {
    userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: number;
    policyStatus: string;
    status: string;
    role?: string;
    token?: string;
}

export interface IRegistationTwoModel extends Model {
    gender: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    country: string;
    aadhaar: number;
    pan: string;
    gst?: string;
}


export interface IRegistationThreeModel extends Model {
    categoryId: string;

}


export interface ISocialDetailsModel extends Model {
    github: string;
    twitter: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;

}

export interface IRegistationFourModel extends Model {
    socialMediaHandles: ISocialDetailsModel;

}

export interface ICategoryModel extends Model {
    categoryId?: string;
    name: string;
    image: string;
    isDeleted?: boolean;
    deletedDate?: Date;
}



