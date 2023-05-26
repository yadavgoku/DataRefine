import React, { useEffect, useState } from "react";
import "./GetResourcesStyles.css";
import resourceImage from "./images/resource.png";
import Pagination from "../../reUsableComponents/js/Pagination";
import Search from "../../reUsableComponents/js/Search";
import { fetchData } from "../../reUsableComponents/js/ApiHandler";

const GetResources = ({ handleApplicationClick }) => {
  const [resources, setResources] = useState([]);
  const [currentResources, setCurrentResources] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchDataFromAPI = async (api) => {
      const fetchedData = await fetchData(api);
      setResources(fetchedData);
    };

    fetchDataFromAPI("https://engineering-task.elancoapps.com/api/resources");
  }, []);

  return (
    <div className="outer">
      <h4>Resources</h4>
      <Search items={resources} setCurrentItems={setCurrentResources} />
      <div className="resources-wrapper">
        {currentResources.map((resource, index) => (
          <div
            key={index}
            className="resource-card"
            onClick={() => handleApplicationClick(resource)}
          >
            <img src={resourceImage} alt={resource} className="resource-img" />
            <div className="resource-card-body">
              <h4 className="resource-card-title">{resource}</h4>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        items={resources}
        setCurrentItems={setCurrentResources}
        perPage={8}
      />
    </div>
  );
};

export default GetResources;
