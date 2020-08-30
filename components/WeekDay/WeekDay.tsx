import './weekday.css';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import WeekDayItem from './WeekDayItem';
import HotItem from './HotItem';

import { checkParams } from '../../helpers';
import { getDayActive } from '../../helpers/lotoDay';
import { HOT_ITEM } from '../../helpers/lotoMockUp';


const WeekDay = () => {
  
    const [newday, setNewDay] = useState([]);
    const [hotItem, setHotItem] = useState([]);

    const { query } = useRouter();
    const area = query.area ? query.area as string : 'xo-so-mien-bac';

    useMemo(() => {
        const params = checkParams(query);
        const newday = getDayActive(params);
        setNewDay(newday);
    }, [query]);
    
    useMemo(() => {
        const hotitem = HOT_ITEM[area];
        setHotItem(hotitem);
    }, [area])
    
    return <div className="weekday-section box">
                <div className="weekday-hot">
                    {
                        hotItem.length && hotItem.map((item, index) => {
                            return <HotItem item={item}  key={ index }/>
                        })
                    }
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