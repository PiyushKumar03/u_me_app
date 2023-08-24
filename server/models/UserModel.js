import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        // required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
    },

});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;