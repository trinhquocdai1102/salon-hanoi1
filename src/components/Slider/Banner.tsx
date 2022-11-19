import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imgNotFound } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { GiSteeringWheel } from 'react-icons/gi';
import { ROUTES } from '../../routes/routes';

interface BannerProps {
    banners: any[];
}

const Banner: FC<BannerProps> = ({ banners }) => {
    return (
        <Swiper
            loop={true}
            autoplay
            navigation
            pagination
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            className='banner relative'
        >
            {banners?.map((banner) => (
                <SwiperSlide key={banner.key}>
                    <LazyLoadImage
                        width='100%'
                        height='100%'
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = imgNotFound;
                        }}
                        src={
                            (banner.coverImageURL ||
                                banner.imageUrl ||
                                banner.thumbnail ||
                                banner.thumbURL) ??
                            imgNotFound
                        }
                        alt={banner.title}
                        effect={'blur'}
                    />
                    {banner.title && (
                        <div className='flex items-center justify-center text-white absolute top-0 bottom-0 left-0 right-0 z-[2]'>
                            <div className='flex flex-col'>
                                <p className='text-[40px] xl:text-[80px] font-bold'>
                                    {banner.title}
                                </p>
                                <div className='flex items-center justify-end'>
                                    <Link
                                        to={`${ROUTES.carDetail}/${banner.key}`}
                                        className='flex items-center gap-2 bg-top-navbar p-3 rounded-sm'
                                    >
                                        <span>
                                            <GiSteeringWheel />
                                        </span>
                                        <span>Xem thông số chi tiết</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
