import mongoose, { ObjectId } from 'mongoose';

const { Schema } = mongoose;

export interface entryType {
    userId: String;
    challengeId: String;
    githubUrl: String;
    pagesUrl: String;
    comment: String;
    likedUserIds: ObjectId[];
}

const entrySchema = new Schema<entryType>({
    userId: {
        type: String,
        required: true,
    },
    challengeId: {
        type: String,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    pagesUrl: {
        type: String,
        required: false,
    },
    comment: {
        type: String,
        required: false,
    },
    likedUserIds: {
        type: [String],
        required: false,
        default: [],
    },
}, { timestamps: true });

entrySchema.methods.toJSON = function () {
    return {
        id: this._id,
        userId: this.userId,
        challengeId: this.challengeId,
        githubUrl: this.githubUrl,
        pagesUrl: this.pagesUrl,
        comment: this.comment,
        likes: this.likedUserIds.length
    };
};

entrySchema.methods.userJSON = function (userId: string) {
    const userLiked = this.likedUserIds.includes(userId)
    return {
        id: this._id,
        userId: this.userId,
        challengeId: this.challengeId,
        githubUrl: this.githubUrl,
        pagesUrl: this.pagesUrl,
        comment: this.comment,
        likes: this.likedUserIds.length,
        liked: userLiked,
    };
};

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;