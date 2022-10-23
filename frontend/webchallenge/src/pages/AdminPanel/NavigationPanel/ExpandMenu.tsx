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
