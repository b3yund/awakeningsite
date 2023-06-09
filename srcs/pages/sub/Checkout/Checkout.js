import React, { useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const Checkout = ({ total }) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request to the checkout endpoint
      const response = await axios.post('/checkout', { total });

      if (response.status === 200) {
        // Payment successful
        setPaymentSuccess(true);
      } else {
        // Payment error
        setPaymentError(response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setPaymentError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total}</p>

      <form onSubmit={handlePayment}>
        {/* Add your checkout form fields here */}
        {/* e.g., name, email, address, card details, etc. */}

        <button type="submit">Pay Now</button>
      </form>

      {paymentError && <p>Error: {paymentError}</p>}
      {paymentSuccess && <p>Payment Successful!</p>}
    </div>
  );
};

const CheckoutWrapper = ({ total }) => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout total={total} />
    </Elements>
  );
};

export default CheckoutWrapper;

