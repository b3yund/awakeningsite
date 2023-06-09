// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';

const AddProducts = () => {
  // State variables to store form inputs
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');

  // Function to handle form submit
  const handleAddProducts = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('color', color);
    formData.append('details', details);
    formData.append('price', price);
    formData.append('image', image);
  
    try {
      await axios.post('http://localhost:8000/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added successfully');
      // Reset form inputs
      setTitle('');
      setColor('');
      setDetails('');
      setImage(null);
      setPrice(null);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  // Render the component
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProducts}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;


       



{/*
import { storage, fs } from '../../../config/config.js';
*/}
