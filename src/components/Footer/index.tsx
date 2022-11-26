import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Social from '../Common/Social';

const Footer = () => {
    return (
        <div className='bg-top-navbar w-full py-[40px] text-center text-sm border-t border-main text-white'>
            <p>
                Salon Ô tô Hà Nội 1 chuyên mua bán và trao đổi
                <Link
                    to={ROUTES.search}
                    className='ml-1 font-semibold text-txt-footer hover:opacity-70'
                >
                    các dòng xe ô tô đã qua sử dụng
                </Link>
            </p>
            <p>
                Phương châm của chúng tôi là:
                <Link
                    to={ROUTES.about}
                    className='ml-1 font-semibold text-txt-footer hover:opacity-70'
                >
                    Uy tín - Chất lượng - Minh bạch
                </Link>
            </p>
            <p>
                Salon Ô tô Hà Nội 1 chuyên
                <Link
                    to={ROUTES.search}
                    className='ml-1 font-semibold text-txt-footer hover:opacity-70'
                >
                    xe đẹp, chất
                </Link>
            </p>
            <div className='flex justify-center items-center py-4'>
                <div className='flex items-center text-[32px] gap-4 drop-shadow-lg'>
                    <Social />
                </div>
            </div>
            <div className='flex items-center justify-center text-[13px]'>
                Copyright © 2022 Salon Ô tô Hà Nội 1 -
                <span className='ml-1'>Thông tin liên hệ:</span>
                <Link
                    to={ROUTES.contact}
                    className='text-txt-footer ml-2 font-semibold'
                >
                    Salon Ô tô Hà Nội 1
                </Link>
            </div>
        </div>
    );
};

export default Footer;
