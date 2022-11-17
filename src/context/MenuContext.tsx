import React, { FC, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface MenuContextState {
    menuRef: any;
    openMenu: boolean;
    setOpenMenu: Function;
    darkMode: boolean;
    setDarkMode: Function;
    navbarChange: boolean;
}

export const MenuContext = React.createContext<MenuContextState>({
    menuRef: [],
    openMenu: false,
    setOpenMenu: () => {},
    darkMode: false,
    setDarkMode: () => {},
    navbarChange: false,
});

export const MenuContextProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const menuRef = useRef<HTMLDivElement | any>();
    const [openMenu, setOpenMenu] = useState(false);
    const [navbarChange, setNavbarChange] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.pathname !== '/') {
            setNavbarChange(true);
        } else {
            setNavbarChange(false);
        }
    }, [location]);

    const MenuContextData = {
        menuRef,
        openMenu,
        setOpenMenu,
        darkMode,
        setDarkMode,
        navbarChange,
    };

    return (
        <MenuContext.Provider value={MenuContextData}>
            {children}
        </MenuContext.Provider>
    );
};
