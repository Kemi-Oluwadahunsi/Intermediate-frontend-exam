import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GitHubProvider } from "./hooks/GithubContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <GitHubProvider>
          <App />
        </GitHubProvider>
      </BrowserRouter>{" "}
    </ErrorBoundary>
  </React.StrictMode>
);
