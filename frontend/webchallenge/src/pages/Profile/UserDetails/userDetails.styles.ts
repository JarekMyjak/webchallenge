import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Container = styled.div`
    width: 800px;
    height: 750px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px black;
`;
