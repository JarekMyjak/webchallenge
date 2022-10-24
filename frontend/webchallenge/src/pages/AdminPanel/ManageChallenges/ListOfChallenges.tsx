import React from 'react';
import {
    Container,
    Table,
    Row,
    Header,
    Column,
    Button,
} from './listOfChallenges.styles';
import {Link} from 'react-router-dom';

const ListOfChallenges: React.FC = () => {
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
                {[...Array(20)].map(() => (
                    <Row>
                        <Column>
                            I HAD A DREAM, A DREAM TO BUILD a WOODEN HOUSES AT
                            OLCZA, BUT
                        </Column>
                        <Column>Advanced</Column>
                        <Column>2136</Column>
                        <Column>2137</Column>
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
