import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Call from "./Components/Call/Call";
import About from "./Components/About/About";
import Cv from "./Components/Cv/Cv";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} > 
          <Route path="/" element={<Body/>}/>
          <Route path="Call" element={<Call />} />
          <Route path="About" element={<About />} />
          <Route path="Cv" element={<Cv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
