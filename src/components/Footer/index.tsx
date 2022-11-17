import React from 'react';
import { Link } from 'react-router-dom';
import { footers } from './footer';

const Footer = () => {
    return (
        <div className='bg-top-navbar'>
            <div className='container flex items-start justify-between pt-[60px]'>
                <Link to='#' className='block w-[200px] h-[200px]'>
                    <img
                        src='./images/logo-test.png'
                        alt=''
                        className='object-cover'
                    />
                </Link>
                {footers.map((footer) => {
                    return (
                        <div key={footer.key}>
                            <h1 className='text-txt-navbar font-medium uppercase text-sm mb-3'>
                                {footer.label}
                            </h1>
                            <ul
                                className={`${
                                    footer.key !== 'hotline'
                                        ? 'pl-[40px]'
                                        : 'pl-0'
                                } text-[#9381ff] text-sm`}
                            >
                                {footer.child.map((child) => {
                                    return (
                                        <React.Fragment key={child.key}>
                                            {child.path &&
                                            footer.key !== 'hotline' ? (
                                                <li
                                                    className='list-disc list-disc-custom [&:not(:last-child)]:mb-3'
                                                    key={child.key}
                                                >
                                                    <Link
                                                        to={child.path}
                                                        className='hover:text-white'
                                                    >
                                                        {child.title}
                                                    </Link>
                                                </li>
                                            ) : child.path ? (
                                                <li
                                                    className='[&:not(:last-child)]:mb-3'
                                                    key={child.key}
                                                >
                                                    <Link
                                                        to={child.path}
                                                        className='hover:text-white'
                                                    >
                                                        {child.title}
                                                    </Link>
                                                </li>
                                            ) : child.phoneNumber !== null ||
                                              child.phoneNumber !==
                                                  undefined ? (
                                                <li
                                                    className='[&:not(:last-child)]:mb-3 text-txt-third'
                                                    key={child.key}
                                                >
                                                    <span className='font-medium'>
                                                        {child.title}:
                                                    </span>
                                                    <span className='ml-2'>
                                                        {child.phoneNumber}
                                                    </span>
                                                </li>
                                            ) : null}
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
