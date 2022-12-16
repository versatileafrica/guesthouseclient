import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "owlcarousel/dist/assets/owl.carousel.min.css";
// import "owlcarousel/dist/assets/owl.theme.default.min.css";
// import "jquery/dist/jquery.min.js";
// import "owlcarousel/dist/owl.carousel.min.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "jquery/dist/jquery.min.js";
// import "slick-carousel/slick/slick.min.js";
import "swiper/css/bundle";

import "./index.css";


//redux
import { Provider } from "react-redux";
import store from "./store/store";

// $ionicPlatform.registerBackButtonAction(function (event) {
//   if($state.current.name=="app.home"){
//     navigator.app.exitApp(); //<-- remove this line to disable the exit
//   }
//   else {
//     navigator.app.backHistory();
//   }
// }, 100);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
