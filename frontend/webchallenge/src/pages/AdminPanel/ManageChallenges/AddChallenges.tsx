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
    CustomSelect,
} from './addChallenges.style';
import {useForm, Controller} from 'react-hook-form';
import {optionsTech, optionsExperience} from './options';

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

const AddChallenges: React.FC = () => {
    const challengeFileLabelRef = useRef<HTMLLabelElement>(null);
    const challengeImagesRef = useRef<HTMLLabelElement>(null);

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

    const onSubmit = (data: any) => {
        console.log(watchImages);

        /// przekierowanie do zrobionego czellendzu?
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    Add new challenge
                    <FieldWrapper>
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
                        <CustomTextArea
                            error={!!errors.description}
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
                                {watchImages?.item(0)
                                    ? `Images: [${watchImages?.length}]`
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
                                {watchChallFile?.item(0)
                                    ? `${watchChallFile?.item(0)?.name}`
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
