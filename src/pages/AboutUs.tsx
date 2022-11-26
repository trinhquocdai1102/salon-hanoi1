import React from 'react';
import { Helmet } from 'react-helmet';
import AboutComponent from '../Containers/About';

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Các hãng xe - Salon Hà Nội 1</title>
            </Helmet>
            <AboutComponent />
        </>
    );
};

export default AboutUs;
