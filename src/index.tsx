import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ISWidget from "ils-js";
import WidgetOptions from "./model/widgetOptions"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var options:WidgetOptions = {
  token: "",
  email: "",
  customerId: "",
  firstName: "",
  lastName: "",
  countryCode: "",
  onClose: () => {},
  onFailed: (error) => {},
  onSuccessful: (loanId) => {}
};

ISWidget().buildWithOptions(options);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
