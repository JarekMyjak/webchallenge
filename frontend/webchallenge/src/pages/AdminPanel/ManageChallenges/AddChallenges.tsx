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
import {useForm, Controller} from 'react-hook-form';

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
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    Add new challenge
                    <div>
                        <CustomInputText
                            {...register('title')}
                            placeholder='Title'
                            type='text'
                            // id='challengeTitle'
                            // value={title}
                            // onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <CustomTextArea
                            {...register('description')}
                            placeholder='Description'

                            // id='challengeDescription'
                            // value={description}
                            // onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <SelectDiv>
                        <Controller
                            name='challengeTech'
                            control={control}
                            render={({field}) => (
                                <Select
                                    {...field}
                                    options={options}
                                    isMulti
                                    isSearchable={false}
                                    placeholder='Select technologies...'
                                />
                            )}
                        />
                    </SelectDiv>
                    <SelectDiv>
                        <Controller
                            name='challengeExperience'
                            control={control}
                            render={({field}) => (
                                <Select
                                    {...field}
                                    options={optionsExperience}
                                    isMulti
                                    isSearchable={false}
                                    placeholder='Select experience'
                                />
                            )}
                        />
                    </SelectDiv>
                    <FileButtonsContainer>
                        <FileButton>
                            <CustomFileLabel htmlFor='challengeImages'>
                                {pictures?.item(0)
                                    ? `Images: [${pictures?.length}]`
                                    : 'Upload images'}
                                <CustomFile
                                    {...register('challengeImages')}
                                    type='file'
                                    id='challengeImages'
                                    multiple
                                    accept='image/png, image/gif, image/jpeg'
                                />
                            </CustomFileLabel>
                        </FileButton>
                        <FileButton>
                            <CustomFileLabel htmlFor='challengeFile'>
                                {file?.item(0)
                                    ? `${file?.item(0)?.name}`
                                    : 'Upload challenge file'}
                                <CustomFile
                                    {...register('challengeFile')}
                                    type='file'
                                    id='challengeFile'
                                />
                            </CustomFileLabel>
                        </FileButton>
                    </FileButtonsContainer>
                    {/* <input type="text" value={title} onChange={((e) => setTitle(e.target.value))} /><br/> */}
                    <SubmitButton
                    // onClick={() => {
                    //     submit(
                    //         title,
                    //         description,
                    //         tech,
                    //         difficulty,
                    //         pictures,
                    //         file
                    //     );
                    // }}
                    >
                        Submit
                    </SubmitButton>
                </FormContainer>
            </form>
        </Container>
    );
};
export default AddChallenges;
