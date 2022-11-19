import React, { FC, useContext, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import TopMenu from '../components/Menu/TopMenu';
import { MenuContext } from '../context/MenuContext';
import useInnerWidth from '../hooks/useInnerWidth';
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const { isTablet } = useInnerWidth();
    const { scrollY } = useWindowScrollPositions();

    const { setOpenMenu, menuRef, darkMode, isHomepage } =
        useContext(MenuContext);

    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (!menuRef?.current?.contains(e.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <div
            className={`${
                isHomepage && !darkMode
                    ? 'bg-main'
                    : darkMode
                    ? 'dark-mode'
                    : 'bg-second'
            } `}
        >
            {!isTablet && (
                <div className='flex items-center justify-between py-4 px-4 text-[28px] border-b'>
                    <div>
                        <AiOutlineMenu
                            className='cursor-pointer'
                            onClick={() => setOpenMenu(true)}
                        />
                    </div>
                </div>
            )}
            <div className='w-full m-auto'>
                {isTablet && (
                    <div ref={menuRef} className='w-full m-auto'>
                        <div className='bg-top-navbar'>
                            <TopMenu />
                        </div>
                        <div
                            className={`${
                                scrollY >= 100 && !isHomepage
                                    ? 'fixed bg-top-navbar text-white top-0 left-0 right-0'
                                    : scrollY >= 100 && isHomepage
                                    ? 'fixed bg-white text-txt-main top-0 left-0 right-0'
                                    : 'bg-navbar text-txt-main relative'
                            } z-[999]`}
                        >
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
            <div className='min-h-screen'>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
