import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Slider/Banner';
import { ROUTES } from '../../routes/routes';

const AboutComponent = () => {
    return (
        <>
            <Banner />
            <div className='container'>
                <div className='pt-[40px] pb-[80px] xl:pt-[52px] xl:pb-[120px] p-[12px] xl:px-[100px]'>
                    <h1 className='text-[32px] mb-[20px] font-bold uppercase'>
                        Về chúng tôi - SALON Ô TÔ HÀ NỘI 1
                    </h1>
                    <div className='flex flex-col gap-4 px-6 text-justify'>
                        <p>
                            - Chuyên kinh doanh, mua bán các loại xe ô tô lướt,
                            xe ô tô đã qua sử dụng.
                        </p>
                        <p>
                            - Đến với chúng tôi, quý khách chắc chắn sẽ hài lòng
                            về chất lượng sản phẩm, chất lượng dịch vụ và chế độ
                            sau bán hàng.
                        </p>
                        <p>
                            - Với tiêu chí và định hướng chỉ làm xe đẹp. Tất cả
                            các dòng xe mà chúng tôi đã và đang kinh doanh luôn
                            được đánh giá rất khắt khe và chọn lọc kỹ càng đầu
                            vào. Cụ thể với 10 hạng mục đã được kiểm tra đó là:
                            “Động cơ; Thân vỏ; Dầu máy dầu số; Gầm càng chữ A,
                            Gầm sau; Vi sai cầu sau; Pháp lý đăng ký đăng kiểm;
                            Pháp lý chủ xe; An ninh xe (phạt nguội, phạm pháp…);
                            Xe vay ngân hàng hay nợ xấu”.
                        </p>
                        <p>
                            - Tuyệt đối nói không với các xe ô tô bị ngập nước,
                            bị thuỷ kích, xe bị tai nạn, xe an ninh không đảm
                            bảo…
                        </p>
                        <p>
                            <span className='font-semibold mr-1'>
                                - Phương châm của chúng tôi là:
                            </span>
                            UY TÍN - CHẤT LƯỢNG - MINH BẠCH
                        </p>
                        <div className='flex items-center flex-wrap'>
                            <span className='font-semibold mr-1'>
                                - Fanpage:
                            </span>
                            <a
                                href='https://www.facebook.com/TrinhVanHung1977'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:opacity-50 text-[blue]'
                            >
                                <p className='max-w-[300px] sm:max-w-max truncate'>
                                    https://www.facebook.com/TrinhVanHung1977
                                </p>
                            </a>
                        </div>
                        <div className='flex items-center flex-wrap'>
                            <span className='font-semibold mr-1'>
                                - Kênh youtube:
                            </span>
                            <a
                                href='https://www.facebook.com/TrinhVanHung1977'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:opacity-50 text-[blue]'
                            >
                                <p className='max-w-[300px] sm:max-w-max truncate'>
                                    https://www.youtube.com/channel/UCewKN5j-o0C8Q1wl_v9ndjA
                                </p>
                            </a>
                        </div>
                        <div className='flex items-center flex-wrap'>
                            <span className='font-semibold mr-1'>
                                - Liên hệ:
                            </span>
                            <Link
                                to={ROUTES.contact}
                                className='hover:opacity-50 text-[blue]'
                            >
                                <p>SALON Ô TÔ HÀ NỘI 1</p>
                            </Link>
                        </div>
                        <p>
                            <span className='font-semibold mr-1'>
                                - Địa chỉ:
                            </span>
                            Số 1B, đường Nguyễn Văn Huyên, phường Nghĩa Đô, quận
                            Cầu Giấy, thành phố Hà Nội.
                        </p>
                        <p>
                            <span className='font-semibold mr-1'>
                                - Hotline:
                            </span>
                            0968680977
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;
