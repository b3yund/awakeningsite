// frontend/src/pages/main/sub/SignUp/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      await axios.post('https://b3yund.pythonanywhere.com/signup', { email, password });
      console.log('Sign up successful!');
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign up</h2>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
