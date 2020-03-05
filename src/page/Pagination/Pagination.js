import React, { Component, Fragment } from "react";


export class Pagination extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }
  onPaginate(number) {
    console.log('number ne: ', number);
    
    this.props.paginate(number);
  }


  renderPagination = () => {
    const { currentPage, total, postPerPage } = this.props;

    if(total <= 10) { 
        return null;
    }

    // const range = [];
    // for (let i = 0; i < Math.ceil(total / postPerPage); ++i) {
    //   range.push(i);
    // }
    // console.log('rang ne: ', range);
    

    const pageNumber = [];
    if (total !== null) {
      for (let i = 1; i <= Math.ceil(total / postPerPage); i++) {
        pageNumber.push(i);
      }
    }

    
    return (
      <Fragment>
        <span className="sr-pagination--btn sr-pagination--previous" href="/#">
          Trước
        </span>
        <div className="sr-pagination__items d-flex align-items-center">
          {pageNumber &&
            pageNumber.slice(0,6).map(number => {
              return (
                <span
                  key={number}
                  className={`sr-pagination--item ${currentPage === number &&
                    "is-actived"}`}
                  onClick={() => this.onPaginate(number)}
                >
                  {number}
                </span>
              );
            })}
        </div>
        <span className="sr-pagination--btn sr-pagination--next" href="/#">
          Tiếp
        </span>
      </Fragment>
    );
  };

  render() {
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
