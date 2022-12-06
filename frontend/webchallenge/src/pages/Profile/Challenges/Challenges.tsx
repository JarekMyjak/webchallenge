import React, {useState, useEffect} from 'react';
import TitleBar from '../../../components/TitleBar';
//TEMP
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    ChallengeList,
    Filter,
    Filters,
    TopBar,
    Wrapper,
} from './Challenges.styles';
import firstCard from '../../../assets/images/landing/First_card.jpg';
import bookmarkIcon from '../../../assets/icons/bookmark.png';
import {Entry, getEntriesByUserId} from '../../../api/apiEntries';
import EntryBox from '../../../components/EntryBox';

interface IChallanges {
    userId: string;
}

const Challenges: React.FC<IChallanges> = props => {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        if (props.userId) {
            (async () => {
                setEntries(await getEntriesByUserId(props.userId));
            })();
        }
    }, []);

    return entries.length > 0 ? (
        <Wrapper>
            <TopBar>
                <TitleBar imageSrc={bookmarkIcon} text='Your challenges' />
                <Filters>
                    <Filter>Sort By</Filter>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <ChallengeList>
                {entries.map(e => (
                    <EntryBox
                        challengeId={e.challengeId}
                        description={e.description}
                        ownerId={e.userId}
                        likes={e.likes}
                        liked={e.liked}
                        githubUrl={e.githubUrl}
                        entryId={e.id}
                    />
                ))}
            </ChallengeList>
        </Wrapper>
    ) : (
        <></>
    );
};

export default Challenges;
