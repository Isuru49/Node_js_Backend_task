// src/components/RestaurantDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRestaurant } from '../api';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const response = await getRestaurant(id);
    setRestaurant(response.data);
  };

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
      <p className="mb-2"><strong>Address:</strong> {restaurant.address}</p>
      <p className="mb-8"><strong>Telephone:</strong> {restaurant.telephone}</p>
      <Link to={`/edit/${restaurant._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded">Update</Link>
      <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Back</Link>
    </div>
  );
}

export default RestaurantDetails;
