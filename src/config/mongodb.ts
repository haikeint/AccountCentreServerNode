import { connect } from 'mongoose'
import userModel from '../model/userModel'

const connectMongoDB = () => {
    return new Promise((resolve, reject) => {
        connect(String(process.env.MONGO_URI))
            .then(async () => {
                await userModel.syncIndexes()
                resolve(true)
            })
            .catch(() => {
                resolve(false)
            })
    })
}

export default connectMongoDB
