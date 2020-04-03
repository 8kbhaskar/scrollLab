// database insert query to insert user object created by service
import { User } from '../domain'
import { IRegistationOneModel } from '../util/types/Models';

export function fetchUsers(): Promise<IRegistationOneModel[]> {
    return new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

export function saveStepOne(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
        User.create(params, (err, data) => {
            if (err) {
                console.log('[stepOne repo] :', err);
                reject(err)
            } else {
                data = JSON.parse(JSON.stringify(data))
                resolve(data)
            }
        })
    })
}


export function update(params: any, userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ userId: userId }, params, { new: true }, (err, data) => {
            if (err) {
                console.log('[stepOne repo] :', err);
                reject(err)
            } else {
                data = JSON.parse(JSON.stringify(data))
                resolve(data)
            }
        })
    })
}

