// src/components/EditRestaurant.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurant, updateRestaurant } from '../api';

function UpdateRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await getRestaurant(id);
      setName(response.data.name);
      setAddress(response.data.address);
      setTelephone(response.data.telephone);
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRestaurant(id, { name, address, telephone });
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Update Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telephone</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-3 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
