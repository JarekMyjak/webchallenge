import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';
//TEMP
import ChallangeCard, {
    techs,
} from '../../Landing/LastChallangesSection/ChallangeCard';
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
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                    text='Your challanges'
                />
                <Filters>
                    <Filter>Sort By</Filter>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <ChallangeList>
                {/* TEMP CHALLANGE CARD */}
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
