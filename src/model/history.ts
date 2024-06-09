import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    date: { type: String },
    describe: { type: String },
})
export default model('user', userSchema)
