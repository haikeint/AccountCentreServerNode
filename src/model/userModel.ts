import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    password2: { type: String },
    email: { type: String },
    sdt: { type: String },
    name: { type: String },
    bỉthday: { type: String },
    genre: { type: String },
    address: { type: String },
    idcard: { type: String },
    rolelv: { type: String },
})
export default model('user', userSchema)
