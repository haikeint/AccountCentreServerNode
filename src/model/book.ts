import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
    name: {
        type: String
    },
    genre: {
        type: String
    },
    authorID: {
        type: String
    }
})

export default model('books', BookSchema)