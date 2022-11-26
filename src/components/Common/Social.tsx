import React from 'react';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

const Social = () => {
    return (
        <>
            <a
                href='https://www.facebook.com/TrinhVanHung1977'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-50'
            >
                <AiFillFacebook color='#1778F2' />
            </a>
            <a
                href='https://www.youtube.com/channel/UCewKN5j-o0C8Q1wl_v9ndjA'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-50'
            >
                <AiFillYoutube color='#FF0000' />
            </a>
        </>
    );
};

export default Social;
