import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Main Pages
import Main from './pages/main/Main/Main.js';
import Products from './pages/main/Products/Products.js';
import Cart from './pages/main/Cart/Cart.js';

// Sub Pages
import Auth from './pages/sub/Auth/Auth.js';
import AddProducts from './pages/sub/AddProducts/AddProducts.js';
import Login from './pages/sub/Login/Login.js';
import SignUp from './pages/sub/SignUp/SignUp.js';
import CheckoutWrapper from './pages/sub/Checkout/Checkout';

// Components

export default function App() {
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      localStorage.setItem('userId', ''); // Set an empty value if userId is not present
    }
  }, []);

{/*const stripePromise = loadStripe('pk_test_51N9va6BN4zP2cNNUC13AU2YRhukbIX01xUKoggNBsdxpbyR1KJKGL5AbcUwgBaAN2iofOpxn8S1gUO8uyZm2hBNH00Heo0LJxF');*/}

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={localStorage.getItem('userId') !== '' ? (<Cart />) : (<Navigate to="/auth" />)}/>
        <Route path="auth" element={<Auth />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="addproducts" element={<AddProducts />} />
        <Route path="checkout" element={<CheckoutWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
