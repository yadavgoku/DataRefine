import React, { useEffect, useState } from "react";
import TableView from "../../reUsableComponents/js/Table";
import "./RawDataView.css";
import { fetchData } from "../../reUsableComponents/js/ApiHandler";
import Pagination from "../../reUsableComponents/js/Pagination";

const RawDataView = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async (api) => {
      const fetchedData = await fetchData(api);
      setData(fetchedData);
    };
    fetchDataFromAPI("https://engineering-task.elancoapps.com/api/raw");
  }, []);

  return (
    <div>
      <h3>Raw Data View</h3>
      <div>
        <TableView data={[...currentData]} />
        <Pagination
          items={data}
          setCurrentItems={setCurrentData}
          perPage={500}
        />
      </div>
    </div>
  );
};

export default RawDataView;
