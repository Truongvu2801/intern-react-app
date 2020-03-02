import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="rp-search-result__items">
                {/* <!-- SEARCH RESULT ITEM--> */}
                <div className="rp-search-result-item">
                    <div className="search-result__item-container d-flex"><img className="sr-item__modal"
                        src="../../../assets/img/icon-modal.png" />
                        <div className="sr-item__poster">
                            <div className="poster--avatar"><a href="#"><img src="../../../assets/img/Rectangle 97.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="sr-item__details">
                            <div className="item-details__container">
                                <div className="item-details__title">
                                    <div className="ids-title__content">
                                        <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset News</a>
                                            <div className="title--rate d-flex align-items-center"><span>[Chung
                                        c&#x1B0; </span><span className="title_rate--highlight">
                                                    4,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                        </div>
                                        <p className="mb-0 ids-title--category">&dstrok;&atilde;
                                &dstrok;&abreve;ng m&#x1ED9;t b&agrave;i vi&#x1EBF;t trong <a className="ids-title--category"
                                                href="/ket-qua/thong-tin">Th&ocirc;ng tin</a></p>
                                        <p className="mb-0 ids-title--date-posted">15 ng&agrave;y
                                tr&#x1B0;&#x1EDB;c</p>
                                    </div>
                                </div>
                                <div className="item-details__post">
                                    <div className="ids-post--title"><a href="#">T&ograve;a nh&agrave; L&yacute;
                                                    Ch&iacute;nh Th&#x1EAF;ng &dstrok;ang trong giai
                                &dstrok;o&#x1EA1;n ho&agrave;n thi&#x1EC7;n</a></div>
                                    <div className="ids-post--content"><span>
                                        Ng&agrave;y 10-12/05: C&oacute; 123 th&ocirc;ng b&aacute;o
                                        k&#x1EBF; ho&#x1EA1;ch l&#x1EF1;a ch&#x1ECD;n nh&agrave;
                                        th&#x1EA7;u ch&#x1EAD;m .... 1527/Q&Dstrok;-UBND ng&agrave;y
                                        14/02/2019; KHLCNT c&#x1EE7;a Ban Qu&#x1EA3;n l&yacute;
                                        d&#x1EF1; &aacute;n &dstrok;&#x1EA7;u t&#x1B0; x&acirc;y ....
                                        KHLCNT c&#x1EE7;a S&#x1EDF; T&agrave;i ch&iacute;nh t&#x1EC9;nh
                                        H&#x1B0;ng
                                        &mldr;. cho d&#x1EF1; &aacute;n &ldquo;Mua s&#x1EAF;m
                                        thi&#x1EBF;t b&#x1ECB; &dstrok;&#x1ECB;nh .... H&#x1EA1;ng
                                        m&#x1EE5;c: X&oacute;m Ao V&agrave;ng, C&#x1ED5; R&ugrave;a,
                                        G&ograve; Ch&egrave;, Ph&uacute;c L&#x1ED9;c,
                                Quy&#x1EBF;t Th&#x1EAF;ng, T&acirc;n ...</span></div>
                                </div>
                                <div className="item-details__actions">
                                    <div className="action-buttons-bottom">
                                        <a href="#" className="btn -marked">
                                            <span className="fa fa-star icon"></span> 40
                            </a>
                                        <a href="#" className="btn -comment">
                                            <span className="fa fa-comment-o icon"></span> 40
                            </a>
                                        <a href="#" className="btn -liked">
                                            <span className="-ap  icon-like2 icon"></span> 40
                            </a>
                                        <a href="#" className="btn -share">
                                            <span className="-ap  icon-share4 icon"></span> 40
                            </a>
                                        <a href="#" className="btn -mail">
                                            <span className="-ap  icon-mail6 icon"></span> 10
                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item; 