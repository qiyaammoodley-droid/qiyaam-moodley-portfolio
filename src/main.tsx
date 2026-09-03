import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { PortfolioProvider } from "./context/PortfolioContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PortfolioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PortfolioProvider>
    </Provider>
  </React.StrictMode>
);
