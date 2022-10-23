import multer from 'multer';
import { MulterAzureStorage, MASNameResolver, MASObjectResolver } from 'multer-azure-blob-storage';

const resolveBlobName: MASNameResolver = (req: any, file: Express.Multer.File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const blobName: string = `${req.body.title}/${file.originalname}`;
        resolve(blobName);
    });
};

export type MetadataObj = { [k: string]: string };
const resolveMetadata: MASObjectResolver = (req: any, file: Express.Multer.File): Promise<MetadataObj> => {
    return new Promise<MetadataObj>((resolve, reject) => {
        const metadata: MetadataObj = {}
        resolve(metadata);
    });
};

const resolveContentSettings: MASObjectResolver = (req: any, file: Express.Multer.File): Promise<MetadataObj> => {
    return new Promise<MetadataObj>((resolve, reject) => {
        const contentSettings: MetadataObj = {};
        resolve(contentSettings);
    });
};

const env = process.env;

const azureStorage: MulterAzureStorage = new MulterAzureStorage({
    connectionString: env.BLOB_CONNECTION_STRING,
    accessKey: env.BLOB_ACCESS_KEY,
    accountName: 'challengestore',
    containerName: 'challenges',
    blobName: resolveBlobName,
    metadata: resolveMetadata,
    contentSettings: resolveContentSettings,
    containerAccessLevel: 'blob',
    urlExpirationTime: 60
});

export const upload = multer({
    storage: azureStorage
});
