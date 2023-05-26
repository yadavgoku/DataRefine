import React, { useEffect, useState } from "react";
import "./GetApplicationsStyles.css";
import Pagination from "../../reUsableComponents/js/Pagination";
import Search from "../../reUsableComponents/js/Search";
import { fetchData } from "../../reUsableComponents/js/ApiHandler";
import appImage from "./images/app.jpg";

const GetApplications = ({ handleApplicationClick }) => {
  const [applications, setApplications] = useState([]);
  const [currentApplicatios, setCurrentApplications] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchDataFromAPI = async (api) => {
      const fetchedData = await fetchData(api);
      setApplications(fetchedData);
    };

    fetchDataFromAPI(
      "https://engineering-task.elancoapps.com/api/applications"
    );
  }, []);

  return (
    <div className="outer">
      <h4>Applications</h4>
      <Search items={applications} setCurrentItems={setCurrentApplications} />
      <div className="applications-wrapper">
        {currentApplicatios.map((app, index) => (
          <div
            key={index}
            className="app-card"
            onClick={() => handleApplicationClick(app)}
          >
            <img src={appImage} alt={app} className="app-img" />
            <div className="app-card-body">
              <h4 className="app-card-title">{app}</h4>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        items={[...applications]}
        setCurrentItems={setCurrentApplications}
        perPage={8}
      />
    </div>
  );
};

export default GetApplications;
