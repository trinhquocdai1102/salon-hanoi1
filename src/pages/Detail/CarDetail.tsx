import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../components/Common/Error';
import Slider from '../../components/Slider';
import { carInfo } from '../../fakedata/Detail';
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
            {!car ? (
                <Error />
            ) : (
                <div className='pt-[20px]'>
                    <div className='container'>
                        <div className='mb-[40px] xl:mb-0 w-full relative'>
                            <div className='xl:w-2/3 mr-4 xl:max-w-[660px]'>
                                <div>
                                    <h1 className='font-bold text-[32px] mb-2'>
                                        {car.name}
                                    </h1>
                                </div>
                                <div className='aspect-video'>
                                    <iframe
                                        width='100%'
                                        height='100%'
                                        src={`https://www.youtube.com/embed/${car.youtubeUrl}`}
                                        frameBorder='0'
                                        className='rounded-sm'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                        title={car.name}
                                    />
                                </div>
                                <div>
                                    <Slider banners={[]} />
                                </div>
                                <div className='mt-[40px]'>{car.desc}</div>
                            </div>
                            <div className='xl:hidden xl:mt-0 mt-5 mr-2'>
                                <p>Thông số chi tiết:</p>
                            </div>
                            <div className='xl:absolute xl:right-0 xl:top-0 pt-3 pb-3 xl:pb-2 px-6 bg-main max-w-[300px] xl:w-1/3'>
                                {carInfo.map((info) => {
                                    return (
                                        <div
                                            className='flex items-center border-b last:border-0 border-main gap-4 py-2'
                                            key={info.key}
                                        >
                                            <span className='uppercase text-xs min-w-[120px]'>
                                                {info.title}
                                            </span>
                                            <p
                                                className='min-w-[120px] text-sm font-semibold capitalize break-words line-clamp-3'
                                                title={info.value}
                                            >
                                                {info.value}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarDetail;
