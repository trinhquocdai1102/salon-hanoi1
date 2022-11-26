import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../components/Common/Error';
import CarDetailComponent from '../../Containers/Detail/CarDetail';
import { cars } from '../../fakedata/Home';

const CarDetail = () => {
    const { key } = useParams();
    const car = cars.find((item) => item.key === key);

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Chi tiết xe {car?.name} - Salon Hà Nội 1</title>
            </Helmet>
            {!car ? <Error /> : <CarDetailComponent car={car} />}
        </>
    );
};

export default CarDetail;
