import { Schema, model } from 'mongoose';

const category: Schema = new Schema(
    {
        categoryId: { type: String, require: true },
        name: { type: String, require: true },
        image: { type: String, require: true },
        isDeleted: { type: Boolean, require: true },
        deletedDate: { type: Date, require: true },
    },
    { timestamps: true, autoIndex: false }
);
category.index({ categoryId: 1 })

export const Category = model('category', category, 'category');