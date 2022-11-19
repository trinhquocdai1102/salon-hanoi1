import React from 'react';
import { Helmet } from 'react-helmet';
import AdviseComponent from '../components/Advise';

const Advise = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Liên hệ tư vấn - Salon Hà Nội 1</title>
            </Helmet>
            <AdviseComponent />
        </>
    );
};

export default Advise;
