import React, {useState} from 'react';
import {
    Container,
    FormContainer,
    CustomInputText,
    CustomFile,
    CustomFileLabel,
    FileButton,
    SubmitButton,
    FileButtonsContainer,
    CustomTextArea,
} from './addChallenges.style';

const EditChallenge: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);

    return (
        <Container>
            <FormContainer>
                Editing challenge: 'name'
                <div>
                    <CustomInputText
                        placeholder='Title'
                        type='text'
                        id='challengeTitle'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <CustomTextArea
                        placeholder='Description'
                        id='challengeDescription'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <FileButtonsContainer>
                    <FileButton>
                        <CustomFileLabel htmlFor='challengeImages'>
                            {pictures?.item(0)
                                ? `Images: [${pictures?.length}]`
                                : 'Change images set'}
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
                                : 'Change project files'}
                            <CustomFile
                                type='file'
                                id='challengeFile'
                                onChange={e => setFile(e.target.files)}
                            />
                        </CustomFileLabel>
                    </FileButton>
                </FileButtonsContainer>
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
        </Container>
    );
};
export default EditChallenge;
