import { Schema, model } from 'mongoose'

const AuthorSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
})
export default model('authors', AuthorSchema)
