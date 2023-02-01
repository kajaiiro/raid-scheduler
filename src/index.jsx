import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

ReactDOM.render(
    <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);
