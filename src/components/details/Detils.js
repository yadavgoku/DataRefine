import React, { useEffect, useState } from "react";
import TableView from "../../reUsableComponents/js/Table";
import "./Details.css";
import { fetchData } from "../../reUsableComponents/js/ApiHandler";
import Pagination from "../../reUsableComponents/js/Pagination";

const Details = ({ name, path }) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async (api) => {
      const fetchedData = await fetchData(api);
      setData(fetchedData);
    };

    fetchDataFromAPI(`https://engineering-task.elancoapps.com/api/${path}`);
  }, [path, name]);

  return (
    <div className="info">
      <h3>{name} Info</h3>
      <div>
        <TableView data={[...currentData]} />
        <Pagination
          items={data}
          setCurrentItems={setCurrentData}
          perPage={100}
        />
      </div>
    </div>
  );
};

export default Details;
