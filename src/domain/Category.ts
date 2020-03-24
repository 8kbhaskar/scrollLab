import { Schema, model } from 'mongoose';

const category: Schema = new Schema(
    {
        categoryId: { type: String, require: true },
        name: { type: String, require: true },
        image: { type: String, require: true },
        isDeleted: { type: Boolean, require: true },
        deletedDate: { type: Date, require: true },
    },
    { timestamps: true }
);

export const Category = model('category', category, 'category');