import logo from './logo.svg';
import './App.css';


import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Project Expert
        </p>
        <a
          className="App-link" 
          target="_blank"
          rel="noopener noreferrer"
        > 
        </a>
      </header>
    </div>
  );
}

export default App;
