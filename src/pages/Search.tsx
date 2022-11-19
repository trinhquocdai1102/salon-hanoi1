import React from 'react';
import { Helmet } from 'react-helmet';
import SearchComponent from '../components/Search';

const Search = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Tìm kiếm - Salon Hà Nội 1</title>
            </Helmet>
            <SearchComponent />
        </>
    );
};

export default Search;
