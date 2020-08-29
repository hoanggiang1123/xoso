import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const mobileMenu = [
    {
        name: 'Xổ Số Miền Bắc',
        slug: 'xo-so-mien-bac',
        path: '/[area]',
        subpath: '/[area]/[daydatecity]',
        sub: [
            {
                name: 'Thứ 2',
                slug: 'thu-2'
            },
            {
                name: 'Thứ 3',
                slug: 'thu-3'
            },
            {
                name: 'Thứ 4',
                slug: 'thu-4'
            },
            {
                name: 'Thứ 5',
                slug: 'thu-5'
            },
            {
                name: 'Thứ 6',
                slug: 'thu-6'
            },
            {
                name: 'Thứ 7',
                slug: 'thu-7'
            },
            {
                name: 'Chủ nhật',
                slug: 'chu-nhat'
            }
        ]
    },
    {
        name: 'Xổ Số Miền Nam',
        slug: 'xo-so-mien-nam',
        path: '/[area]',
        subpath: '/[area]/[daydatecity]',
        sub: [
            {
                name: 'Thứ 2',
                slug: 'thu-2'
            },
            {
                name: 'Thứ 3',
                slug: 'thu-3'
            },
            {
                name: 'Thứ 4',
                slug: 'thu-4'
            },
            {
                name: 'Thứ 5',
                slug: 'thu-5'
            },
            {
                name: 'Thứ 6',
                slug: 'thu-6'
            },
            {
                name: 'Thứ 7',
                slug: 'thu-7'
            },
            {
                name: 'Chủ nhật',
                slug: 'chu-nhat'
            }
        ]
    },
    {
        name: 'Xổ Số Miền Trung',
        slug: 'xo-so-mien-trung',
        path: '/[area]',
        subpath: '/[area]/[daydatecity]',
        sub: [
            {
                name: 'Thứ 2',
                slug: 'thu-2'
            },
            {
                name: 'Thứ 3',
                slug: 'thu-3'
            },
            {
                name: 'Thứ 4',
                slug: 'thu-4'
            },
            {
                name: 'Thứ 5',
                slug: 'thu-5'
            },
            {
                name: 'Thứ 6',
                slug: 'thu-6'
            },
            {
                name: 'Thứ 7',
                slug: 'thu-7'
            },
            {
                name: 'Chủ nhật',
                slug: 'chu-nhat'
            }
        ]
    },
    {
        name: 'Thống kê',
        slug: 'thong-ke',
        path: '/thong-ke',
        subpath: '/thong-ke/[type]',
        sub: [
            {
                name: 'Thống kê lô gan',
                slug: 'thong-ke-lo-gan'
            },
            {
                name: 'Thống kê giải đặc biệt',
                slug: 'thong-ke-giai-dac-biet'
            },
            {
                name: 'Thống kê Đầu - Đuôi',
                slug: 'thong-ke-dau-duoi'
            },
            {
                name: 'Tần suất xuất hiện',
                slug: 'thong-ke-tan-suat'
            },
            {
                name: 'TK từ 00 đến 99',
                slug: 'thong-ke-00-99'
            },
            {
                name: 'Thống kê lô xiên',
                slug: 'thong-ke-lo-xiên'
            },
            {
                name: 'Thống kê lô kép',
                slug: 'thong-ke-lo-kép'
            }
        ]
    },
    {
        name: 'Trực tiếp xổ số',
        slug: 'truc-tiep-xo-so',
        path: '/truc-tiep-xo-so',
        subpath: '/truc-tiep-xo-so/[type]',
        sub: [
            {
                name: 'Trực tiếp miền nam',
                slug: 'truc-tiep-mien-nam'
            },
            {
                name: 'Trực tiếp miền bắc',
                slug: 'truc-tiep-mien-bac'
            },
            {
                name: 'Trực tiếp miền trung',
                slug: 'truc-tiep-mien-trung'
            }
        ]
    },
    {
        name: 'Quay thử xổ số',
        slug: 'quay-thu-xo-so',
        path: '/quay-thu-xo-so',
        subpath: '/quay-thu-xo-so/[type]',
        sub: [
            {
                name: 'Quay thử miền nam',
                slug: 'quay-thu-mien-nam'
            },
            {
                name: 'Quay thử miền bắc',
                slug: 'quay-thu-mien-bac'
            },
            {
                name: 'Quay thử miền trung',
                slug: 'quay-thu-mien-trung'
            }
        ]
    },
    {
        name: 'Tra cứ kq',
        slug: 'tra-cuu-ket-qua-xo-so',
        path: '/tra-cuu',
        subpath: '/tra-cuu/[type]',
        sub: [
            {
                name: 'Kết quả hôm nay',
                slug: 'ket-qua-hom-nay'
            },
            {
                name: 'Kết quả hôm qua',
                slug: 'ket-qua-hom-qua'
            },
            {
                name: 'Kết quả 30 ngày',
                slug: 'ket-qua-30-ngay'
            },
            {
                name: 'Dò vé số',
                slug: 'ket-qua-hom-qua'
            },
            {
                name: 'Kết quả theo đài',
                slug: 'ket-qua-theo-dai'
            }
        ]
    }

]

const lotoDay = [
    {
        name: 'Miền Bắc',
        slug: 'xo-so-mien-bac',
        active: ''
    },
    {
        name: 'Thứ 2',
        slug: 'thu-2',
        active: ''
    },
    {
        name: 'Thứ 3',
        slug: 'thu-3',
        active: ''
    },
    {
        name: 'Thứ 4',
        slug: 'thu-4',
        active: ''
    },
    {
        name: 'Thứ 5',
        slug: 'thu-5',
        active: ''
    },
    {
        name: 'Thứ 6',
        slug: 'thu-6',
        active: ''
    },
    {
        name: 'Thứ 7',
        slug: 'thu-7',
        active: ''
    },
    {
        name: 'Chủ nhật',
        slug: 'chu-nhat',
        active: ''
    }
];
const query = {
    status: true,
    area: '',
    daydatecity: '',
    date: '',
    type: '',
    href: '',
    path: ''
};
const initialState = {
    mobileMenu,
    lotoDay,
    query
};

const { useGlobalState } = createGlobalState(initialState);

export {
    useGlobalState
}