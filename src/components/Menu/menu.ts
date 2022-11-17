import { AiOutlineHome } from 'react-icons/ai';
import { RiCarFill, RiSearchLine } from 'react-icons/ri';
import { MdRecommend } from 'react-icons/md';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import {
    SiChevrolet,
    SiFord,
    SiHonda,
    SiHyundai,
    SiKia,
    SiMazda,
    SiMercedes,
    SiPeugeot,
    SiRenault,
    SiToyota,
} from 'react-icons/si';

export const menus = [
    {
        name: 'Tìm Kiếm',
        path: '/search',
        icon: RiSearchLine,
        background: '#2ecc71',
    },
    {
        name: 'Trang Chủ',
        path: '/',
        icon: AiOutlineHome,
        background: '#3498db',
    },
    {
        name: 'Hãng xe',
        path: '/brands',
        icon: RiCarFill,
        background: '#f1c40f',
    },
    {
        name: 'Tư vấn',
        path: '/advise',
        icon: MdRecommend,
        background: '#e67e22',
    },
];

export const settings = [
    {
        name: 'Sáng',
        darkMode: false,
        icon: BsFillSunFill,
    },
    {
        name: 'Tối',
        darkMode: true,
        icon: BsFillMoonFill,
    },
];

export const sidebars = [
    {
        name: 'Tìm Kiếm',
        path: '/search',
        icon: RiSearchLine,
        parentPath: null,
        child: null,
        background: '#2ecc71',
    },
    {
        name: 'Trang Chủ',
        path: '/',
        icon: AiOutlineHome,
        parentPath: null,
        child: null,
        background: '#3498db',
    },
    {
        name: 'Hãng xe',
        path: null,
        icon: RiCarFill,
        parentPath: '/brands',
        child: [
            {
                name: 'Toyota',
                icon: SiToyota,
                path: '/brands/toyota',
            },
            {
                name: 'KIA',
                icon: SiKia,
                path: '/brands/kia',
            },
            {
                name: 'Hyundai',
                icon: SiHyundai,
                path: '/brands/hyundai',
            },
            {
                name: 'Mazda',
                icon: SiMazda,
                path: '/brands/mazda',
            },
            {
                name: 'Ford',
                icon: SiFord,
                path: '/brands/ford',
            },
            {
                name: 'Honda',
                icon: SiHonda,
                path: '/brands/honda',
            },
            {
                name: 'Chevrolet',
                icon: SiChevrolet,
                path: '/brands/chevrolet',
            },
            {
                name: 'Mercedes-Benz',
                icon: SiMercedes,
                path: '/brands/mercedes-benz',
            },
            {
                name: 'Peugeot',
                icon: SiPeugeot,
                path: '/brands/peugeot',
            },
            {
                name: 'Renault',
                icon: SiRenault,
                path: '/brands/renault',
            },
        ],
        background: '#f1c40f',
    },
    {
        name: 'Tư vấn',
        path: '/advise',
        icon: MdRecommend,
        parentPath: null,
        child: null,
        background: '#e67e22',
    },
];
