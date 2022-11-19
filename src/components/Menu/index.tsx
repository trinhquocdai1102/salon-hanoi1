import React, { useState, useRef, useEffect, useContext } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { settings, menus } from './menu';
import { MenuContext } from '../../context/MenuContext';
import Setting from './Setting';
import MenuItem from './MenuItem';

const Menu = () => {
    const settingRef = useRef<HTMLDivElement | any>();
    const [openSetting, setOpenSetting] = useState(false);
    const { darkMode } = useContext(MenuContext);

    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (!settingRef?.current?.contains(e.target)) {
                setOpenSetting(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <div className='container'>
            <div className='flex items-center justify-between'>
                <ul className={`text-[13px] flex items-center justify-between`}>
                    {menus.map((menu) => (
                        <MenuItem key={menu.name} item={menu} />
                    ))}
                </ul>
                <div
                    className='relative setting ml-6 flex items-center gap-1 text-txt-main font-medium cursor-pointer'
                    onClick={() => setOpenSetting(true)}
                >
                    <AiOutlineSetting className='text-xl' />
                    <span className='text-xs md:text-sm'>Chủ đề</span>
                    <div
                        className={`${
                            openSetting ? 'flex' : 'hidden'
                        } absolute bottom-[-80px] right-[-40px] drop-shadow-sm bg-white rounded-sm overflow-hidden`}
                        ref={settingRef}
                    >
                        <ul
                            className={`${openSetting ? 'block' : 'hidden'} ${
                                darkMode ? 'dark-mode' : 'normal'
                            } flex flex-col`}
                        >
                            {settings.map((setting) => {
                                return (
                                    <Setting
                                        key={setting.name}
                                        item={setting}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
