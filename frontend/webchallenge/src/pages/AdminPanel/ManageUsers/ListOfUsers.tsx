import React, {useEffect, useState} from 'react';
import {
    Container,
    Table,
    Row,
    Header,
    Column,
    Button,
    LoaderContainer,
    LoaderText,
} from './listOfUsers.styles';
import {Link} from 'react-router-dom';
import {apiGet} from '../../../api/apiMethods';
import Loader from '../../../components/Loader';
import {user} from '../../../api/useAuth';
import {getUsers} from '../../../api/apiUser';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import format from 'date-fns/format';

const ListOfChallenges: React.FC = () => {
    const [users, setUsers] = useState<user[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getUsers();
            console.log(response);
            setUsers(response);
            setLoading(false);
        };
        fetchData();
        return () => {};
    }, []);

    return (
        <Container>
            {!loading ? (
                <Table>
                    <Row>
                        <Header></Header>
                        <Header>User name</Header>
                        <Header>Role</Header>
                        <Header>ID</Header>
                        <Header>Premium</Header>
                        <Header>Joined</Header>
                        <Header>Controls</Header>
                    </Row>
                    {users?.map(u => (
                        <Row key={u.id}>
                            <Column>
                                <Link to={`/profile/${u.id}`}>
                                    <UserAvatar src={u.avatar} />
                                </Link>
                            </Column>
                            <Column>{u.username}</Column>
                            <Column>{u.role}</Column>
                            <Column>{u.id}</Column>
                            <Column>{u.premium ? 'true' : 'false'}</Column>
                            <Column>
                                {format(new Date(u.createdAt), 'MM/dd/yyyy')}
                            </Column>
                            <Column>
                                {/* <Link to={`../editchallenge/${challenge.id}`}> */}
                                <Button>Edit</Button>
                                {/* </Link> */}
                            </Column>
                        </Row>
                    ))}
                </Table>
            ) : (
                <LoaderContainer>
                    <Loader />
                    <LoaderText>Loading list of users</LoaderText>
                </LoaderContainer>
            )}
        </Container>
    );
};

export default ListOfChallenges;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    background-color: ${colors.backgroundSecondary};
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
    position: relative;
`;
