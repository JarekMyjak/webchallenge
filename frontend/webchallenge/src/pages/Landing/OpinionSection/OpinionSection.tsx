import React from 'react';
import Opinion from './Opinion';
import {
    Wrapper,
    Content,
    Title,
    Description,
    Opinions,
} from './opinionSection.styles';
import reactIcon from '../../../assets/icons/react.svg';
import jsIcon from '../../../assets/icons/javascript-96.svg';
import tsIcon from '../../../assets/icons/typescript-96.svg';
import firstAvatar from '../../../assets/images/landing/First_avatar_comment.jpeg';
import secondAvatar from '../../../assets/images/landing/Second_avatar_comment.jpg';
import thirdAvatar from '../../../assets/images/landing/Third_avatar_comment.jpg';

const LastCardsSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>What other say about us</Title>
                <Description>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                </Description>
                <Opinions>
                    <Opinion
                        avatar={firstAvatar}
                        text='It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
                        sign='John Walker, CEO of Google'
                        technologyImg={reactIcon}
                    />
                    <Opinion
                        avatar={secondAvatar}
                        text='Many desktop publishing packages and web page editors 
                        now use Lorem Ipsum as their default model text, and a search for "lorem ipsum"'
                        sign='Elen Khanv, UX Designer '
                        technologyImg={jsIcon}
                    />
                    <Opinion
                        avatar={thirdAvatar}
                        text='Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites'
                        sign='Kate Morons,  HR Managere'
                        technologyImg={tsIcon}
                    />
                </Opinions>
            </Content>
        </Wrapper>
    );
};

export default LastCardsSection;
