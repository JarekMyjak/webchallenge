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
    SelectDiv,
} from './addChallenges.style';
import Select from 'react-select';

const options = [
    {
        label: 'Cos tu sie wpisze',
        options: [
            {value: 'HTML', label: 'HTML'},
            {value: 'CSS', label: 'CSS'},
            {value: 'REACT', label: 'REACT'},
        ],
    },
];
const optionsExperience = [
    {value: 'BEGINNER', label: 'BEGINNER'},
    {value: 'INTERMEDIATE', label: 'INTERMEDIATE'},
    {value: 'ADVANCED', label: 'ADVANCED'},
];

const EditChallenge: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);
    const [selectedTechs, setSelectedTechs] = useState<any[]>([]);
    const [selectedExp, setSelectedExp] = useState<any[]>([]);

    const handleChangeTech = (selectedOption: any) => {
        setSelectedTechs(selectedOption);
    };
    const handleChangeExp = (selectedOption: any) => {
        setSelectedExp(selectedOption);
    };
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
                <SelectDiv>
                    <Select
                        onChange={handleChangeTech}
                        isMulti
                        options={options}
                        isSearchable={false}
                        placeholder='Select technologies...'
                    />

                    {/* <CustomInputText
                        type='text'
                        placeholder='Difficulty'
                        id='challengeDifficulty'
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                    /> */}
                </SelectDiv>
                <SelectDiv>
                    <Select
                        onChange={handleChangeExp}
                        options={optionsExperience}
                        isSearchable={false}
                        placeholder='Select experience...'
                    />

                    {/* <CustomInputText
                        placeholder='Technologies'
                        type='text'
                        id='challengeTech'
                        value={tech}
                        onChange={e => setTech(e.target.value)} */}
                </SelectDiv>
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
