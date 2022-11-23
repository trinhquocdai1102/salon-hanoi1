import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import RouterManager from './routes';

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <MainLayout>
                <RouterManager />
            </MainLayout>
        </>
    );
}

export default App;
