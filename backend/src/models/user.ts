import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface userType {
    _id: String;
    provider: String;
    username: String;
    email: String;
    githubName: String;
    avatar: String;
    role: String;
    bio: String;
    githubId: String;
    github: String;
    linkedIn: String;
    website: String;
    city: String;
    premium: boolean;
}

export interface userTypeMethods {
    toJSON(): {};
}

const userSchema = new Schema<userType, {}, userTypeMethods>(
    {
        provider: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: [true, "can't be blank"],
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
        githubName: String,
        avatar: String,
        role: { type: String, default: 'USER' },
        bio: String,
        city: String,
        github: String,
        linkedIn: String,
        website: String,
        premium: Boolean,
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
        githubName: this.githubName,
        role: this.role,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        bio: this.bio,
        city: this.city,
        website: this.website,
        github: this.github,
        linkedIn: this.linkedIn,
        premium: this.premium,
    };
};

const isProduction = process.env.NODE_ENV === 'production';
const secretOrKey = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;

const User = mongoose.model('User', userSchema);

export default User;