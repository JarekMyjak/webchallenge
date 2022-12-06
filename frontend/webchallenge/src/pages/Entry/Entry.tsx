import React from 'react';
import {IoIosHeart, IoIosChatbubbles, IoLogoGithub} from 'react-icons/io';
import styled from 'styled-components';
import {useUser} from '../../api/useAuth';
import TitleBar from '../../components/TitleBar';
import colors from '../../helpers/colors.helpers';

type Props = {};

const Entry = (props: Props) => {
    const user = useUser(store => store.user);

    return (
        <Container>
            <EntryContainer>
                <TopWrapper>
                    <ChallengeImage />
                    <EntryDesc>
                        <TitleBy>
                            <TitleChallenge>Calculator</TitleChallenge> created
                            by <UserAvatar /> @twojstary
                        </TitleBy>
                        <Description>
                            blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
                        </Description>
                        <ButtonPanel>
                            <button>0 💘</button>
                            <button>
                                0 <IoIosChatbubbles />
                            </button>
                            <button>
                                <IoIosHeart />
                            </button>
                            <button>
                                <IoLogoGithub />
                            </button>
                        </ButtonPanel>
                    </EntryDesc>
                </TopWrapper>
                <Divider />
                <TitleBar text='Add comment:' />
                <AddComment>
                    <textarea />
                    <CommentPanel>
                        {/* Send as: */}
                        {/* <UserAvatar src={user?.avatar} /> */}
                        <button>Send</button>
                    </CommentPanel>
                </AddComment>
                <CommentsList>
                    <CommentData>
                        <span>
                            <UserAvatar src={user?.avatar} /> @{user?.username}
                        </span>
                        at
                        <span>{new Date().toLocaleString()}</span>
                    </CommentData>
                    <Divider />
                    <CommentValue>What a nice job, zabij sie</CommentValue>
                </CommentsList>
            </EntryContainer>
        </Container>
    );
};

export default Entry;

const Container = styled.div`
    padding-top: 50px;
    min-height: 100vh;
    color: white;
`;

const EntryContainer = styled.div`
    width: 1200px;
    /* height: 600px; */
    background-color: ${colors.backgroundSecondary};
    box-shadow: 0px 0px 10px black;
    box-sizing: border-box;
    padding: 10px;
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
`;

const ChallengeImage = styled.img`
    min-height: 250px;
    max-height: 250px;
    min-width: 250px;
    max-width: 250px;
    margin-right: 10px;
`;

const EntryDesc = styled.div`
    /* border: 1px solid yellow; */
    width: 100%;
    height: 250px;
    color: white;
`;

const TitleBy = styled.div``;
const TitleChallenge = styled.span`
    font-size: 36px;
    font-weight: 600;
`;

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px black;
`;

const Description = styled.div`
    width: 100%;
    height: 160px;
`;
const ButtonPanel = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    gap: 3px;
    button {
        color: white;
        height: 35px;
        border-radius: 5px;
        width: 100px;
        background-color: #333333;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        font-weight: 500;
        font-size: 18px;
        &:hover {
            background-color: #383838;
        }
        svg {
            width: 20px;
            height: 20px;
            transform: translateY(2px);
        }
    }
`;

interface ILikedButton {
    liked: boolean | undefined;
}

const LikeButton = styled.button<ILikedButton>`
    color: ${props => (props.liked === true ? colors.orange : 'black')};
    width: 100px;
`;
const LikeCounter = styled.div`
    min-width: 35px;
    height: 35px;
    max-width: 100px;
    background-color: #4b4b4b;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    line-height: 35px;
    box-sizing: border-box;
    padding: 0 6px;
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin: 10px 0;
    background-color: ${colors.borderPrimary};
`;
const CommentPanel = styled.div`
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    button {
        height: 30px;
        padding: 0 15px;
        border-radius: 3px;
        background-color: ${colors.iris};
        transition: 0.2s;
        cursor: pointer;
        border: none;
        color: white;
        font-size: 14px;
        box-shadow: 0px 0px 10px black;
        &:hover {
            background-color: ${colors.irisDark};
        }
    }
`;
const AddComment = styled.div`
    height: 100px;
    width: 100%;
    margin: 10px 0;
    margin-bottom: 80px;
    textarea {
        color: white;
        min-width: 100%;
        max-width: 100%;
        min-height: 100px;
        max-height: 100px;
        background-color: ${colors.backgroundPrimary};
        border-radius: 4px;
        box-shadow: 0px 0px 3px black;
        border: none;
        box-sizing: border-box;
        padding: 8px;
        &:hover,
        &:focus,
        &:focus-visible {
            outline: none;
        }
    }
`;

const CommentsList = styled.div`
    box-shadow: 0px 0px 3px black;
    width: 100%;
    height: 100px;
    background-color: ${colors.backgroundPrimary};
    border-radius: 4px;
    padding: 8px;
    box-sizing: border-box;
`;
const CommentData = styled.div`
    max-height: 35px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: flex-end;
    gap: 8px;
`;

const CommentValue = styled.div``;
