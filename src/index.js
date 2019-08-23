import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import postReducer from "./Reducers/postReducer";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// const store = createStore(postReducer);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
