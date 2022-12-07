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
} from './listOfChallenges.styles';
import {Link} from 'react-router-dom';
import {apiGet} from '../../../api/apiMethods';
import {
    Challenge,
    deleteChallengeById,
    getChallenges,
} from '../../../api/apiChallenges';
import Loader from '../../../components/Loader';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

// const getChallenges = async () => {
//     return await apiGet('/api/challenges').then((res)=> {
//         return res.data
//     });
// }

const ListOfChallenges: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getChallenges();
            setChallenges(response);
            setLoading(false);
            console.log(response);
        };
        fetchData();
        return () => {};
    }, []);

    const onDelete = async (id: string) => {
        await deleteChallengeById(id);

        setLoading(true);
        const fetchData = async () => {
            const response = await getChallenges();
            setChallenges(response);
            setLoading(false);
            console.log(response);
        };
        fetchData();
    };

    return (
        <Container>
            {!loading ? (
                <Table>
                    <Row>
                        <Header></Header>
                        <Header>ID</Header>
                        <Header>Title</Header>
                        <Header>Experience</Header>
                        <Header>Downloads</Header>
                        <Header>Entries</Header>
                        <Header>Controls</Header>
                    </Row>
                    {challenges.map(challenge => (
                        <Row key={challenge.id}>
                            <Link to={`/challenges/${challenge.id}`}>
                                <Column>
                                    <UserAvatar src={challenge.imageUrls[0]} />
                                </Column>
                            </Link>
                            <Column>{challenge.id}</Column>
                            <Column>{challenge.title}</Column>
                            <Column>{challenge.experience}</Column>
                            <Column>{challenge.downloads}</Column>
                            <Column>{0}</Column>
                            <Column>
                                <Link to={`../editchallenge/${challenge.id}`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button onClick={() => onDelete(challenge.id)}>
                                    Delete
                                </Button>
                            </Column>
                        </Row>
                    ))}
                </Table>
            ) : (
                <LoaderContainer>
                    <Loader />
                    <LoaderText>Loading list of challenges</LoaderText>
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
