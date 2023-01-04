import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import{BrowserRouter as Routes,Route} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import News from './routes/News';
import Brands from './routes/Brands';
import About from './routes/About';
import Disc from './routes/Disc';
import { LogIn } from './components/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

