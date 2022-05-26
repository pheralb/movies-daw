import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app";

// 🌱 BrowserRouter ->
import { BrowserRouter as Router } from "react-router-dom";

// 🛩️ React Query ->
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
