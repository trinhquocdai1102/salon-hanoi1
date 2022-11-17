import React, { FC, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions';

interface MenuItemType {
    name: string;
    path: string | null;
    icon: Function;
    background?: string;
}

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
    const { navbarChange } = useContext(MenuContext);
    const { scrollY } = useWindowScrollPositions();
    const location = useLocation();

    return (
        <li
            className={`text-xs sm:text-sm uppercase hover:bg-top-navbar hover:text-txt-navbar ${
                item?.path === location.pathname && !navbarChange
                    ? 'bg-top-navbar text-txt-navbar'
                    : location.pathname === item?.path &&
                      navbarChange &&
                      scrollY >= 100
                    ? 'bg-white text-black'
                    : location.pathname === item?.path &&
                      navbarChange &&
                      scrollY < 100
                    ? 'bg-top-navbar text-txt-navbar'
                    : ''
            }`}
            key={item.name}
        >
            <Link
                to={item.path ? item.path : '#'}
                className='flex items-center justify-between p-2 md:p-4 min-h-[52px] font-semibold px-2'
            >
                <div className='flex items-center '>
                    <item.icon
                        className={`w-4 h-4 mr-2`}
                        style={{ color: item.background }}
                    />
                    <span className='font-bold'>{item.name}</span>
                </div>
            </Link>
        </li>
    );
};

export default MenuItem;