import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import Item from "../Item/Item";
import {
  actSearchPostByKeyWordRequest,
  actCountAllPostsRequest,
  actStoreKeySearch,
  actStorePageSearch
} from "../../actions/index";
import Pagination from "../Pagination/Pagination";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
      currentPage: 1,
      postPerPage: 10,
      totalPost: 1,
      keySearch: this.props.getKeySearch
    };
  }

  componentDidMount() {
    this.getPostByKeyword(this.state.currentPage);
    this.getTotalPost();
  }

  updateUrl = () => {
    if (this.props.getPageSearch >= 1) {
      window.history.pushState(
        {},
        "",
        `posts?key=${this.state.keySearch}&page=${this.props.getPageSearch}`
      );
    }
  };

  getPostByKeyword = pageNumber => {
    const values = queryString.parse(this.props.location.search);
    if (values) {
      this.props.onSearchPostByKeyWord(values.key, this.state.currentPage);
    }
    this.setState(
      {
        listPosts: this.props.listPosts,
        queryString: values.key
      },
      () => this.updateUrl()
    );
  };

  getTotalPost() {
    const values = queryString.parse(this.props.location.search);
    this.props.onCountTotalPosts(values.key);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.totalPost !== props.getNumberPost) {
      return {
        totalPost: props.getNumberPost
      };
    }
    return null;
  }

  paginate(pageNumber) {
    if (pageNumber) {
      this.props.onStorePageSearch(pageNumber);
      this.setState(
        {
          currentPage: pageNumber
        },
        () => this.getPostByKeyword(this.state.currentPage)
      );
    }
  }

  render() {
    return (
      <section className="section__result-pages">
        <div className="container-fluid result-pages__container">
          <div className="result-pages__header layout-header">
            <div className="result-pages__header-container layout-header__container">
              <div className="result-pages__header-top layout-header__top">
                <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                  <div className="rp-header-top__logo lh-top__logo">
                    <div className="header-top--logo lh-top--logo">
                      <a href="/">
                        <img
                          src="../../../assets/img/icon-asset.png"
                          alt="/#"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="rp-header-top__search-input lh-top__search-input">
                    <div className="search-input">
                      <div
                        className="w-100 input-search__content collapsed"
                        id="autoComplete__content"
                      >
                        <input
                          className="form-control"
                          id="autoComplete"
                          type="text"
                          placeholder="Search ..."
                          tabindex="1"
                          value={this.state.queryString}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto rp-header-top__menu lh-top__menu">
                    <div className="d-flex align-items-center ht-menu__items">
                      <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                        <div
                          className="menu-tools__btn-toggle dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            className="ht-menu--icon"
                            src="../../../assets/img/Group 1.png"
                            alt="/#"
                          />
                        </div>
                        <div className="menu-tools__dropdown-menu dropdown-menu">
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="/#">
                              <img
                                src="../../../assets/img/Group 1569.png"
                                alt="/#"
                              />
                              <span className="ht-menu--text">
                                T&iacute;nh to&aacute;n kho&#x1EA3;n vay
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="/#">
                              <img
                                src="../../../assets/img/baseline-insert_chart-24px.png"
                                alt="/#"
                              />
                              <span className="ht-menu--text">
                                T&iacute;nh to&aacute;n hi&#x1EC7;u qu&#x1EA3;
                                d&#x1EF1; &aacute;n
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="/#">
                              <img
                                src="../../../assets/img/baseline-monetization_on-24px.png"
                                alt="/#"
                              />
                              <span className="ht-menu--text">
                                T&agrave;i ch&iacute;nh c&aacute; nh&acirc;n
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <div className="ht-menu__notify">
                          <a href="/#">
                            <img
                              className="ht-menu--icon"
                              src="../../assets/img/Group 22.png"
                              alt="/#"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <a
                          className="ht-menu__login menu-tools--btn-login"
                          href="/dang-nhap"
                        >
                          <img
                            className="ht-menu--icon ht-menu--icon-avatar"
                            src="../../assets/img/icon-avatar.png"
                            alt="/#"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="result-pages__header-navigation">
                <div className="rp-header-navigation header-navigation__container">
                  <div className="header-navigation__items d-flex">
                    <div className="header-navigation--item is-actived">
                      <a className="hn-item--text" href="/#">
                        T&#x1EA5;t c&#x1EA3;
                      </a>
                    </div>
                    <div className="header-navigation--item">
                      <a className="hn-item--text" href="/#">
                        Th&ocirc;ng tin
                      </a>
                    </div>
                    <div className="header-navigation--item">
                      <a className="hn-item--text" href="/#">
                        B&#x1EA3;n &dstrok;&#x1ED3;
                      </a>
                    </div>
                    <div className="header-navigation--item">
                      <a className="hn-item--text" href="/#">
                        B&#x1EA3;ng gi&aacute;
                      </a>
                    </div>
                    <div className="header-navigation--item dropdown">
                      <div
                        className="hn-item--text dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Thêm <span className="fa icon"></span>
                      </div>
                      <div className="dropdown-menu hn-menu__add">
                        <div className="dropdown-item">
                          <a href="/#">Danh b&#x1EA1;</a>
                        </div>
                        <div className="dropdown-item">
                          <a href="/#">T&agrave;i nguy&ecirc;n</a>
                        </div>
                        <div className="dropdown-item">
                          <a href="/#">H&#x1ECF;i &dstrok;&aacute;p</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-pages__body">
            <div className="result-pages__body-container container">
              <div className="result-pages__search-result">
                <div className="rp-search-result__header">
                  <div className="text-result">
                    Khoảng{" "}
                    <strong>
                      {this.state.totalPost && this.state.totalPost}
                    </strong>{" "}
                    kết quả
                  </div>
                  <div className="search-result__header-map">
                    <div className="header-map__container">
                      <div className="header-map__main">
                        <div className="header-map--map">
                          <div className="header-map__map-group">
                            <img src="../../assets/img/result-map.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="header-map__details">
                        <div className="map-details--name">
                          <span>L&yacute; Ch&iacute;nh Th&#x1EAF;ng</span>
                        </div>
                        <div className="map-details--address">
                          <span>
                            Qu&#x1EAD;n 3, Tp H&#x1ED3; Ch&iacute; Minh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {this.props.listPosts.length > 0 &&
                  this.props.listPosts.map(post => {
                    return (
                      <NavLink to={`/post?id=${post._id}`}>
                        <Item post={post} />
                      </NavLink>
                    );
                  })}
              </div>
            </div>
            <Pagination
              total={this.state.totalPost}
              postPerPage={this.state.postPerPage}
              currentPage={this.state.currentPage}
              paginate={pageNumber => this.paginate(pageNumber)}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    listPosts: state.postReducer.posts,
    getNumberPost: state.postReducer.totalPost,
    getPageSearch: state.postReducer.pageSearch,
    getKeySearch: state.postReducer.keySearch
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchPostByKeyWord: (keyword, pageNumber) => {
      dispatch(actSearchPostByKeyWordRequest(keyword, pageNumber));
    },
    onCountTotalPosts: keyword => {
      dispatch(actCountAllPostsRequest(keyword));
    },
    onStorePageSearch: page => {
      dispatch(actStorePageSearch(page));
    },
    onStoreKeySearch: key => {
      dispatch(actStoreKeySearch(key));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
