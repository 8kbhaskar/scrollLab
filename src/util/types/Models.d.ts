import { Model } from 'mongoose';

export interface IUserModel extends Model {
    categoryId: string;
    name: string;
    image: string;
    isDeleted: boolean;
    deletedDate: Date;
}

export interface ICategoryModel extends Model {
    categoryId?: string;
    name: string;
    image: string;
    isDeleted?: boolean;
    deletedDate?: Date;
}



