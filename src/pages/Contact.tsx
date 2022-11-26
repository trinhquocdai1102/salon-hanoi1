import React from 'react';
import { Helmet } from 'react-helmet';
import ContactComponent from '../Containers/Contact';

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Liên hệ tư vấn - Salon Hà Nội 1</title>
            </Helmet>
            <ContactComponent />
        </>
    );
};

export default Contact;
