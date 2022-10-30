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
                {[...Array(6)].map(() => (
                    <Row>
                        <Column>
                            DREAM PROJECT NAME
                        </Column>
                        <Column>Advanced</Column>
                        <Column>26</Column>
                        <Column>21</Column>
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
