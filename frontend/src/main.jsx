import React from "react";
import ReactDOM from "react-dom/client";

// ⭐ Chakra UI ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/global.css";
import theme from "@/theme";

// 🐦 Components ->
import Layout from "@/components/layout";

// 🌱 React Router ->
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 📦 Pages ->
import Home from "@/pages/index";
import Category from "@/pages/category";
import Error404 from "@/pages/404";
import Movie from "@/pages/movie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
