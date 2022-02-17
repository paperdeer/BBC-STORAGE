import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./modules/redux/store";
import Router from './router'
import GlobalStyle from './style/global'

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle/>
      <Router/>
    </Provider>
  );
}

export default App;
