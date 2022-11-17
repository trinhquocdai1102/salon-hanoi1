import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Slider/Banner';
import { cars, newestBanner } from '../fakedata/Home';
import GridLayout from '../layout/GridLayout';

const Home = () => {
    const [chooseSegment, setChooseSegment] = useState(1);
    const segments = [
        {
            name: 'Xe đang bán',
            value: 1,
        },
        {
            name: 'Xe mới',
            value: 2,
        },
        {
            name: 'Xe đã bán',
            value: 3,
        },
    ];
    return (
        <div className='w-full mt-0 md:mt-[-52px] '>
            <div className='custom-banner relative'>
                <Banner banners={newestBanner} />
            </div>
            <div>
                <div className='bg-top-navbar'>
                    <div className='container pt-[80px]'>
                        <div className='flex items-center gap-1'>
                            {segments.map((segment) => {
                                return (
                                    <div
                                        key={segment.name}
                                        className={`${
                                            chooseSegment === segment.value
                                                ? 'bg-white text-top-navbar'
                                                : 'bg-main text-txt-third'
                                        } px-5 py-3 font-bold uppercase cursor-pointer rounded-sm text-sm hover:bg-white hover:text-top-navbar`}
                                        onClick={() =>
                                            setChooseSegment(segment.value)
                                        }
                                    >
                                        {segment.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='pt-[60px] container'>
                    {chooseSegment === 1 ? (
                        <>
                            <GridLayout col={4}>
                                {cars.map((car) => {
                                    return (
                                        <div key={car.key} className='px-3'>
                                            <Link to={`car-detail/${car.key}`}>
                                                <div>
                                                    <img
                                                        src={car.imageUrl}
                                                        alt={car.name}
                                                        className='object-cover h-[160px] rounded-md'
                                                    />
                                                </div>
                                                <div className='mt-2 pb-2 font-semibold border-b border-txt-main'>
                                                    {car.name}
                                                </div>
                                                <div className='pt-2 pb-4 text-sm'>
                                                    Giá bán:
                                                    <span className='ml-2 font-medium'>
                                                        {car.price}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </GridLayout>
                            <div className='w-full flex items-center justify-center mt-[40px]'>
                                <Link
                                    to='#'
                                    className='p-2 bg-top-navbar text-white font-medium uppercase rounded-sm'
                                >
                                    Tất cả sản phẩm
                                </Link>
                            </div>
                        </>
                    ) : chooseSegment === 2 ? (
                        'xe moi'
                    ) : (
                        'xe cu'
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
