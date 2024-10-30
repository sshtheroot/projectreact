import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import ListArticle from './ListArticle';
import Profile from './Profile';
import NavBar from './NavBar';
import BasicInfo from './BasicInfo'; 
 import Login from './Login'
 



  ReactDOM.render(
  <React.StrictMode> 
    <NavBar />
 
    <Profile /> <BasicInfo />  <Login /> 
 <ListArticle />   
  </React.StrictMode>, 
  document.getElementById('root')
 
);
 
 

reportWebVitals(sendToVercelAnalytics);
