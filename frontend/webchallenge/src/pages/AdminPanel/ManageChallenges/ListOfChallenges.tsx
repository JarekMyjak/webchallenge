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
import {Challenge, getChallenges} from '../../../api/apiChallenges';
import Loader from '../../../components/Loader';

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
            // console.log(response)
            setChallenges(response);
            setLoading(false);
            console.log(response);
        };
        fetchData();
        return () => {};
    }, []);
    return (
        <Container>
            {!loading ? (
                <Table>
                    <Row>
                        <Header>name</Header>
                        <Header>level</Header>
                        <Header>downloads</Header>
                        <Header>entries</Header>
                        <Header>controls</Header>
                    </Row>
                    {challenges.map(challenge => (
                        <Row key={challenge.id}>
                            <Column>{challenge.title}</Column>
                            <Column>{challenge.title}</Column>
                            <Column>{challenge.downloads}</Column>
                            <Column>{0}</Column>
                            <Column>
                                <Link to={`../editchallenge/${challenge.id}`}>
                                    <Button>Edit</Button>
                                </Link>
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
