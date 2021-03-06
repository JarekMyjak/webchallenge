import React from 'react';
import TitleBar from '../../../components/TitleBar';
//TEMP
import ChallangeCard, {techs} from '../../../components/ChallangeCard';
import {
    ChallangeList,
    Filter,
    Filters,
    TopBar,
    Wrapper,
} from './Challanges.styles';

const Challanges: React.FC = () => {
    return (
        <Wrapper>
            <TopBar>
                <TitleBar
                    imageSrc='./src/assets/icons/bookmark.png'
                    text='Your challanges'
                />
                <Filters>
                    <Filter>Sort By</Filter>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <ChallangeList>
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in
            some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in
        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in
    some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                {/* TEMP */}
            </ChallangeList>
        </Wrapper>
    );
};

export default Challanges;
