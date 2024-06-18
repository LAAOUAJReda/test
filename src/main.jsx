import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import SingleUser from "./Pages/SingleUser.jsx";
import NotFound from "./Pages/NotFound.jsx";
import NewUser from "./Pages/NewUser.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<NewUser />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
