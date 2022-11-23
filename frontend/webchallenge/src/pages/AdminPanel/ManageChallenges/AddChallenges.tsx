import React, {useState} from 'react';
import Select from 'react-select';
import {apiPost} from '../../../api/apiMethods';
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
    SelectDiv,
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
    const fileFilelist = file ?? new FileList();
    const picturesFilelist = pictures ?? new FileList();
    for (let i = 0; i < fileFilelist.length; i++) {
        formData.append('files', fileFilelist.item(i) as Blob);
    }
    for (let i = 0; i < picturesFilelist.length; i++) {
        formData.append('images', picturesFilelist.item(i) as Blob);
    }
    const res = apiPost('/api/challenges', formData);
};

const options = [
    {
        label: 'Cos tu sie wpisze',
        options: [
            {value: 'HTML', label: 'HTML'},
            {value: 'CSS', label: 'CSS'},
            {value: 'REACT', label: 'REACT'},
            {value: 'REACT1', label: 'REACT'},
            {value: 'REACT2', label: 'REACT'},
            {value: 'REACT2', label: 'REACT'},
            {value: 'REA4CT2', label: 'REACT'},
            {value: 'REA4C4T2', label: 'REACT'},
            {value: 'REA4CT2', label: 'REACT'},
            {value: 'REA1CT2', label: 'REACT'},
            {value: 'REA4CT2', label: 'REACT'},
            {value: 'REA2CT2', label: 'REACT'},
            {value: 'REA3CT2', label: 'REACT'},
        ],
    },
];
const optionsExperience = [
    {value: 'BEGINNER', label: 'BEGINNER'},
    {value: 'INTERMEDIATE', label: 'INTERMEDIATE'},
    {value: 'ADVANCED', label: 'ADVANCED'},
];
const AddChallenges: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [difficulty, setDifficulty] = useState('');
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
                Add new challenge
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
                        submit(
                            title,
                            description,
                            tech,
                            difficulty,
                            pictures,
                            file
                        );
                    }}
                >
                    Submit
                </SubmitButton>
            </FormContainer>
        </Container>
    );
};
export default AddChallenges;
