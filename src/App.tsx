import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Audio } from 'react-loader-spinner';
import RouterManager from './routes';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
    enable: false,
    damping: 1,
};

const options = {
    plugins: {
        overscroll: { ...overscrollOptions },
    },
};

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search, location.pathname]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.body, options);

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className='w-full h-[96vh] m-0 p-0 flex items-center justify-center'>
                    <Audio
                        height='40'
                        width='40'
                        color='#2DAAED'
                        ariaLabel='loading'
                    />
                </div>
            ) : (
                <MainLayout>
                    <RouterManager />
                </MainLayout>
            )}
        </>
    );
}

export default App;
