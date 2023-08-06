import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ dataPerPage, totalData, paginate }) {
  const pageCount = Math.ceil(totalData / dataPerPage);

  const handlePageChange = (selectedPage) => {
    const selected = selectedPage.selected + 1;
    paginate(selected);
  };

  return (
    <div>
      <nav className="flex items-center space-x-2">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={
            "text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          }
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={
            "w-10 h-10 text-gray-500 hover:text-purple-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          }
          previousClassName={
            "text-purple-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          }
          nextClassName={
            "text-purple-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          }
        />
      </nav>
    </div>
  );
}
