import { FaUserDoctor } from "react-icons/fa6";

import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "./pages/Home";
import { Faq } from "./pages/Faq";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
