import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, 'comment is required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
    { timestamps: true }
);

export const Comment = mongoose.model('Comment', commentSchema);