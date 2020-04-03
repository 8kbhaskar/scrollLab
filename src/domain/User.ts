import { Schema, model } from 'mongoose';
const root = 'https://s3.amazonaws.com/mybucket';
import { ROLE, GENDER_CONST } from '../constants'
const user: Schema = new Schema(
    {
        userId: { type: String, require: true },
        username: { type: String, require: true, trim: true },
        password: { type: String, require: true },
        /** step one */
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        email: { type: String, require: true },
        mobile: { type: String, require: true },
        policyStatus: { type: Boolean, require: true },
        status: { type: String, require: true },// todo
        /** step two */
        gender: { type: String, enum: GENDER_CONST, require: true },// todo
        address: { type: String, require: true },
        pincode: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
        aadhaar: { type: String, require: true },
        pan: { type: String, require: true },
        gst: { type: String, require: true },
        /** step three */
        categoryId: [{ type: String, ref: 'category' }],
        /** step four */
        socialMediaHandles: {
            github: { type: String, require: true },
            twitter: { type: String, require: true },
            instagram: { type: String, require: true },
            facebook: { type: String, require: true },
            linkedin: { type: String, require: true },
            youtube: { type: String, require: true },
            tiktok: { type: String, require: true },
        },
        photo: { type: String, get: v => `${root}${v}` },
        role: { type: String, enum: ROLE, require: true, default: ROLE[0] },//todo
        isApproved: { type: String, require: true },
        isDeleted: { type: Boolean, require: true },
        deletedDate: { type: Date, require: true },
    },
    { timestamps: true, autoIndex: false }
);
user.index({ userId: 1 })

export const User = model('user', user, 'user');

defaultUser();
async function defaultUser() {
    let user = new User({
        username: 'Admin',
        password: 'Test@123',
        role: ROLE[2]
    })
    let result = await checkAdmin()
    if (!result)
        user.save().then(data => {
            console.log('[default user added] :', data);
        }).catch(err => {
            console.log('err :', err);
        })

}
async function checkAdmin() {
    return User.findOne({ username: 'Admin', role: ROLE[2] }).then(data => {
        if (data)
            return Promise.resolve(true)
        return Promise.resolve(false)
    })
}