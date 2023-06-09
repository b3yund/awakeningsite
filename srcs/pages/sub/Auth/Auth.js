import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <h1>Welcome to Auth Page</h1>
      <p>Please choose an option:</p>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/">Go Back Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Auth;
