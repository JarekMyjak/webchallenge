import React from 'react';
import Opinion from './Opinion';
import {
    Wrapper,
    Content,
    Title,
    Description,
    Opinions,
} from './opinionSection.styles';

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
                        avatar='./src/assets/images/landing/First_avatar_comment.jpeg'
                        text='It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
                        sign='John Walker, CEO of Google'
                        technologyImg='./src/assets/icons/react.svg'
                    />
                    <Opinion
                        avatar='./src/assets/images/landing/Second_avatar_comment.jpg'
                        text='Many desktop publishing packages and web page editors 
                        now use Lorem Ipsum as their default model text, and a search for "lorem ipsum"'
                        sign='Elen Khanv, UX Designer '
                        technologyImg='./src/assets/icons/javascript-96.svg'
                    />
                    <Opinion
                        avatar='./src/assets/images/landing/Third_avatar_comment.jpg'
                        text='Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites'
                        sign='Kate Morons,  HR Managere'
                        technologyImg='./src/assets/icons/typescript-96.svg'
                    />
                </Opinions>
            </Content>
        </Wrapper>
    );
};

export default LastCardsSection;
