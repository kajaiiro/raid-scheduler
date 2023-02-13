import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navigation from './components/Layout/Navbar';
import './index.css';
import Router from './Router';

ReactDOM.render(
    <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);
