import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

export interface challengeType {
    title: String;
    description: String;
    details: String;
    tech: String;
    experience: String;
    imageUrls: String[];
    blobUrl: String;
    premiumBlobUrl: String;
    downloads: Number;
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
	details: {
        type: String,
        required: false,
    },
    tech: {
        type: String,
        required: false,
    },
    experience: {
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
    premiumBlobUrl: {
        type: String,
        required: true,
    },
    downloads: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

challengeSchema.methods.toJSON = function () {
    return {
        id: this._id,
        title: this.title,
        description: this.description,
        details: this.details,
        tech: this.tech,
        experience: this.experience,
        imageUrls: this.imageUrls,
        blobUrl: this.blobUrl,
        downloads: this.downloads
    };
};

const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge;