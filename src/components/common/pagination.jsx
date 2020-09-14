import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import _ from "lodash";
import PropTypes from "prop-types";

const PagePagination = ({ itemCount, pageSize, handlePageChange }) => {
  const pageCount = itemCount / pageSize;
  const pages = _.range(1, pageCount + 1);
  const { length: count } = pages;

  return count > 1 ? (
    <Pagination
      count={count}
      shape="rounded"
      size="large"
      onChange={(event, page) => handlePageChange(page)}
    />
  ) : null;
};

PagePagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default PagePagination;
