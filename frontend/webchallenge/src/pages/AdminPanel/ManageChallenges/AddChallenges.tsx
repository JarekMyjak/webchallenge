import React, {useRef, useEffect, useState} from 'react';
import {apiPost} from '../../../api/apiMethods';
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
    FieldWrapper,
    FieldError,
    CustomSelect,
} from './addChallenges.style';
import {useForm, Controller, SubmitHandler, FieldValues} from 'react-hook-form';
import {optionsTech, optionsExperience} from './options';
import TitleBar from '../../../components/TitleBar';
import { useNavigate } from 'react-router-dom';

const AddChallenges: React.FC = () => {
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);
    const navigate = useNavigate();

    const {
        setFocus,
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
        getValues,
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('details', data.details);
        formData.append('tech', JSON.stringify(data.challengeTech));
        formData.append('experience', data.challengeExperience.value);

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
        apiPost('/api/challenges', formData).then((res) => {
            navigate(`/challenges/${res.data.challenge.id}`)
        });
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
                    <SubmitButton>Submit</SubmitButton>
                </FormContainer>
            </form>
        </Container>
    );
};
export default AddChallenges;
