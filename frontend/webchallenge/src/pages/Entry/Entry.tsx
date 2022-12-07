import React, {useEffect, useState} from 'react';
import {IoIosHeart, IoIosChatbubbles, IoLogoGithub} from 'react-icons/io';
import styled from 'styled-components';
import {useUser} from '../../api/useAuth';
import TitleBar from '../../components/TitleBar';
import colors from '../../helpers/colors.helpers';
import UserComment from './UserComment';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {
    Entry as IEntry,
    getEntryById,
    postCommentToEntry,
    postLikeToEntry,
    postDislikeToEntry,
    deleteEntryById,
} from '../../api/apiEntries';
import {Challenge, getChallenge} from '../../api/apiChallenges';
import {user} from '../../api/useAuth';
import {getUserById} from '../../api/apiUser';
import {useForm} from 'react-hook-form';
import LoaderContainer from '../../components/LoaderContainer';

const Entry: React.FC = () => {
    const user = useUser(store => store.user);
    const {entryId} = useParams();
    const [entry, setEntry] = useState<IEntry>();
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const [owner, setOwner] = useState<user | undefined>();
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<number>(0);
    const navigate = useNavigate();
    const {
        setFocus,
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: {errors},
        getValues,
    } = useForm();

    const onSubmit = async (data: any) => {
        if (entryId) {
            await postCommentToEntry(entryId, data.comment);
            reset();
            (async () => {
                setEntry(await getEntryById(entryId));
            })();
        }
    };

    useEffect(() => {
        if (entryId) {
            (async () => {
                setEntry(await getEntryById(entryId));
            })();
        }
    }, []);

    useEffect(() => {
        if (entry?.challengeId) {
            (async () => {
                setChallenge(await getChallenge(entry.challengeId));
            })();
            (async () => {
                setOwner(await getUserById(entry?.userId));
            })();
            setIsLiked(entry?.liked);
            setLikes(entry?.likes);
        }
    }, [entry]);

    const openUrlBlank = () => {
        window.open(entry?.githubUrl, '_blank', 'noopener,noreferrer');
    };

    const onLike = async () => {
        if (entryId) {
            isLiked
                ? await postDislikeToEntry(entryId)
                : await postLikeToEntry(entryId);
            setLikes(p => (isLiked ? p - 1 : p + 1));
            setIsLiked(p => !p);
        }
    };

    const onDelete = async () => {
        if (entryId) {
            await deleteEntryById(entryId);
            navigate(`/challenges/${challenge?.id}`);
        }
    };

    return !!!entry ? (
        <LoaderContainer text='Loading entry...' />
    ) : (
        <Container>
            <EntryContainer>
                <TopWrapper>
                    <ChallengeImage src={challenge?.imageUrls[0]} />
                    <EntryDesc>
                        <Link
                            style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                fontSize: '16px',
                                color: '#d3d3d3',
                                textDecoration: 'none',
                            }}
                            onClick={(e: any) => e.stopPropagation()}
                            to={`/profile/${owner?.id}`}
                        >
                            <TitleBy>
                                <TitleChallenge>
                                    {challenge?.title}
                                </TitleChallenge>{' '}
                                created by <UserAvatar src={owner?.avatar} /> @
                                {owner?.username}
                            </TitleBy>
                        </Link>
                        <Description>{entry?.description}</Description>
                        <ButtonPanel>
                            <button>{likes} 💘</button>
                            <LikeButton liked={isLiked} onClick={onLike}>
                                <IoIosHeart />
                            </LikeButton>
                            <button>
                                {entry?.comments.length} <IoIosChatbubbles />
                            </button>
                            <button onClick={openUrlBlank}>
                                Git <IoLogoGithub />
                            </button>
                            <button>
                                Pages <IoLogoGithub />
                            </button>
                            {entry.userId === user?.id && (
                                <button onClick={() => onDelete()}>
                                    DELETE
                                </button>
                            )}
                        </ButtonPanel>
                    </EntryDesc>
                </TopWrapper>
                <Divider />
                <Comments>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AddComment>
                            <UserAvatar src={user?.avatar} />
                            <textarea
                                {...register('comment', {
                                    required: 'Required',
                                })}
                                placeholder='Add comment'
                            />
                        </AddComment>
                        <CommentButtons>
                            <ButtonCancel
                                onClick={() => {
                                    reset();
                                }}
                            >
                                Cancel
                            </ButtonCancel>
                            <ButtonComment type='submit'>Comment</ButtonComment>
                        </CommentButtons>
                    </form>
                    <CommentsList>
                        {entry?.comments.map(c => (
                            <UserComment
                                userId={c.userId}
                                comment={c.content}
                                date={c.timeAdded}
                            />
                        ))}
                    </CommentsList>
                </Comments>
            </EntryContainer>
        </Container>
    );
};

export default Entry;

const Container = styled.div`
    padding: 50px 0;
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
    object-fit: cover;
    box-shadow: 0px 0px 10px black;
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
    color: ${props =>
        props.liked === true
            ? colors.orange + ' !important'
            : 'black !important'};
    /* width: 100px; */
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
    /* background-color: ${colors.borderPrimary}; */
`;

const Comments = styled.div`
    /* min-height: 400px; */
    width: 100%;
    background-color: transparent;
    border-radius: 3px;
    padding: 15px 10px;
    box-sizing: border-box;
    button {
        font-size: 16px;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
    }
`;

const ButtonCancel = styled.button`
    background-color: transparent;
    &:hover {
        box-shadow: 0px 0px 10px black;
        background-color: ${colors.orange};
    }
`;
const ButtonComment = styled.button`
    box-shadow: 0px 0px 10px black;
    background-color: ${colors.iris};
    &:hover {
        background-color: ${colors.irisDark};
    }
`;

const AddComment = styled.div`
    min-height: 50px;
    width: 100%;
    background-color: #000000a0;
    border-radius: 3px;
    padding: 10px 10px 3px 10px;
    box-sizing: border-box;
    display: flex;
    ${UserAvatar} {
        width: 50px;
        height: 50px;
    }
    textarea {
        color: white;
        flex-grow: 1;
        min-height: 80px;
        max-height: 80px;
        background-color: transparent;
        border: none;
        margin-left: 15px;
        border-bottom: 2px solid transparent;
        transition: 0.2s;
        resize: none;
        &:focus {
            outline: none;
            border-bottom: 2px solid ${colors.orange};
        }
    }
`;

const CommentButtons = styled.div`
    padding: 5px 0;
    gap: 15px;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
`;

const CommentsList = styled.div`
    flex-grow: 1;
    /* min-height: 300px; */
`;
