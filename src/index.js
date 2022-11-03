import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Layout/Navbar/Navbar"
import Footer from "./components/Layout/Footer/Footer"


ReactDOM.render(
  <BrowserRouter>
    {/* <Layout> */}
    <Navigation />
      <App />
    <Footer />
    {/* </Layout> */}
  </BrowserRouter>,
  document.getElementById('root')
);