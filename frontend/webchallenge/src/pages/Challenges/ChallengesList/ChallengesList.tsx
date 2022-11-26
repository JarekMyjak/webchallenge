import React, {useEffect, useState} from 'react';
import TitleBar from '../../../components/TitleBar';
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    Container,
    TitleAndOptions,
    Options,
    CustomLink,
    List,
    LoaderList,
} from './challengesList.styles';
import {
    Challenge,
    downloadChallengeUrl,
    getChallenges,
} from '../../../api/apiChallenges';
import bookmarkIcon from '../../../assets/icons/bookmark.png';
import Loader from '../../../components/Loader';
import Select from 'react-select';

const options = [
    {
        label: 'Cos tu sie wpisze',
        options: [
            {value: 'HTML', label: 'HTML'},
            {value: 'CSS', label: 'CSS'},
            {value: 'REACT', label: 'REACT'},
        ],
    },
];
const optionsExperience = [
    {value: 'BEGINNER', label: 'BEGINNER'},
    {value: 'INTERMEDIATE', label: 'INTERMEDIATE'},
    {value: 'ADVANCED', label: 'ADVANCED'},
];

const ChallengesList: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [loading, setLoader] = useState<boolean>(true);
    const [selectedTechs, setSelectedTechs] = useState<any[]>([]);
    const [selectedExp, setSelectedExp] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            setChallenges(await getChallenges());
            setLoader(false);
        })();
    }, []);

    const handleChangeTech = (selectedOption: any) => {
        setSelectedTechs(selectedOption);
    };
    const handleChangeExp = (selectedOption: any) => {
        setSelectedExp(selectedOption);
    };

    return (
        <Container>
            <TitleAndOptions>
                <TitleBar imageSrc={bookmarkIcon} text='All challenges' />
                <Options>
                    <Select
                        onChange={handleChangeTech}
                        isMulti
                        options={options}
                        isSearchable={false}
                        placeholder='Select technologies...'
                        theme={(theme: any) => ({
                            ...theme,
                            borderRadius: 1,
                            colors: {
                                ...theme.colors,
                                neutral0: '#454545',
                                neutral20: '#222222',
                                neutral10: '#222222',
                                primary: '#222222',
                                primary25: '#7c7c7c',
                                primary50: '#575757',
                                neutral80: '#D0D0D0',
                            },
                        })}
                    />
                </Options>
            </TitleAndOptions>
            {!loading && (
                <List>
                    {challenges
                        .filter(el =>
                            el.tech
                                .replace(/ /g, '')
                                .split(',')
                                .some(r => {
                                    return selectedTechs.length > 0
                                        ? selectedTechs.some(sel =>
                                              sel.value.includes(
                                                  r.toUpperCase()
                                              )
                                          )
                                        : true;
                                })
                        )

                        .map(c => (
                            <React.Fragment key={`fragment${c.id}`}>
                                <CustomLink to={c.id}>
                                    <ChallengeCard
                                        key={`challengeCard${c.id}`}
                                        exp={c.experience}
                                        technologies={c.tech
                                            .toUpperCase()
                                            .replace(/ /g, '')
                                            .split(',')}
                                        premium={true}
                                        title={c.title}
                                        description={c.description}
                                        image={c.imageUrls[0]}
                                    />
                                </CustomLink>
                            </React.Fragment>
                        ))}
                </List>
            )}
            {loading && (
                <LoaderList>
                    <Loader />
                </LoaderList>
            )}
        </Container>
    );
};

export default ChallengesList;
