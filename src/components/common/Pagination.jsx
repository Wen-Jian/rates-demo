import React from "react";
import style from "../../styles/list.module.scss";

const Pagination = ({
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
  pageSizeList,
  totalCount,
}) => {
  const pageSizeHandler = (val) => {
    setPageSize(val);
  };

  return (
    <div className={`${style.pagination_wrapper} ${style.content_font_size}`}>
      <div className={`${style.layout}`}>
        <div className={`${style.pagination_container}`}>
          <label>Rows Per Page</label>
          <select
            value={pageSize}
            onChange={(e) => pageSizeHandler(Number(e.target.value))}
            className={`${style.content_font_size}`}
          >
            {pageSizeList.map((val, index) => {
              return (
                <option key={index} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
          <span>
            {Number(currentPage) * Number(pageSize) + 1} -{" "}
            {(currentPage + 1) * pageSize} of {totalCount}
          </span>
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"<"}
          </button>
          <button
            disabled={currentPage === Math.round(totalCount / pageSize)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
