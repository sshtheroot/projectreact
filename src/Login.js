import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://92a0-49-207-193-14.ngrok-free.app/login', { userName, password });
          
            alert('Login successful');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
