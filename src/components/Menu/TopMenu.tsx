import React from 'react';
import { topNav } from './menu';
import Logo from './Logo';

const TopMenu = () => {
    return (
        <div className='flex items-center justify-start container h-[60px]'>
            <div className='text-white text-sm flex items-center gap-2'>
                {topNav.map((item) => {
                    return (
                        <div className='flex items-center gap-2' key={item.key}>
                            <item.icon className='text-txt-navbar text-[36px] border border-txt-navbar rounded-full p-2' />
                            {item.content && <p>{item.content}</p>}
                            {item.phone && (
                                <p className='flex flex-col gap-1'>
                                    {item.phone?.map((phone) => {
                                        return (
                                            <span key={phone.key}>
                                                {phone?.phoneNumber}
                                            </span>
                                        );
                                    })}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopMenu;
