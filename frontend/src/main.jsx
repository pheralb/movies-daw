import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ⭐ Chakra UI ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/global.css";
import theme from "@/theme";

// 🐦 Components ->
import Layout from "@/components/layout";

// 🌱 React Router ->
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 📦 Pages ->
import Catalogo from "@/pages/catalogo";
import Error404 from "@/pages/404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
