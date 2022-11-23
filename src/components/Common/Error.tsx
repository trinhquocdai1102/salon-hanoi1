import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { img404 } from '../../utils/constants';

interface ErrorProps {}

const Error: FC<ErrorProps> = () => {
    return (
        <div className='flex items-center justify-center pt-[40px] pb-[200px] bg-second mt-navbar'>
            <div>
                <div className='mt-10'>
                    <img src={img404} alt='not-found' />
                </div>
                <div className='w-full flex justify-center mb-8 text-txt-main'>
                    Xin lỗi trang này không tồn tại
                </div>
                <div className='w-full flex justify-center mt-4'>
                    <Link
                        className='bg-gray-400 px-4 py-2 text-white rounded-md font-semibold block hover:opacity-80'
                        to={ROUTES.home}
                    >
                        Trở lại trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
