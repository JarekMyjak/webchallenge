import React from 'react';
import TitleBar from '../../../components/TitleBar';
import AboutUser from './AboutUser';
import ChallengeData from './ChallengeData';
import UserContact from './UserContact';
import UserData from './UserData';
import {Container} from './userDetails.styles';
import detailsIcon from '../../../assets/icons/user_icon.png';
import {user} from '../../../api/useAuth';
interface IUserDetails {
    user: user;
}
const UserDetails: React.FC<IUserDetails> = props => {
    const user = props.user;

    return (
        <Container>
            <UserData user={user} />
            <TitleBar imageSrc={detailsIcon} text='Profile Details' />
            <AboutUser user={user} />
            <UserContact user={user} />
            <ChallengeData />
        </Container>
    );
};

export default UserDetails;
