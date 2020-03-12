import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actSearchPostRequest,
  actSearchPostByKeyWordRequest,
  actStoreValueSearch
} from "../../actions/index";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      activeSuggestion: -1,
      showSuggestions: false,
      currentSuggestion: ""
    };
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
        showSuggestions: true
      },
      () => {
        this.props.onSearchPost(this.state.keyword);
      }
    );
  };

  onKeyDown = e => {
    let { activeSuggestion } = this.state;
    if (e.keyCode === 13) {
      document.location.href = `/posts?key=${this.state.keyword}&page=${this.props.page}`;
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({
        activeSuggestion: activeSuggestion - 1,
        keyword: this.props.listSuggestion[activeSuggestion - 1].title
      });
    } else if (e.keyCode === 40) {
      if (activeSuggestion + 1 === this.props.listSuggestion.length) {
        return;
      } else if (this.state.keyword !== "") {
        this.setState({
          activeSuggestion: activeSuggestion + 1,
          keyword: this.props.listSuggestion[activeSuggestion + 1].title
        });
      }
    }
  };

  render() {
    const {
      onKeyDown,
      state: { activeSuggestion, keyword, showSuggestions }
    } = this;
    let suggestionsListComponent;

    if (showSuggestions && keyword) {
      if (this.props.listSuggestion.length) {
        suggestionsListComponent = (
          <ul id="autoComplete_results_list">
            {this.props.listSuggestion.map((suggestion, index) => {
              let className;
              if (index === activeSuggestion && showSuggestions) {
                className = "active-suggestion";
              }
              return (
                <Link
                  to={`/posts?key=${this.state.keyword
                    .split(" ")
                    .join("+")}&page=${this.props.page}`}
                >
                  <li
                    className={`row-item-suggestion-popup d-flex ${className}`}
                    key={suggestion}
                  >
                    <img src="../../assets/img/SVG/search.svg" alt="/#" />
                    <div className="ml-2">{suggestion.title}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        );
      }
    }
    return (
      <div className="section-homepage">
        <div className="container-fluid homepage__container">
          <div className="homepage__header layout-header d-none d-lg-block">
            <div className="homepage__header-container layout-header__container">
              <div className="homepage__header-top layout-header__top">
                <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                  <div className="ml-auto hp-header-top__menu lh-top__menu">
                    <div className="d-flex align-items-center ht-menu__items">
                      <div className="ht-menu--item">
                        <a href="/#">Thông tin</a>
                      </div>
                      <div className="ht-menu--item">
                        <a href="/#">Bản đồ</a>
                      </div>
                      <div className="ht-menu--item">
                        <a href="/#">Bảng giá</a>
                      </div>
                      <div className="ht-menu--item dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                          Th&ecirc;m
                        </div>
                        <div className="dropdown-menu ht-menu__add">
                          <div className="dropdown-item">
                            <a href="/#">Danh b&#/x1EA1;</a>
                          </div>
                          <div className="dropdown-item">
                            <a href="/#">T&agrave;i nguy&ecirc;n</a>
                          </div>
                          <div className="dropdown-item">
                            <a href="/#">H&#/x1ECF;i &dstrok;&aacute;p</a>
                          </div>
                        </div>
                      </div>
                      <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                        <div
                          className="menu-tools__btn-toggle dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            className="ht-menu--icon"
                            src="../../../assets/img/Group 1.png"
                            alt=""
                          />
                        </div>
                        <div className="menu-tools__dropdown-menu dropdown-menu">
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="#//">
                              <img
                                src="../../assets/img/Group 1569.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                T&iacute;nh to&aacute;n kho&#/x1EA3;n vay
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="#//">
                              <img
                                src="../../assets/img/baseline-insert_chart-24px.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                T&iacute;nh to&aacute;n hi&#/x1EC7;u qu&#/x1EA3;
                                d&#/x1EF1; &aacute;n
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="/#">
                              <img
                                src="../../assets/img/baseline-monetization_on-24px.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                T&agrave;i ch&iacute;nh c&aacute; nh&acirc;n
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <div className="ht__menu-notify">
                          <a href="/#">
                            <img
                              className="ht-menu--icon"
                              src="../../assets/img/Group 22.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <a
                          className="ht-menu__login menu-tools--btn-login btn btn-primary"
                          href="/dang-nhap"
                        >
                          Đăng nhập
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-header_mobile d-lg-none">
          <div className="header_mobile__container">
            <div className="header_mobile__content d-flex justify-content-between">
              <div className="menu_mobile__drawer">
                <div className="mobile-drawer__content d-flex align-items-center">
                  <div
                    className="drawer-toggler"
                    data-toggle="modal"
                    data-target="#/drawerToggleExternalContent"
                    aria-controls="drawerToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <img src="../../assets/img/icon-drawer.png" alt="" />
                  </div>
                  <div
                    className="modal fadeInRight"
                    id="drawerToggleExternalContent"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="drawerToggleExternalContent"
                    aria-hidden="true"
                  >
                    <div className="modal-content">
                      <nav className="mobile-navbar">
                        <div className="mobile-navbar__content">
                          <a className="navbar-brand" href="/">
                            <img src="../../assets/img/asset-logo.png" alt="" />
                          </a>
                          <div className="navbar__items">
                            <div className="navbar--item">
                              <a href="/ket-qua/thong-tin">Th&ocirc;ng tin</a>
                            </div>
                            <div className="navbar--item">
                              <a href="/ban-do">
                                B&#/x1EA3;n &dstrok;&#/x1ED3;
                              </a>
                            </div>
                            <div className="navbar--item">
                              <a href="/ket-qua/bang-gia">
                                B&#/x1EA3;ng gi&aacute;
                              </a>
                            </div>
                            <div className="navbar--item">
                              <a href="/#">Danh b&#/x1EA1;</a>
                            </div>
                            <div className="navbar--item">
                              <a href="/#">T&agrave;i nguy&ecirc;n</a>
                            </div>
                            <div className="navbar--item">
                              <a href="/#">H&#/x1ECF;i &dstrok;&aacute;p</a>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu_mobile__items d-flex align-items-center">
                <div className="menu_mobile--item dropdown dropdown__menu-tool">
                  <div
                    className="dropdown-toggle d-flex"
                    data-toggle="dropdown"
                  >
                    <img
                      className="img_menu"
                      src="../../assets/img/Group 1.png"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-menu menu-tool">
                    <div className="dropdown-item">
                      <a href="/#">
                        <img src="../../assets/img/Group 1569.png" alt="" />
                        <span className="menu-tool--text">
                          T&iacute;nh to&aacute;n kho&#/x1EA3;n vay
                        </span>
                      </a>
                    </div>
                    <div className="dropdown-item">
                      <a href="/#">
                        <img
                          src="../../assets/img/baseline-insert_chart-24px.png"
                          alt=""
                        />
                        <span className="menu-tool--text">
                          T&iacute;nh to&aacute;n hi&#/x1EC7;u qu&#/x1EA3;
                          d&#/x1EF1; &aacute;n
                        </span>
                      </a>
                    </div>
                    <div className="dropdown-item">
                      <a href="/#">
                        <img
                          src="../../assets/img/baseline-monetization_on-24px.png"
                          alt=""
                        />
                        <span className="menu-tool--text">
                          T&agrave;i ch&iacute;nh c&aacute; nh&acirc;n
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu_mobile--item">
                  <div className="menu-notify">
                    <a className="d-flex" href="/#">
                      <img
                        className="img_menu"
                        src="../../assets/img/Group 22.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="menu_mobile--item">
                  <a className="btn-login" href="/dang-nhap">
                    <img src="../../assets/img/icon-avatar.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-body">
          <div className="homepage-body__container">
            <div className="homepage-body__content">
              <div className="center d-flex justify-content-center align-items-center">
                <div className="center-content d-flex flex-column justify-content-center">
                  <div className="homepage--logo">
                    <div className="logo--container d-flex justify-content-center">
                      <img src="../../assets/img/asset-logo.png" alt="" />
                    </div>
                  </div>
                  <div className="homepage--description">
                    <div className="description--container d-flex flex-column align-items-center">
                      <span className="description-line line-1">
                        Thị trường bất động sản Việt Nam
                      </span>
                    </div>
                  </div>
                  <div className="homepage--input-search">
                    <div className="input-search__container d-flex justify-content-center">
                      <div
                        className={`w-100 input-search__content ${
                          this.props.listSuggestion.length > 0
                            ? "expanded"
                            : "collapsed"
                        }`}
                        id="autoComplete__content"
                      >
                        <input
                          className="form-control"
                          id="scriptBox"
                          type="text"
                          name="keyword"
                          placeholder="Search ..."
                          tabindex="1"
                          onChange={this.onChange}
                          onKeyDown={onKeyDown}
                          autocomplete="off"
                          value={this.state.keyword}
                        />
                        {suggestionsListComponent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__footer layout-footer">
          <div className="homepage__footer-container">
            <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
              <div className="hp-footer--link layout-footer--link">
                <a href="/#">Giới thiệu</a>
              </div>
              <div className="hp-footer--link layout-footer--link">
                <a href="/#">Hướng dẫn</a>
              </div>
            </div>
            <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
              <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                <div className="quick-view__content">
                  <span>
                    <span className="quick-view--title">Tin nhanh 1: </span>{" "}
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis biben{" "}
                    <a href="/#">Xem nhanh</a>
                  </span>
                </div>
              </div>
              <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                <div className="quick-view__content">
                  <span>
                    <span className="quick-view--title">Tin nhanh 2: </span>{" "}
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis biben{" "}
                    <a href="/#">Xem nhanh</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="hp-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
              <div className="hp-footer__quick-view layout-footer--quick-view">
                <div className="quick-view__content d-inline-flex">
                  <span>
                    <span className="quick-view--title">Tin nhanh 1: </span>{" "}
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis biben{" "}
                    <a href="/#">Xem nhanh</a>
                  </span>
                </div>
                <div className="quick-view__content d-inline-flex">
                  <span>
                    <span className="quick-view--title">Tin nhanh 2: </span>{" "}
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis biben{" "}
                    <a href="/#">Xem nhanh</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listSuggestion: state.postReducer.searchSuggestion,
    page: state.postReducer.pageNumber,
    valueSearch: state.postReducer.valueSearch
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    onSearchPost: keyword => {
      dispatch(actSearchPostRequest(keyword));
    },
    onSearchPostByKeyWord: keyword => {
      dispatch(actSearchPostByKeyWordRequest(keyword));
    },
    onStoreValueSearch: values => {
      dispatch(actStoreValueSearch(values));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);
