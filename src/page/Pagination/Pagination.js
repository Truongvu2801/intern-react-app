import React, { Component, Fragment } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    };
  }

  componentWillMount() {
    if (this.props.total) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.total !== prevProps.total) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage = page => {
    if (page !== "undefined") {
      this.setState({
        currentPage: page
      });
    }

    const { total, postPerPage } = this.props;
    const { currentPage } = this.props;
    console.log(currentPage);
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(total, currentPage, postPerPage);
    this.setState({ pager: pager }, () => this.props.paginate(page));
  };

  getPager(total, currentPage, postPerPage) {
    currentPage = currentPage || 1;
    postPerPage = postPerPage || 10;

    const totalPages = Math.ceil(total / postPerPage);
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 5) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 8;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const startIndex = (currentPage - 1) * postPerPage;
    const endIndex = Math.min(startIndex + postPerPage - 1, total - 1);
    const pages = [...Array(endPage - startPage).keys()].map(
      i => startPage + i
    );

    return {
      total: total,
      currentPage: currentPage,
      postPerPage: postPerPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  renderPagination = () => {
    const pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }
    return (
      <Fragment>
        <span
          className={`sr-pagination--btn sr-pagination--previous ${
            this.props.currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => this.setPage(this.props.currentPage - 1)}
          href="/#"
        >
          Trước
        </span>
        <div className="sr-pagination__items d-flex align-items-center">
          {pager &&
            pager.pages.map((page, index) => {
              return (
                <span
                  key={index}
                  className={`sr-pagination--item ${
                    this.props.currentPage === page ? "is-actived" : ""
                  }`}
                  onClick={() => this.setPage(page)}
                >
                  {page}
                </span>
              );
            })}
        </div>
        <span
          className={`sr-pagination--btn sr-pagination--next ${
            this.props.currentPage === pager.totalPages ? "disabled" : ""
          }`}
          onClick={() => this.setPage(this.props.currentPage + 1)}
          href="/#"
        >
          Tiếp
        </span>
      </Fragment>
    );
  };

  render() {
    console.log("state.pager: ", this.state.pager);
    return (
      <div className="rp-search-result__pagination">
        <div className="search-result__pagination-container container">
          <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
            {this.renderPagination()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
