export default function Header() {
    return (
        <div className="site-header">
            <div className="site-header_top">
                <div className="container-h">
                    <div className="grid-wrap">
                        <div className="humburger">
                            <div className="humbuget-btn"></div>
                        </div>
                        <div className="site-header_top_logo">
                            <img src="./BDTT-logo-3.png" />
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
        </div>
    )
}
