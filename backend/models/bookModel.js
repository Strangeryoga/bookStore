import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: String,
        required: true,
    },
},
{
    timpestamps: true,
});


export const Book = mongoose.model('Book', bookSchema);