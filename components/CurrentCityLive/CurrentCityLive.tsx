import './CurrentCityLive.scss';

import Link from 'next/link';

import { currentCityLive } from '../../helpers';

const CurrentCityLive = () => {
    const cities = currentCityLive('2020-08-29');

    return <div className="citylive-section box">
        <div className="box-title">
            <h1>Xổ số - Kết quả xổ số 3 miền - KQXS Hôm nay</h1>
        </div>
        <div className="box-body">
            {
                Object.keys(cities).map((key, index) => {
                    const item = cities[key];
                    return <div className="citylive-item" key={ index }>
                        {
                            index === 0 ?
                                <Link href="/[area]" as={ '/' + item.area_slug }>
                                    <a>{ item.name + ' ('+ item.area +')' }</a>
                                </Link>
                                :
                                <Link href="/[area]/[daydatecity]" as={ `/${item.area_slug}/${item.slug}` }>
                                    <a>{ item.name }</a>
                                </Link>
                            }
                    </div>
                })
            }
        </div>
    </div>
}

export default CurrentCityLive;