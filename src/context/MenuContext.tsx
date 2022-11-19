import React, { FC, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface MenuContextState {
    menuRef: any;
    openMenu: boolean;
    setOpenMenu: Function;
    darkMode: boolean;
    setDarkMode: Function;
    isHomepage: boolean;
}

export const MenuContext = React.createContext<MenuContextState>({
    menuRef: [],
    openMenu: false,
    setOpenMenu: () => {},
    darkMode: false,
    setDarkMode: () => {},
    isHomepage: false,
});

export const MenuContextProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const menuRef = useRef<HTMLDivElement | any>();
    const [openMenu, setOpenMenu] = useState(false);
    const [isHomepage, setIsHomepage] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomepage(true);
        } else {
            setIsHomepage(false);
        }
    }, [location]);

    const MenuContextData = {
        menuRef,
        openMenu,
        setOpenMenu,
        darkMode,
        setDarkMode,
        isHomepage,
    };

    return (
        <MenuContext.Provider value={MenuContextData}>
            {children}
        </MenuContext.Provider>
    );
};
