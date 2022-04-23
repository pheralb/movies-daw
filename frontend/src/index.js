import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 🎨 Global styles ->
import "styles/global.scss";

// 🌱 React Router ->
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 📦 Pages ->
import Catalogo from "pages/catalogo";
import Error404 from "pages/404";

// 🎨 Layout ->
import Layout from "components/layout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
