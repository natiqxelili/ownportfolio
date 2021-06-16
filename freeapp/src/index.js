import './assets/css/animate.min.css';
import './assets/css/paper.css';
import './assets/css/tailwind.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { initStore } from "./redux/store";

import App from "./containers/App";

if (document.getElementById("root")) {
  ReactDOM.render(
    <Provider store={initStore}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}
