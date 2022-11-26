import React from 'react';
import { Helmet } from 'react-helmet';
import SearchComponent from '../Containers/Search';
import Banner from '../components/Slider/Banner';

const Search = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Tìm kiếm - Salon Hà Nội 1</title>
            </Helmet>
            <Banner />
            <SearchComponent />
        </>
    );
};

export default Search;
