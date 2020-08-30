import Link from 'next/link';

const HotItem = ({item}) => {
    return  <div className="hot-item">
            <span>Hot</span>
            {
                item.slug === '' ?
                    <Link href={ item.href } as={ item.as }>
                        <a>{ item.name }</a>
                    </Link>
                    :
                    <Link href={ item.slug } as={ item.slug }>
                        <a>{ item.name }</a>
                    </Link>
            }
            
        </div>
}

export default HotItem;