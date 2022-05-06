import React from "react";

// ⭐ Chakra UI ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/global.css";
import theme from "@/theme";

// 🐦 Components ->
import Layout from "@/components/layout";

// 🌱 React Router ->
import { Routes, useLocation, Route } from "react-router-dom";

// 💥 Framer motion ->
import { AnimatePresence } from "framer-motion";

// 📦 Pages ->
import Home from "@/pages/index";
import Category from "@/pages/category";
import Search from "@/pages/search";
import Error404 from "@/pages/404";
import Movie from "@/pages/movie";

const App = () => {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/search/:name" element={<Search />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
