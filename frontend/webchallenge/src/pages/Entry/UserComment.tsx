import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import formatDistance from 'date-fns/formatDistance';
import {user, useUser} from '../../api/useAuth';
import colors from '../../helpers/colors.helpers';
import {getUserById} from '../../api/apiUser';

interface IUserComment {
    userId: string;
    comment: string;
    timeAdded: string;
}

const UserComment: React.FC<IUserComment> = props => {
    const [owner, setOwner] = useState<user | undefined>();

    useEffect(() => {
        if (props.userId) {
            (async () => {
                setOwner(await getUserById(props.userId));
            })();
        }
    }, []);

    return (
        <Container>
            <UserAvatar src={owner?.avatar} />
            <div>
                <UserCommentData>
                    @{owner?.username}
                    <span>
                        {formatDistance(new Date(props.timeAdded), new Date())}{' '}
                        ago
                    </span>
                </UserCommentData>
                <UserCommentValue>{props.comment}</UserCommentValue>
            </div>
        </Container>
    );
};

export default UserComment;

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px black;
`;

const Container = styled.div`
    min-height: 50px;
    width: 100%;
    background-color: transparent;
    padding: 10px 10px 3px 10px;
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    ${UserAvatar} {
        width: 50px;
        height: 50px;
    }
`;

const UserCommentData = styled.div`
    height: 30px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
    padding: 10px;
    span {
        margin-left: 15px;
        font-size: 14px;
        font-weight: 300;
        color: ${colors.secondaryText};
    }
`;
const UserCommentValue = styled.div`
    box-sizing: border-box;
    padding: 3px 10px 3px 10px;
    font-size: 14px;
    margin-bottom: 10px;
`;
