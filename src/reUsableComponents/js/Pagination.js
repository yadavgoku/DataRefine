import React, { useEffect, useState } from "react";
import "../css/Pagination.css";

const Pagination = ({ items, setCurrentItems, perPage }) => {
  console.log(items);
  const [itemsPerPage] = useState(perPage);
  const [currentPage, setCurrentPage] = useState(1);
  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  useEffect(() => {
    setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, items]);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentItems([...items.slice(indexOfFirstItem, indexOfLastItem)]);
  };
  return (
    <div className="pagination">
      <ul className="pagination-list">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div key={index} className="pagination-item">
            <button
              className={`pagination-link ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => {
                paginate(index + 1);
              }}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
