import React, {useRef, useState} from 'react';
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
    FieldWrapper,
    FieldError,
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

    const challengeFileLabelRef = useRef<HTMLLabelElement>(null);
    const challengeImagesRef = useRef<HTMLLabelElement>(null);

    const {
        setFocus,
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
                    <FieldWrapper>
                        <CustomInputText
                            {...register('title', {
                                required: 'Required',
                            })}
                            placeholder='Title'
                            type='text'
                        />
                        <FieldError error={!!errors.title}>
                            {errors.title?.message}
                        </FieldError>
                    </FieldWrapper>
                    <FieldWrapper>
                        <CustomTextArea
                            {...register('description', {
                                required: 'Required',
                            })}
                            placeholder='Description'
                        />
                        <FieldError error={!!errors.description}>
                            {errors.description?.message}
                        </FieldError>
                    </FieldWrapper>
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
                            rules={{required: 'Required!'}}
                        />
                        <FieldError error={!!errors.challengeTech}>
                            {errors.challengeTech?.message}
                        </FieldError>
                    </SelectDiv>
                    <SelectDiv>
                        <Controller
                            name='challengeExperience'
                            control={control}
                            render={({field}) => (
                                <Select
                                    {...field}
                                    options={optionsExperience}
                                    placeholder='Select experience'
                                />
                            )}
                            rules={{required: 'Required!'}}
                        />
                        <FieldError error={!!errors.challengeExperience}>
                            {errors.challengeExperience?.message}
                        </FieldError>
                    </SelectDiv>
                    <FileButtonsContainer>
                        <FileButton
                            error={!!errors.challengeImages}
                            onClick={e => {
                                // e.preventDefault();
                                challengeImagesRef.current?.click();
                            }}
                        >
                            <CustomFileLabel
                                htmlFor='challengeImages'
                                ref={challengeImagesRef}
                            >
                                {pictures?.item(0)
                                    ? `Images: [${pictures?.length}]`
                                    : 'Upload images'}
                            </CustomFileLabel>
                        </FileButton>
                        <CustomFile
                            {...register('challengeImages', {required: true})}
                            type='file'
                            id='challengeImages'
                            multiple
                            accept='image/png, image/gif, image/jpeg'
                        />
                        <FileButton
                            error={!!errors.challengeFile}
                            onClick={e => {
                                e.stopPropagation();
                                challengeFileLabelRef.current?.click();
                                // e.preventDefault();
                            }}
                        >
                            <CustomFileLabel
                                htmlFor='challengeFile'
                                ref={challengeFileLabelRef}
                            >
                                {file?.item(0)
                                    ? `${file?.item(0)?.name}`
                                    : 'Upload challenge file'}
                                <CustomFile
                                    {...register('challengeFile', {
                                        required: true,
                                    })}
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
