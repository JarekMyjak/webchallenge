import React, { useEffect, useState } from 'react';
import {
    Container,
    Table,
    Row,
    Header,
    Column,
    Button,
} from './listOfChallenges.styles';
import {Link} from 'react-router-dom';
import { apiGet } from '../../../api/apiMethods';
import { Challenge, getChallenges } from '../../../api/apiChallenges';

// const getChallenges = async () => {
//     return await apiGet('/api/challenges').then((res)=> {
//         return res.data
//     });
// }

const ListOfChallenges: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getChallenges();
            console.log(response)
            setChallenges(response);
        };
        fetchData();
    	return () => {}
    }, [])
    

    return (
        <Container>
            <Table>
                <Row>
                    <Header>Challenge name</Header>
                    <Header>Level</Header>
                    <Header>Participants</Header>
                    <Header>Completions</Header>
                    <Header>Controls</Header>
                </Row>
                {challenges.map(challenge => (
                    <Row key={challenge.id}>
                        <Column>
							{challenge.title}
                        </Column>
                        <Column>{challenge.title}</Column>
                        <Column>{challenge.downloads}</Column>
                        <Column>{challenge.entries}</Column>
                        <Column>
                            <Link to='../editchallenge'>
                                <Button>Edit</Button>
                            </Link>
                        </Column>
                    </Row>
                ))}
            </Table>
        </Container>
    );
};

export default ListOfChallenges;
