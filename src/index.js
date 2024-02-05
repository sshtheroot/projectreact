import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message'; 
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Data from './Data';
import Rabbitmessage from './rabbitmessage';

  ReactDOM.render(
  <React.StrictMode>
<Data />
  </React.StrictMode>, 
  document.getElementById('root')
 
);
 
 

reportWebVitals(sendToVercelAnalytics);
