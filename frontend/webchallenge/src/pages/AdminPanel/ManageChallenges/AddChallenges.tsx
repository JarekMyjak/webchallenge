import React, {useState} from 'react';
import {apiGet, apiPost} from '../../../api/apiMethods';
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
} from './addChallenges.style';

const submit = (
    title: string,
    description: string,
    tech: string,
    difficulty: string,
    pictures: FileList | null,
    file: FileList | null
) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tech', tech);
    formData.append('difficulty', difficulty);
    const fileFilelist = file ?? new FileList;
    const picturesFilelist = pictures ?? new FileList;
    for (let i = 0; i < fileFilelist.length; i++) {
        formData.append('files', fileFilelist.item(i) as Blob);
    }
    for (let i = 0; i < picturesFilelist.length; i++) {
        formData.append('images', picturesFilelist.item(i) as Blob);
    }
    const res = apiPost('/api/challenges', formData);
};

const AddChallenges: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [difficulty, setDifficulty] = useState('');
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
                        id='challengeDescription'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        transform: 'translateX(-100px)',
                    }}
                >
                    <CustomLabel htmlFor='challengeTech'>Tech:</CustomLabel>
                    <CustomInputText
                        type='text'
                        id='challengeTech'
                        value={tech}
                        onChange={e => setTech(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        transform: 'translateX(-100px)',
                    }}
                >
                    <CustomLabel htmlFor='challengeDifficulty'>Difficulty:</CustomLabel>
                    <CustomInputText
                        type='text'
                        id='challengeDifficulty'
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
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
                                : 'Upload challenge file'}
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
                        submit(title, description, tech, difficulty, pictures, file);
                    }}
                >
                    Submit
                </SubmitButton>
            </FormContainer>
        </Container>
    );
};
export default AddChallenges;