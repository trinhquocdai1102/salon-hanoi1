import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
export const topNav = [
    {
        key: uuidv4(),
        icon: MdLocationOn,
        content: '1B Nguyễn Văn Huyên, Nghĩa Đô, Cầu Giấy, Hà Nội',
        phone: null,
    },
    {
        key: uuidv4(),
        icon: BsFillTelephoneFill,
        content: null,
        phone: [
            {
                key: uuidv4(),
                phoneNumber: '0968680977',
            },
            {
                key: uuidv4(),
                phoneNumber: '0984965663',
            },
        ],
    },
];
