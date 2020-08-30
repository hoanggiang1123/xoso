import Link from 'next/link';

import { MOBILE_MENU } from '../../helpers/lotoMockUp';

export default function MobileNav () {
    return (
        <nav id="m-nav">
            <ul>
                {
                    MOBILE_MENU.length && MOBILE_MENU.map((item, index) => {
                        return <li key={ item.slug + index }>
                            {
                                item.slug.indexOf('xo-so-mien-') > -1 ?
                                    <Link href={ item.path } as={ `/${item.slug}` }>
                                        <a>{ item.name }</a>
                                    </Link>
                                    :
                                    <Link href={ '/' + item.slug }>
                                        <a>{ item.name }</a>
                                    </Link>
                            }
                            {
                                (item.sub && item.sub.length) &&
                                <ul className="sub-menu">
                                    {
                                        item.sub.map((el, i) => {
                                            return <li key={ el.slug + i }>
                                                <Link href={ item.subpath } as={ `/${item.slug}/${el.slug}` }>
                                                    <a>{ el.name }</a>
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                                
                            }
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}