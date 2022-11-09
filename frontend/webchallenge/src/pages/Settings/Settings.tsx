import React from 'react';
import {useUser} from '../../api/useAuth';
import TitleBar from '../../components/TitleBar';
import {
    Container,
    CustomForm,
    LeftSide,
    FormSection,
    InputWrapper,
    InputTitle,
    CustomInput,
    CustomTextarea,
    RightSide,
    AvatarContainer,
    CurrentAvatar,
    AvatarButton,
    ButtonIcon,
    UpdateContainer,
    UpdateButton,
    Text,
} from './settings.styles';

const Settings: React.FC = () => {
    const user = useUser(state => state.user);

    return (
        <Container>
            <CustomForm>
                <LeftSide>
                    <TitleBar text='Personal' />
                    <FormSection>
                        <InputWrapper>
                            <InputTitle>Name</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Slack username</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                    </FormSection>

                    <TitleBar text='Bio' />

                    <FormSection>
                        <InputWrapper>
                            <InputTitle>
                                About me (max 100 characters)
                            </InputTitle>
                            <CustomTextarea maxLength={100} />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Contact email</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Phone</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Location</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                    </FormSection>
                    <TitleBar text='Links' />
                    <FormSection>
                        <InputWrapper>
                            <InputTitle>GitHub URL</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Twitter URL</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Private Website URL</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                        <InputWrapper>
                            <InputTitle>Linkedin URL</InputTitle>
                            <CustomInput type='text' />
                        </InputWrapper>
                    </FormSection>
                </LeftSide>
                <RightSide>
                    <AvatarContainer>
                        <CurrentAvatar src={user?.avatar} />
                        <AvatarButton>
                            EDIT
                            <ButtonIcon src='https://i.imgur.com/0pPnVKV.png' />
                        </AvatarButton>
                    </AvatarContainer>
                    <UpdateContainer>
                        <Text>
                            All of the fields on this page are optional and can
                            be deleted at any time, and by filling them out,
                            you're giving us consent to share this data wherever
                            your user profile appears
                        </Text>
                        <UpdateButton>UPDATE PROFILE</UpdateButton>
                    </UpdateContainer>
                </RightSide>
            </CustomForm>
        </Container>
    );
};

export default Settings;
