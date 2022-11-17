import React, { FC, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

interface SettingItemType {
    name: string;
    icon: Function;
    darkMode?: boolean;
}

interface SettingProps {
    item: SettingItemType;
}

const Setting: FC<SettingProps> = ({ item }) => {
    const { darkMode, setDarkMode } = useContext(MenuContext);

    const handleDarkMode = (darkMode: boolean) => {
        if (darkMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    };

    return (
        <li
            className={`${
                darkMode ? 'hover:bg-txt-second' : 'hover:bg-txt-third'
            } text-sm min-w-[100px] flex items-center cursor-pointer p-2`}
            key={item.name}
            onClick={() => {
                if (item.darkMode !== null && item.darkMode !== undefined) {
                    handleDarkMode(item.darkMode);
                }
            }}
        >
            <item.icon className='mr-2' />
            <span>{item.name}</span>
        </li>
    );
};

export default Setting;
