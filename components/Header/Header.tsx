import 'mmenu-light/dist/mmenu-light.css'
import './header.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router';

import { MobileNav } from '../MobileNav'

export default function Header() {

    useEffect(() => {
        //@ts-ignore
        const menu = new MmenuLight( document.querySelector( "#m-nav" ))
        menu.navigation({ 
            slidingSubmenus: true,
            theme: 'light',
            title: 'Lottery'
        })
        const drawer = menu.offcanvas()
        document.querySelector( ".humbuget-btn" ).addEventListener( "click", ( e ) => { drawer.open()})
    },[])

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    }
    
    return (
        <div className="site-header">
            <div className="site-header_top">
                <div className="container-h">
                    <div className="grid-wrap">
                        <div className="humburger">
                            <div className="humbuget-btn"></div>
                        </div>
                        <div className="site-header_top_logo">
                            <img src="/BDTT-logo-3.png" onClick={handleHomeClick}/>
                        </div>
                        <div className="site-header_top_rolling">
                            <div className="roll-btn">
                                <button type="button">Quay</button>
                            </div>
                            <div className="roll-numbers">
                                <div className="roll-num">1</div>
                                <div className="roll-num">1</div>
                                <div className="roll-num">1</div>
                                <div className="roll-num">1</div>
                                <div className="roll-num">1</div>
                            </div>
                        </div>
                        <div className="site-header_top_date">date</div>
                        <div className="quay-mobile">
                            Quay <br />Số
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav />
        </div>
    )
}
