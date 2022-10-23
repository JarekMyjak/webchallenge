import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {apiGet, apiPost} from '../../../api/apiMethods';
import colors from '../../../helpers/colors.helpers';
import {
    Container,
    FormContainer,
    CustomLabel,
    CustomInputText,
    CustomFile,
    CustomFileLabel,
    FileButton,
    SubmitButton,
    FileButtonsContainer,
    CustomTextArea,
} from './ManageChallenges.style';

const submit = (
    title: string,
    description: string,
    pictures: FileList,
    file: FileList
) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    file.item;
    for (let i = 0; i < file.length; i++) {
        formData.append('files', file.item(i) as Blob);
    }
    for (let i = 0; i < pictures.length; i++) {
        formData.append('images', pictures.item(i) as Blob);
    }
    const res = apiPost('/api/challenges', formData);
    console.log(res);
};

const ManageChallenges: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);

    return (
        <Container>
            <FormContainer>
                Add new challenge
                <div
                    style={{
                        transform: 'translateX(-100px)',
                    }}
                >
                    <CustomLabel htmlFor='challengeTitle'>Title:</CustomLabel>
                    <CustomInputText
                        type='text'
                        id='challengeTitle'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        transform: 'translateX(-100px)',
                    }}
                >
                    <CustomLabel htmlFor='challengeDescription'>
                        Description:
                    </CustomLabel>
                    <CustomTextArea
                        type='text'
                        id='challengeDescription'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                {/* <span>{file?.item(0)?.name}</span><br/> */}
                <FileButtonsContainer>
                    <FileButton>
                        <CustomFileLabel htmlFor='challengeImages'>
                            {pictures?.item(0)
                                ? `Images: [${pictures?.length}]`
                                : 'Upload images'}
                            <CustomFile
                                type='file'
                                id='challengeImages'
                                multiple
                                accept='image/png, image/gif, image/jpeg'
                                onChange={e => setPictures(e.target.files)}
                            />
                        </CustomFileLabel>
                    </FileButton>
                    <FileButton>
                        <CustomFileLabel htmlFor='challengeFile'>
                            {file?.item(0)
                                ? `${file?.item(0)?.name}`
                                : 'Upload challenges files'}
                            <CustomFile
                                type='file'
                                id='challengeFile'
                                onChange={e => setFile(e.target.files)}
                            />
                        </CustomFileLabel>
                    </FileButton>
                </FileButtonsContainer>
                {/* <input type="text" value={title} onChange={((e) => setTitle(e.target.value))} /><br/> */}
                <SubmitButton
                    onClick={() => {
                        submit(title, description, pictures, file);
                    }}
                >
                    Submit
                </SubmitButton>
            </FormContainer>
        </Container>
    );
};
export default ManageChallenges;
