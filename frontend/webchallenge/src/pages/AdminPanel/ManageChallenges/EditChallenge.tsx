import React, {useRef, useState, useEffect} from 'react';
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
    LoaderContainer,
    LoaderText,
} from './editChallenge.styles';
import {useForm, Controller} from 'react-hook-form';
import {optionsTech, optionsExperience} from './options';
import TitleBar from '../../../components/TitleBar';
import {useParams} from 'react-router-dom';
import {Challenge, getChallenge} from '../../../api/apiChallenges';
import Loader from '../../../components/Loader';

const EditChallenge: React.FC = () => {
    const challengeFileLabelRef = useRef<HTMLLabelElement>(null);
    const challengeImagesRef = useRef<HTMLLabelElement>(null);
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const {
        setFocus,
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
        getValues,
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            challengeTech: '',
            challengeImages: undefined,
            challengeFile: undefined,
            challengeExperience: '',
            challengeTechnologies: '',
        },
    });

    const watchImages = watch('challengeImages');
    const watchChallFile = watch('challengeFile');

    const onSubmit = (data: any) => {
        console.log(watchImages);

        /// przekierowanie do zrobionego czellendzu?
    };

    useEffect(() => {
        if (challengeId) {
            (async () => {
                setChallenge(await getChallenge(challengeId));
            })();
        }
    }, []);

    return challenge ? (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    Edit challenge '{challenge?.title}'
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
                        <FileButton
                            error={!!errors.challengeImages}
                            onClick={e => {
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
                    <SubmitButton>Submit</SubmitButton>
                </FormContainer>
            </form>
        </Container>
    ) : (
        <LoaderContainer>
            <Loader />
            <LoaderText>Loading challenge</LoaderText>
        </LoaderContainer>
    );
};
export default EditChallenge;
