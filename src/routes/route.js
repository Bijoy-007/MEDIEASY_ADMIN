import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
