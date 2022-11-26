import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions';
import { menus } from '../Menu/menu';

const Sidebar = () => {
    const location = useLocation();
    const { scrollY } = useWindowScrollPositions();
    return (
        <div className='mt-[32px] flex flex-col gap-4 p-4'>
            {menus.map((menu) => {
                return (
                    <div key={menu.name}>
                        <Link
                            to={menu.path}
                            className={`${
                                scrollY > 300
                                    ? 'border-txt-main'
                                    : 'border-white'
                            } block border-b p-2 ${
                                menu?.path === location.pathname
                                    ? 'text-txt-navbar'
                                    : ''
                            }`}
                        >
                            {menu.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
