// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants, deleteRestaurant } from '../api';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await getRestaurants();
    setRestaurants(response.data);
  };

  const handleDelete = async (id) => {
    await deleteRestaurant(id);
    fetchRestaurants();
  };

  return (
    <div>
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-8">Restaurants</h1>
      </div>
      <div class="text-center">
      <Link to="/create" className="bg-blue-500 text-white px-3 py-2 rounded">Add Restaurant</Link>
      </div>
      <div className="mt-4">
        {restaurants.map(restaurant => (
          <div key={restaurant._id} className="border-b py-2 flex justify-between mb-4">
            <Link to={`/restaurants/${restaurant._id}`} className="text-blue-500">{restaurant.name}</Link>
            <button onClick={() => handleDelete(restaurant._id)} className="bg-red-500 text-white px-3 py-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
