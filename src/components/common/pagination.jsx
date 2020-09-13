import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import _ from "lodash";

const PagePagination = ({ itemCount, pageSize }) => {
  const pageCount = itemCount / pageSize;
  const pages = _.range(1, pageCount + 1);
  return <Pagination count={pages.length} shape="rounded" size="large" />;
};

export default PagePagination;
