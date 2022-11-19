import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

interface LogoProps {
    width: string | number;
    height: string | number;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
    return (
        <Link to={ROUTES.home}>
            <div
                style={{ width: width, height: height }}
                className='rounded-md flex items-center justify-center'
            >
                <img
                    // onError={({ currentTarget }) => {
                    //     currentTarget.onerror = null;
                    //     currentTarget.src = avatarDefault;
                    // }}
                    src={'./images/logo.png'}
                    alt='logo'
                />
            </div>
        </Link>
    );
};

export default Logo;
