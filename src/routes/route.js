import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import PasswordChange from "../pages/settings/PasswordChange";
import Landing from "../pages/Landing";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/settings" element={<PasswordChange />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
