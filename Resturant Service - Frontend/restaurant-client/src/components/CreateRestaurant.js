// src/components/CreateRestaurant.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRestaurant } from '../api';

function CreateRestaurant() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRestaurant({ name, address, telephone });
    navigate('/');
  };

  return (
    <div className='flex justify-center items-start min-h-screen pt-8'>
     <div className='text-center border border-gray-600 rounded pt-4 pb-10 px-40 inline-block'>
      <h1 className="text-3xl font-bold mb-8">Create Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-xl block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-1 border border-gray-900 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-xl block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full p-1 border border-gray-900 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-xl block text-gray-700">Telephone</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 block w-full p-1 border border-gray-900 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded mt-8">Save</button>
      </form>
     </div>
    </div>
  );
}

export default CreateRestaurant;
