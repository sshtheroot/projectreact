import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message'; 
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

  ReactDOM.render(
  <React.StrictMode>
<Message />
  </React.StrictMode>, 
  document.getElementById('root')
 
);
 
 

reportWebVitals(sendToVercelAnalytics);
