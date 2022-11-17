import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../components/Common/Error';
import { cars } from '../../fakedata/Home';

const CarDetail = () => {
    const { key } = useParams();
    const car = cars.find((item) => item.key === key);

    return (
        <>
            {!car ? (
                <Error />
            ) : (
                <div className='pt-[20px]'>
                    <div className='flex items-start container'>
                        <div>
                            <div>
                                <h1>{car.name}</h1>
                            </div>
                            <div className='h-auto'>
                                <img
                                    src={car.imageUrl}
                                    alt={car.name}
                                    className='rounded-sm'
                                />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            )}
        </>
    );
};

export default CarDetail;
