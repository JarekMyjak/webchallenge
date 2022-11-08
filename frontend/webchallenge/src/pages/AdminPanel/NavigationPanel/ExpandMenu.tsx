import React, {useState} from 'react';
import {
    CustomLink,
    ExpandedMenuContainer,
    ExpandedMenuItem,
    Icon,
    IconArrow,
    MenuItemWrapper,
} from './expandMenu.styles';

import {IMenuOptions} from './NavigationPanel';
import arrowImg from '../../../assets/icons/arrow-down.png';

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
                <div>
                    <Icon src={props.icon} alt='' />
                    {props.title}
                </div>
                <IconArrow isExpanded={isExpanded} src={arrowImg} alt='arrow' />
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
