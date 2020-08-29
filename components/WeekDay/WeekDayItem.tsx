import Link from 'next/link';

const WeekDayItem = ({ item, cls, query }) => {

    const area = query.area ? query.area: 'xo-so-mien-bac';

    return <div className={ cls +' ' + item.active }>
        {
            item.slug.indexOf('xo-so') > -1 ?

                <Link href='/[area]' as={`/${area}`}>
                    <a>{ item.name }</a>
                </Link> 

                : 

                <Link href='/[area]/[daydatecity]' as={`/${area}/${item.slug}`}>
                    <a>{ item.name }</a>
                </Link>
        }
    </div>
}

export default WeekDayItem;