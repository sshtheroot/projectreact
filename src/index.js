import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message';
import App from './App';
import Data from './Data';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <Message /> <App/> <Data/>
  </React.StrictMode>,
  document.getElementById('root')
 
);
 

reportWebVitals(sendToVercelAnalytics);
