// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import CreateRestaurant from './components/CreateRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/create" element={<CreateRestaurant />} />
          <Route path="/edit/:id" element={<UpdateRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
