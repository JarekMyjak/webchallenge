import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import {Challenge, getChallenge} from '../../api/apiChallenges';
import {IoIosHeart, IoIosChatbubbles, IoLogoGithub} from 'react-icons/io';
import Loader from '../../components/Loader';

interface IEntryBox {
    challengeId: string;
    ownerId: string;
    description: string;
    likes: number;
    githubUrl: string;
    liked: boolean;
}

const EntryBox: React.FC<IEntryBox> = props => {
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const [liked, setLiked] = useState<boolean | undefined>(props.liked);

    useEffect(() => {
        if (props.challengeId) {
            (async () => {
                setChallenge(await getChallenge(props.challengeId));
            })();
        }
    }, []);

    const likeClickHandler = () =>
        setLiked(prev => (prev === true ? false : true));

    const openGithub = () => {
        window.open(props.githubUrl, '_blank', 'noopener,noreferrer');
    };

    return !challenge ? (
        <LoaderContainer>
            <Loader />
        </LoaderContainer>
    ) : (
        <Wrapper>
            <Top>
                <ImageBox>
                    <img src={challenge?.imageUrls[0]} />
                </ImageBox>
                <Data>
                    <UserData>
                        <UserAvatar src='https://yt3.ggpht.com/a/AGF-l7_d9SJ8KQtMwqaigeUa8VkZop9s76WeEMXiaQ=s800-c-k-c0xffffffff-no-rj-mo' />
                        @{props.ownerId}
                        <Panel>
                            <LikeCounter>{props.likes}💘</LikeCounter>
                            <LikeButton
                                onClick={likeClickHandler}
                                liked={liked}
                            >
                                <IoIosHeart />
                            </LikeButton>

                            <button>
                                <IoIosChatbubbles />
                            </button>
                            <button onClick={openGithub}>
                                <IoLogoGithub />
                            </button>
                        </Panel>
                    </UserData>
                    <Title>{challenge?.title}</Title>
                    <Description>{props.description}</Description>
                </Data>
            </Top>
        </Wrapper>
    );
};

export default EntryBox;

const LoaderContainer = styled.div`
    width: 100%;
    height: 170px;
    background-color: ${colors.borderPrimary}71;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 170px;
    background-color: ${colors.borderPrimary}71;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px black;
`;

const Top = styled.div`
    display: flex;
    flex-grow: 1;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px black;
`;

const UserData = styled.div`
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    color: #d3d3d3;
    gap: 4px;
`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageBox = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 1px 1px 10px black;
    margin-right: 10px;
    & img {
        height: 150px;
        object-fit: cover;
    }
`;

const Title = styled.div`
    width: 950px;
    height: 36px;
    color: white;
    font-size: 24px;
    font-weight: 500;
    text-overflow: elipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const Description = styled.div`
    max-width: 100%;
    height: 80px;
    color: white;
`;

const Panel = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    button {
        border: none;
        background-color: #4b4b4b;
        border: 1px solid #4b4b4b;
        width: 35px;
        height: 35px;
        border-radius: 5px;
        transition: 0.1s;
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
            transform: translateY(2px);
        }
        &:hover {
            background-color: #707070;
        }
    }
`;

interface ILikedButton {
    liked: boolean | undefined;
}

const LikeButton = styled.button<ILikedButton>`
    color: ${props => (props.liked === true ? colors.orange : 'black')};
`;
const LikeCounter = styled.div`
    min-width: 35px;
    height: 35px;
    background-color: #4b4b4b;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    line-height: 35px;
    box-sizing: border-box;
    padding: 0 6px;
`;
