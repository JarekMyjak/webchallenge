import React, {useRef, useEffect, useState} from 'react';
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
    CustomSelect,
} from './addChallenges.style';
import {useForm, Controller, SubmitHandler, FieldValues} from 'react-hook-form';
import {optionsTech, optionsExperience} from './options';
import TitleBar from '../../../components/TitleBar';
import {Challenge} from '../../../api/apiChallenges';

// const submit = (
//     title: string,
//     description: string,
//     tech: {value: string; label: string}[],
//     difficulty: string,
//     files: FileList | null,
//     pictures: FileList | null
// ) => {
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('details', description);
//     formData.append('tech', tech);
//     formData.append('difficulty', difficulty);
//     const fileFilelist = files ?? new FileList();
//     const picturesFilelist = pictures ?? new FileList();
//     for (let i = 0; i < fileFilelist.length; i++) {
//         formData.append('files', fileFilelist.item(i) as Blob);
//     }
//     for (let i = 0; i < picturesFilelist.length; i++) {
//         formData.append('images', picturesFilelist.item(i) as Blob);
//     }
//     const res = apiPost<Challenge>('/api/challenges', formData);
//     res.then(value => {
//         console.log('?', value);
//     });
// };

const AddChallenges: React.FC = () => {
    const challengeFileLabelRef = useRef<HTMLLabelElement>(null);
    const challengeImagesRef = useRef<HTMLLabelElement>(null);
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);

    const {
        setFocus,
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
        getValues,
    } = useForm();

    const watchImages = watch('challengeImages');
    const watchChallFile = watch('challengeFile');

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('details', data.details);
        formData.append('tech', JSON.stringify(data.challengeTech));
        formData.append('experience', data.challengeExperience.value);

        // const fileFilelist = file ?? new FileList();
        // const picturesFilelist = pictures ?? new FileList();
        console.log(file);
        console.log(pictures);
        if (file) {
            for (let i = 0; i < file.length; i++) {
                formData.append('files', file.item(i) as Blob);
            }
        }
        if (pictures) {
            for (let i = 0; i < pictures.length; i++) {
                formData.append('images', pictures.item(i) as Blob);
            }
        }
        // formData.values().forEach(element => {
        //     console.log(element);
        // });
        console.log('asd', Array.from(formData.values()));
        const res = apiPost('/api/challenges', formData);
        console.log(res);
        /// przekierowanie do zrobionego czellendzu?
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    Add new challenge
                    <FieldWrapper>
                        <TitleBar text='Challenge title' />
                        <CustomInputText
                            error={!!errors.title}
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
                        <TitleBar text='Description' />
                        <CustomTextArea
                            error={!!errors.description}
                            small
                            {...register('description', {
                                required: 'Required',
                            })}
                            placeholder='Description'
                        />
                        <FieldError error={!!errors.description}>
                            {errors.description?.message}
                        </FieldError>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TitleBar text='Details (MARKDOWN)' />
                        <CustomTextArea
                            error={!!errors.description}
                            {...register('details', {
                                required: 'Required',
                            })}
                            placeholder='Description'
                        />
                        <FieldError error={!!errors.description}>
                            {errors.description?.message}
                        </FieldError>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TitleBar text='Technologies' />
                        <SelectDiv>
                            <Controller
                                name='challengeTech'
                                control={control}
                                render={({field}) => (
                                    <CustomSelect
                                        {...field}
                                        options={optionsTech}
                                        isMulti
                                        isSearchable={false}
                                        placeholder='Select technologies...'
                                        theme={(theme: any) => ({
                                            ...theme,
                                            borderRadius: 1,
                                            colors: {
                                                ...theme.colors,
                                                neutral0: '#454545',
                                                neutral20: '#454545',
                                                neutral10: '#222222',
                                                primary: '#EB8702',
                                                primary25: '#7c7c7c',
                                                primary50: '#575757',
                                                neutral80: '#D0D0D0',
                                            },
                                        })}
                                    />
                                )}
                                rules={{required: 'Required!'}}
                            />
                            <FieldError error={!!errors.challengeTech}>
                                {errors.challengeTech?.message}
                            </FieldError>
                        </SelectDiv>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TitleBar text='Experience' />
                        <SelectDiv>
                            <Controller
                                name='challengeExperience'
                                control={control}
                                render={({field}) => (
                                    <CustomSelect
                                        {...field}
                                        // menuPortalTarget={{}}
                                        options={optionsExperience}
                                        placeholder='Select experience'
                                        theme={(theme: any) => ({
                                            ...theme,
                                            borderRadius: 1,
                                            colors: {
                                                ...theme.colors,
                                                neutral0: '#454545',
                                                neutral20: '#454545',
                                                neutral10: '#222222',
                                                primary: '#EB8702',
                                                primary25: '#7c7c7c',
                                                primary50: '#575757',
                                                neutral80: '#D0D0D0',
                                            },
                                        })}
                                    />
                                )}
                                rules={{required: 'Required!'}}
                            />
                            <FieldError error={!!errors.challengeExperience}>
                                {errors.challengeExperience?.message}
                            </FieldError>
                        </SelectDiv>
                    </FieldWrapper>
                    <FileButtonsContainer>
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
                    </FileButtonsContainer>
                    {/* <input type="text" value={title} onChange={((e) => setTitle(e.target.value))} /><br/> */}
                    <SubmitButton>Submit</SubmitButton>
                </FormContainer>
            </form>
        </Container>
    );
};
export default AddChallenges;
