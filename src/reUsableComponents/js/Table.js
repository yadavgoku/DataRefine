import React, { useEffect, useState } from "react";
import "../css/TableView.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const TableView = ({ data }) => {
  console.log(data);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [filteredData, setFilteredData] = useState([...data]);
  const [columnFilters, setColumnFilters] = useState({});

  const handleSort = (column) => {
    if (sortedColumn === column) {
      // Reverse the sort order if the same column is clicked again
      setFilteredData([...filteredData].reverse());
    } else {
      // Sort the data based on the selected column
      setFilteredData(
        [...filteredData].sort((a, b) => a[column].localeCompare(b[column]))
      );
      setSortedColumn(column);
    }
  };

  const handleFilter = (event, column) => {
    const { value } = event.target;
    setColumnFilters({ ...columnFilters, [column]: value });

    const filtered = data.filter((item) => {
      // Filter the data based on the input value for the specific column
      const filterValue = value.toLowerCase();
      return String(item[column]).toLowerCase().includes(filterValue);
    });

    setFilteredData(filtered);
  };
  const camelCaseToSentenceCase = (str) =>
    str
      .replace(/([A-Z])/g, " $1")
      .trim()
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());

  const headers = Object.keys(data[0] || {});
  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  return (
    <div className="table-container">
      <div className="table-controls container">
        <div className="filter-buttons">
          {headers.map((header) => (
            <div className="input-box">
              <input
                key={header}
                type="text"
                placeholder={`Filter ${camelCaseToSentenceCase(header)}`}
                onChange={(event) => {
                  handleFilter(event, header);
                }}
                className="filter-input"
              />
            </div>
          ))}
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <span
                  onClick={() => {
                    handleSort(header);
                  }}
                  className="column-header"
                >
                  {sortedColumn === header ? (
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                  ) : null}
                  {camelCaseToSentenceCase(header)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...filteredData].map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>
                  {typeof item[header] === "object"
                    ? JSON.stringify(item[header])
                    : item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
