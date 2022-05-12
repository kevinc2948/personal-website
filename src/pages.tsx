import { Route, Routes } from "react-router-dom";

import Contact from "./pages/contact";
import Home from "./pages/home";

const Pages = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Pages;
