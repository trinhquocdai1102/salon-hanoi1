import React, { FC, useContext, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import TopMenu from '../components/Menu/TopMenu';
import Sidebar from '../components/Sidebar/Sidebar';
import { MenuContext } from '../context/MenuContext';
import useInnerWidth from '../hooks/useInnerWidth';
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const { isTablet } = useInnerWidth();
    const { scrollY } = useWindowScrollPositions();

    const { openMenu, setOpenMenu, menuRef, isHomepage } =
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
        <div className='bg-main'>
            {!isTablet && (
                <div
                    className={`${
                        isHomepage && scrollY >= 500
                            ? 'bg-top-navbar text-white'
                            : !isHomepage && scrollY >= 300
                            ? 'bg-white text-txt-main'
                            : 'bg-navbar text-white'
                    } z-[998] drop-shadow-lg py-4 px-4 text-[28px] border-b h-[60px] fixed top-0 left-0 right-0`}
                >
                    {!openMenu && (
                        <div>
                            <AiOutlineMenu
                                className='cursor-pointer'
                                onClick={() => setOpenMenu(true)}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className='w-full m-auto'>
                {isTablet && (
                    <div className='w-full m-auto'>
                        <div className='bg-top-navbar'>
                            <TopMenu />
                        </div>
                        <div
                            className={`${
                                isHomepage && scrollY >= 500
                                    ? 'fixed bg-top-navbar text-white top-0 left-0 right-0'
                                    : !isHomepage && scrollY >= 300
                                    ? 'fixed bg-white text-txt-main top-0 left-0 right-0'
                                    : 'bg-navbar text-white relative'
                            } z-[998] drop-shadow-lg`}
                        >
                            <Menu />
                        </div>
                    </div>
                )}
                {openMenu && !isTablet && (
                    <div
                        style={{
                            left: openMenu ? '0px' : '-200px',
                            transition: 'all linear 0.3s',
                        }}
                        ref={menuRef}
                        className={`${
                            scrollY > 300
                                ? 'bg-txt-third text-txt-main'
                                : 'bg-third text-white'
                        } w-[260px] max-w-full z-[999] h-screen pt-5 border-r border-third-color fixed top-0 bottom-0 left-0 drop-shadow-lg font-medium`}
                    >
                        <div
                            className='absolute top-[6px] left-[6px] cursor-pointer hover:opacity-80'
                            onClick={() => setOpenMenu(false)}
                        >
                            <IoMdClose fontSize={36} />
                        </div>
                        <Sidebar />
                    </div>
                )}
            </div>
            <div className='relative'>{children}</div>
            <div>
                <Footer />
            </div>
            <div className='fixed right-0 bottom-[40px]'>
                <a
                    href='https://zalo.me/0904751669'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-[40px]'
                >
                    <img
                        src='/images/zalo.png'
                        alt='zalo'
                        className='rounded-full'
                    />
                </a>
            </div>
        </div>
    );
};

export default MainLayout;
