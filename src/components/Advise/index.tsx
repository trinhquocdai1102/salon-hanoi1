import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { adviseForm } from './advise';
import toast from 'react-hot-toast';

interface IAdvise {
    key: string;
    label: string;
    name: string;
    value: string;
    type: string;
    required: boolean;
}

const AdviseComponent = () => {
    const initialValue = {
        key: '',
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
    };
    const [value, setValue] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<any>(null);

    const handleChangeValueInput = (e: any, item: IAdvise) => {
        if (item.value === 'user_name') {
            setValue({
                ...value,
                user_name: e.target.value,
            });
        } else if (item.value === 'user_email') {
            setValue({
                ...value,
                user_email: e.target.value,
            });
        } else if (item.value === 'user_phone') {
            setValue({
                ...value,
                user_phone: e.target.value,
            });
        }
    };

    const handleSendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                'service_salonhanoi1',
                'template_salonhanoi1',
                value,
                'x053gTcoI5UY44x-E'
            )
            .then(
                (result: any) => {
                    toast.success('Bạn đã gửi thông tin thành công');
                    formRef.current.reset();
                    setLoading(false);
                },
                (error: any) => {
                    setLoading(false);
                    toast.error(error);
                }
            );
    };
    return (
        <div>
            <div className='h-[200px] bg-black relative'></div>
            <div className='absolute top-[300px] left-0 right-0 flex justify-center'>
                <div className='container bg-white py-[20px]'>
                    <div>
                        <h1 className='text-[32px] uppercase font-bold my-4'>
                            Liên hệ với chúng tôi{' '}
                            <span className='hidden lg:inline'>
                                để được tư vấn
                            </span>
                        </h1>
                        <form ref={formRef} onSubmit={handleSendEmail}>
                            <div className='w-full'>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-0'>
                                    <div className='flex flex-wrap gap-y-4 ld:gap-y-0 w-full md:w-3/5'>
                                        {adviseForm.map((item) => {
                                            return (
                                                <div
                                                    key={item.key}
                                                    className='w-full lg:w-1/2'
                                                >
                                                    <label htmlFor={item.key}>
                                                        {item.label}
                                                        {item.required
                                                            ? '*'
                                                            : ''}
                                                    </label>
                                                    <div>
                                                        <input
                                                            className='bg-main py-2 px-4 w-[80%] focus:outline focus:outline-top-navbar'
                                                            placeholder={
                                                                item.placeholder
                                                            }
                                                            required={
                                                                item.required
                                                            }
                                                            type={item.type}
                                                            name={item.name}
                                                            id={item.key}
                                                            onChange={(e) =>
                                                                handleChangeValueInput(
                                                                    e,
                                                                    item
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='w-full lg:w-2/5'>
                                        <label>Message</label>
                                        <div className='w-full'>
                                            <textarea
                                                name='message'
                                                className='bg-main py-2 px-4 h-[150px] max-h-[150px] min-h-[150px] md:w-full w-4/5 rounded-sm'
                                                onChange={(e) =>
                                                    setValue({
                                                        ...value,
                                                        message: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4 flex items-center justify-center md:justify-end w-full'>
                                {loading ? (
                                    'Loading...'
                                ) : (
                                    <input
                                        type='submit'
                                        value='Hoàn tất'
                                        className='bg-top-navbar py-3 px-8 rounded-md text-white font-semibold uppercase text-sm cursor-pointer hover:opacity-90'
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdviseComponent;
