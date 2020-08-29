import { useRouter } from 'next/router';
import { useEffect, useState, useMemo } from 'react';

import { WeekDay } from '../../components/WeekDay';

const area = () => {
    const [path, setPath] = useState('');
    const router = useRouter();
    useEffect(() => {
        setPath(router.query.area as string)
    }, [router])
    return <div className="area-page">
        <h2>{ path }</h2>
        <WeekDay />
    </div>
}

area.getInitialProps = ({ query, res }) => {
    return {
        props: {}
    }
}

export default area;