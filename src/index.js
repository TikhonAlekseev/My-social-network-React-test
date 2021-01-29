import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store"
import {Provider} from "react-redux"
import firebase from "firebase";
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./Component/AuthComponent/Auth";





function render(){

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

render()



store.subscribe(render)














reportWebVitals();
