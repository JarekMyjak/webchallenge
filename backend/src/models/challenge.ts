import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

export interface challengeType {
    title: String;
    description: String;
    imageUrls: String[];
    blobUrl: String;
}

const challengeSchema = new Schema<challengeType>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    imageUrls: {
        type: [String],
    },
    blobUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

challengeSchema.methods.toJSON = function () {
    return {
        id: this._id,
        title: this.title,
        description: this.description,
        imageUrls: this.imageUrls,
        blobUrl: this.blobUrl,
    };
};

const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge;