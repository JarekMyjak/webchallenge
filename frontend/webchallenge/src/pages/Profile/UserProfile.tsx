import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import Activities from './Activities/Activities';
import Challenges from './Challenges/Challenges';
import Leaderboard from './Leaderboard/Leaderboard';
import Premium from './Premium/Premium';
import UserDetails from './UserDetails/UserDetails';
import {user as IUser, useUser} from '../../api/useAuth';
import {useParams} from 'react-router-dom';
import {getUserById} from '../../api/apiUser';
import Loader from '../../components/Loader';
import LoaderContainer from '../../components/LoaderContainer';

const UserProfile: React.FC = () => {
    const {userId} = useParams();
    const [user, setUser] = useState<IUser | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (userId) {
            (async () => {
                setUser(await getUserById(userId));
            })();
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            (async () => {
                setUser(await getUserById(userId));
            })();
            setLoading(false);
        }
    }, [userId]);

    return loading ? (
        <LoaderContainer text='Loading user...' />
    ) : (
        <Container>
            {user && (
                <>
                    <FirstSection>
                        <UserDetails user={user} />
                        <RightPanels>
                            <Premium />
                            <Leaderboard />
                        </RightPanels>
                    </FirstSection>
                    <Challenges user={user} />
                    {/* <Activities /> */}
                </>
            )}
        </Container>
    );
};

export default UserProfile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    min-height: 95vh;
`;

const FirstSection = styled.div`
    display: flex;
    height: 750px;
    width: 1250px;
`;

const RightPanels = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 750px;
    gap: 30px;
`;
