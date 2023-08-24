import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    picture: {
        type: String,
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likesArray: {
        type: [String],
    },
    userName: {
        type: String,
    }
});

const PostModel = mongoose.model('post', PostSchema);

export default PostModel;