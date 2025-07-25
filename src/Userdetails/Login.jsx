import React, { useState } from 'react';

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const settingDetails = () => {
    onLogin(username, password); 
  };

  return (
    <div>
      <input
        className='Username'
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='Password'
        type='text'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='Login' onClick={settingDetails}>
        Login
      </button>
    </div>
  );
};