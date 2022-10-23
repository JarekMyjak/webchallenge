import React, {useState} from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import {Link} from 'react-router-dom';
import {CustomLink} from './NavigationPanel.styles';
import {IMenuOptions} from './NavigationPanel';

interface IExpandMenu {
    title: string;
    icon: string;
    menuOptions: IMenuOptions[];
}

const ExpandMenu: React.FC<IExpandMenu> = props => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return (
        <div>
            <MenuItemWrapper
                isExpanded={isExpanded}
                onClick={() => setIsExpanded(prev => !prev)}
            >
                <Icon src={props.icon} alt='' />
                {props.title}
                <IconArrow
                    isExpanded={isExpanded}
                    src='../../src/assets/icons/arrow-down.png'
                    alt='arrow'
                />
            </MenuItemWrapper>
            <ExpandedMenuContainer isExpanded={isExpanded}>
                {props.menuOptions.map(el => (
                    <CustomLink to={el.linkTo} key={el.linkTo}>
                        <ExpandedMenuItem>{el.title}</ExpandedMenuItem>
                    </CustomLink>
                ))}
            </ExpandedMenuContainer>
        </div>
    );
};

export default ExpandMenu;

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
    padding-left: 30px;
    border-left: 3px solid ${colors.navBarBackground};
    color: white;
    cursor: pointer;
    transition: 0.1s;
    ${p => p.isExpanded && `border-bottom: 3px solid ${colors.orange};`}

    :hover {
        border-left: 3px solid ${colors.orange};
        background-color: rgba(255, 255, 255, 0.1);
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
    margin-left: 130px;
    transition: 0.2s;
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
