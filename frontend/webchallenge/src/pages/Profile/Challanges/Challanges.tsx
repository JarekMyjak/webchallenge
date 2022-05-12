import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';
//TEMP
import ChallangeCard, {
    techs,
} from '../../Landing/LastChallangesSection/ChallangeCard';

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
                />{' '}
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />{' '}
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />{' '}
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in
            some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />{' '}
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in
        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />{' '}
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

const Wrapper = styled.div`
    margin-top: 50px;
    width: 1250px;
    /* height: 375px; */
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 40px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;
`;

const Filters = styled.div`
    display: flex;
`;

const Filter = styled.div`
    width: 100px;
    height: 30px;
    background-color: green;
    margin-left: 10px;
`;

const ChallangeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
