import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import DataView from "../components/dataView/DataView";
import RawDataView from "../components/rawDataView/RawDataView";
import GetApplications from "../components/getApplications/GetApplications";
import GetResources from "../components/getResources/GetResources";
import Details from "../components/details/Detils";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/raw-data-view" element={<RawDataView />} />
      <Route path="/data-view" element={<DataView />} />
      <Route path="/applications" element={<GetApplications />} />
      <Route path="/resources" element={<GetResources />} />
      <Route path="/:name/:id" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
