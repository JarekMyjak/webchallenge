import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import {Link} from 'react-router-dom';

interface IExpanded {
    isExpanded: boolean;
}

export const Container = styled.div``;

export const MenuItemWrapper = styled.button<IExpanded>`
    background-color: transparent;
    width: 350px;
    height: 80px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    border-left: 3px solid ${colors.navBarBackground};
    color: white;
    cursor: pointer;
    transition: 0.1s;
    ${p => p.isExpanded && `border-bottom: 3px solid ${colors.orange};`}

    &:hover {
        border-left: 3px solid ${colors.orange};
        background-color: rgba(255, 255, 255, 0.1);
    }
    & > div {
        display: flex;
        align-items: center;
    }
`;

export const ExpandedMenuContainer = styled.div<IExpanded>`
    background-color: rgba(255, 255, 255, 0.1);
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${p =>
        p.isExpanded
            ? `max-height: 400px; visibility: visible`
            : `max-height: 0px; visibility: hidden`};
    transition: 0.1s;
    overflow: hidden;
`;

export const IconArrow = styled.img<IExpanded>`
    width: 20px;
    height: 20px;
    transition: 0.2s;
    margin-right: 25px;
    ${p => p.isExpanded && `transform:rotate(180deg);`};
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const ExpandedMenuItem = styled.button`
    background-color: transparent;
    width: 350px;
    min-height: 80px;
    max-height: 80px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    // border-left: 3px solid ${colors.navBarBackground};
    color: white;
    cursor: pointer;
    transition: 0.1s;
    :hover {
        // border-left: 3px solid ${colors.orange};
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`;
