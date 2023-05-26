import React, { useState } from "react";
import "./DataView.css";
import RawDataView from "../rawDataView/RawDataView";
import GetResources from "../getResources/GetResources";
import GetApplications from "../getApplications/GetApplications";
import Details from "../details/Detils";

function Layout() {
  const [activeButton, setActiveButton] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // Initialize selectedItem as null

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setSelectedItem(null); // Reset selectedItem when changing the active button
  };

  const handleApplicationClick = (application) => {
    setSelectedItem(application); // Set the selected application
  };

  const getComponent = () => {
    switch (activeButton) {
      case "rawData":
        return <RawDataView />;
      case "applications":
        return (
          <React.Fragment>
            {selectedItem ? (
              <Details
                name="Application"
                path={`applications/${selectedItem}`}
              />
            ) : (
              <GetApplications
                handleApplicationClick={handleApplicationClick}
              />
            )}
          </React.Fragment>
        );
      case "resources":
        return (
          <React.Fragment>
            {selectedItem ? (
              <Details name="Resources" path={`resources/${selectedItem}`} />
            ) : (
              <GetResources handleApplicationClick={handleApplicationClick} />
            )}
          </React.Fragment>
        );
      default:
        return <RawDataView />;
    }
  };

  return (
    <div className="layout">
      <nav className="header">
        <button
          className={
            activeButton === "rawData" ? "active radius-two" : "radius-two"
          }
          onClick={() => handleButtonClick("rawData")}
        >
          Raw Data
        </button>
        <button
          className={
            activeButton === "applications" ? "active radius-two" : "radius-two"
          }
          onClick={() => handleButtonClick("applications")}
        >
          Applications
        </button>
        <button
          className={
            activeButton === "resources" ? "active radius-two" : "radius-two"
          }
          onClick={() => handleButtonClick("resources")}
        >
          Resources
        </button>
      </nav>

      <div className="">{getComponent()}</div>
    </div>
  );
}

export default Layout;
