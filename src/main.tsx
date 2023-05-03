import React from "react";
import ReactDOM from "react-dom/client";

import "@/reset.scss";
import "@/global.scss";
import "@/colors.scss";

import App from "./app.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
