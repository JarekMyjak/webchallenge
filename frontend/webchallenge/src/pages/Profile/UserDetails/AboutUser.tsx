import React from 'react';
import {useUser} from '../../../api/useAuth';
import {Wrapper, Description, DescTitle, DescText} from './aboutUser.styles';

const AboutUser: React.FC = () => {
    const user = useUser(store => store.user);

    return (
        <Wrapper>
            <Description>
                <DescTitle>About me</DescTitle>
                <DescText>
                    {user?.bio === ''
                        ? `We don't know much about ${user?.username}, but we know that he/she is great!😁`
                        : user?.bio}
                </DescText>
            </Description>
        </Wrapper>
    );
};

export default AboutUser;
