import React from "react";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;


  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  const onFirstPage = () => {
    onPageChange(1);
  };

  const onLastPage = () => {
    onPageChange(lastPage);
  }


  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div>
            <p className="mb-sm-0">
              Total {totalCount} entries
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="float-sm-end">
            <ul className="pagination mb-sm-0">
              <li
                className={`page-item ${currentPage === 1 ? `disabled` : ""}`}
                onClick={currentPage === 1 ? `disabled` : onFirstPage}
              >
                <span className="page-link">
                  <i className={`fa fa-angle-double-left`}></i>
                </span>
              </li>
              <li
                className={`page-item ${currentPage === 1 ? `disabled` : ""}`}
                onClick={currentPage === 1 ? `disabled` : onPrevious}
              >
                <span className="page-link">
                  <i className={`fa fa-angle-left`}></i>
                </span>
              </li>
              {paginationRange.map((pageNumber) => {
                return (
                  <li
                    className={`page-item
              ${pageNumber === currentPage ? `active` : ""}`}
                    onClick={() => onPageChange(pageNumber)}
                  >
                    <span className="page-link">
                      {pageNumber}
                    </span>
                  </li>
                );
              })}
              <li
                className={`page-item ${currentPage === lastPage ? `disabled` : ""}`}
                onClick={currentPage === lastPage ? `disabled` : onNext}
              >
                <span className="page-link">
                  <i className={`fa fa-angle-right`}></i>
                </span>
              </li>

              <li
                className={`page-item ${currentPage === lastPage ? `disabled` : ""}`}
                onClick={currentPage === lastPage ? `disabled` : onLastPage}
              >
                <span className="page-link">
                  <i className={`fa fa-angle-double-right`}></i>
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
