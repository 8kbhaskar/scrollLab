// database insert query to insert user object created by service
import { Category } from '../domain'
import { IUserModel } from '../util/types/Models';

export function fetchUsers(): Promise<IUserModel[]> {
    return new Promise((resolve, reject) => {
        Category.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
