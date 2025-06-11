import Link from "antd/es/typography/Link";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import MyComponents from "./components/MyComponents";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<MyComponents />} />
        <Route path="/page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
