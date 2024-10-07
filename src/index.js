import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global CSS styles
import App from "./App"; // Main App component
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// Create root and render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Function to log and analyze web vitals, helpful for performance monitoring
reportWebVitals();
