import mongoose, { ObjectId } from 'mongoose';

const { Schema } = mongoose;

export interface entryType {
    userId: String;
    challengeId: String;
    githubUrl: String;
    pagesUrl: String;
    description: String;
    likedUserIds: ObjectId[];
    comments: commentType[];
}

interface entryTypeMethods {
    userJSON(userId: string): {};
}

export interface commentType {
    _id: ObjectId;
    userId: String;
    userName: String;
    content: String;
    timeAdded: Date;
}

const commentSchema = new Schema<commentType>({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timeAdded: {
        type: Date,
        default: Date.now,
    },
})

const entrySchema = new Schema<entryType, {}, entryTypeMethods>({
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
    description: {
        type: String,
        required: false,
    },
    likedUserIds: {
        type: [String],
        required: false,
        default: [],
    },
    comments: {
        type: [commentSchema],
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
        description: this.description,
        likes: this.likedUserIds.length,
        comments: this.comments,
    };
};

entrySchema.methods.userJSON = function (userId: string) {
    const userLiked = this.likedUserIds.includes(userId)
    const comments = this.comments.map((comment) => {
        return {
            id: comment.id,
            content: comment.content,
            userName: comment.userName,
        }
    })

    return {
        id: this._id,
        userId: this.userId,
        challengeId: this.challengeId,
        githubUrl: this.githubUrl,
        pagesUrl: this.pagesUrl,
        description: this.description,
        likes: this.likedUserIds.length,
        liked: userLiked,
        comments: comments
    };
};

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;