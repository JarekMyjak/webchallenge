import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TitleBar from '../../components/TitleBar';
import colors from '../../helpers/colors.helpers';
import {FaFlagCheckered} from 'react-icons/fa';
import {Entry, getEntries} from '../../api/apiEntries';
import LoaderContainer from '../../components/LoaderContainer';
import EntryBox from '../../components/EntryBox';

type Props = {};

const Community = (props: Props) => {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        (async () => {
            setEntries(await getEntries());
        })();
    }, []);

    return !!!entries ? (
        <LoaderContainer text='Loading entries'></LoaderContainer>
    ) : (
        <Container>
            <Wrapper>
                <TitleBar text='Recent entries' icon={FaFlagCheckered} />
                <EntryContainer>
                    {entries.map(e => (
                        <EntryBox
                            challengeId={e.challengeId}
                            description={e.description}
                            ownerId={e.userId}
                            likes={e.likes}
                            liked={e.liked}
                            githubUrl={e.githubUrl}
                            entryId={e.id}
                            commentsCount={e.comments.length}
                        />
                    ))}
                </EntryContainer>
            </Wrapper>
        </Container>
    );
};

export default Community;

const Container = styled.div`
    min-height: 95vh;
    box-sizing: border-box;
    padding: 25px 0;
`;
const EntryContainer = styled.div`
    margin-top: 15px;
`;

const Wrapper = styled.div`
    min-height: 300px;
    width: 1200px;
    background-color: ${colors.backgroundSecondary};
    box-shadow: 0px 0px 10px black;
    box-sizing: border-box;
    padding: 15px 25px;
    color: white;
`;
