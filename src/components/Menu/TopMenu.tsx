import React from 'react';
import { topNav } from '../../fakedata/TopNavbar';
import Logo from './Logo';

const TopMenu = () => {
    return (
        <div className='flex items-center justify-between container h-[100px]'>
            <Logo width={100} height={40} />
            <div className='text-white text-sm flex items-center gap-2'>
                {topNav.map((item) => {
                    return (
                        <div className='flex items-center gap-2' key={item.key}>
                            <item.icon className='text-txt-navbar text-[36px] border border-txt-navbar rounded-full p-2' />
                            {item.content && (
                                <p className='max-w-[200px]'>{item.content}</p>
                            )}
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
