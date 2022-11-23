import React, { FC, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions';

interface MenuItemType {
    name: string;
    path: string | null;
    background?: string;
}

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
    const { scrollY } = useWindowScrollPositions();
    const location = useLocation();

    return (
        <li
            className={`px-[20px] font-medium ${
                item?.path === location.pathname ? 'text-txt-navbar' : ''
            }`}
        >
            <Link
                to={item.path ? item.path : '#'}
                className='block font-medium text-[13px] uppercase ease'
            >
                {item.name}
            </Link>
        </li>
    );
};

export default MenuItem;
