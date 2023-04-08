import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesApp } from "./Routes/RoutesApp";
import { Theme } from "./Context/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <RoutesApp />
    </Theme>
  </React.StrictMode>
);
