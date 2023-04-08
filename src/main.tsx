<<<<<<< HEAD
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
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './Routes'
import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
)

>>>>>>> 63ef6da6e6485f850c5a33b847658fddbe3da1fd
