import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import ListArticle from './ListArticle';
import Profile from './Profile';



  ReactDOM.render(
  <React.StrictMode>
    <Profile/>
<ListArticle /> 
  </React.StrictMode>, 
  document.getElementById('root')
 
);
 
 

reportWebVitals(sendToVercelAnalytics);
