import connectMongoDB from './mongodb'
import dotenv from 'dotenv'

dotenv.config()

const config = () => {
    const configAll = [connectMongoDB()]
    return new Promise((resolve, reject) => {
        Promise.all(configAll).then((result) => {
            if (result.includes(false)) reject(false)
            else resolve(true)
        })
    })
}
export default config
