import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

export interface userType {
    provider: String;
    username: String;
    email: String;
    name: String;
    avatar: String;
    role: String;
    bio: String;
    githubId: String;
}

const userSchema = new Schema(
    {
        provider: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            lowercase: true,
            unique: true,
            required: [true, "can't be blank"],
            match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
            index: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            index: true,
        },
        name: String,
        avatar: String,
        role: { type: String, default: 'USER' },
        bio: String,
        // github
        githubId: {
            type: String,
            unique: true,
            sparse: true,
        },
    },
    { timestamps: true },
);


userSchema.methods.toJSON = function () {
    return {
        id: this._id,
        provider: this.provider,
        email: this.email,
        username: this.username,
        avatar: this.avatar,
        name: this.name,
        role: this.role,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

const isProduction = process.env.NODE_ENV === 'production';
const secretOrKey = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;

const User = mongoose.model('User', userSchema);

export default User;