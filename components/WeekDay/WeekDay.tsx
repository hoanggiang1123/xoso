import './weekday.css';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import WeekDayItem from './WeekDayItem';

import { checkParams } from '../../helpes';
import { getDayActive } from '../../helpes/lotoDay';
import { useGlobalState } from '../../state';


const WeekDay = () => {
  
    const [newday, setNewDay] = useState([]);

    const [ day ] = useGlobalState('lotoDay');

    const { query } = useRouter();

    useMemo(() => {
        const params = checkParams(query);
        const newday = getDayActive(day, params);
        setNewDay(newday);
    }, [query]);
    
    return <div className="weekday-section">
                <div className="weekday-hot">
                    <div className="hot-item">
                        <span>Hot</span>
                        <a href="">Loto Gan MB</a>
                    </div>
                    <div className="hot-item">
                        <span>Hot</span>
                        <a href="">Cầu nhiều nháy</a>
                    </div>
                    <div className="hot-item">
                        <span>Hot</span>
                        <a href="">Cầu bạc thủ mb</a>
                    </div>
                    <div className="hot-item">
                        <span>Hot</span>
                        <a href="">Lô kết hôm nay</a>
                    </div>
                </div>
                <div className="weekday">
                    {
                        newday.length && newday.map((item, index) => {
                            return <WeekDayItem item={item} cls={'wd-item'} key={ index } query={ query }/>
                        })
                    }  
                </div>
            </div>
}

export default WeekDay;