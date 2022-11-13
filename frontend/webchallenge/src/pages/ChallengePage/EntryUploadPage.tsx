import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';
import {useParams} from 'react-router-dom';
import {
    Challenge,
    downloadChallengeUrl,
    getChallenge,
} from '../../api/apiChallenges';
import {SubmitHandler, useForm} from 'react-hook-form';
import { apiPost } from '../../api/apiMethods';

interface Inputs {
    githubUrl: string;
    pagesUrl: string;
    description: string;
}

const EntryUploadPage: React.FC = () => {
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const res = apiPost(`/api/entries/challenge/${challengeId}`, data);
        console.log(res)
    };

    useEffect(() => {
        if (challengeId) {
            (async () => {
                setChallenge(await getChallenge(challengeId));
            })();
        }
    }, []);

    return (
        <Wrapper>
            {challenge && (
                <>
                    <h2>Upload challenge entry:</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <span>repository url</span>
                            <br />
                            <input {...register('githubUrl')} />
                        </label>
                        <br />
                        <label>
                            <span>github pages url</span>
                            <br />
                            <input {...register('pagesUrl')} />
                        </label>
                        <br />
                        <label>
                            <span>your description</span>
                            <br />
                            <input {...register('description')} />
                        </label>
                        <br />
                        <button type='submit'>submit</button>
                    </form>
                </>
            )}
        </Wrapper>
    );
};

export default EntryUploadPage;

const Wrapper = styled.div`
    width: 1250px;
    min-height: 500px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 45px 60px;
`;
