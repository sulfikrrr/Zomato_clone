import React from 'react';

const restaurantData = [
  { id: 1, name: "Foodie's Delight", cuisine: "Italian", rating: 4.5 },
  { id: 2, name: "Spice Symphony", cuisine: "Indian", rating: 4.7 },
  { id: 3, name: "Sushi Haven", cuisine: "Japanese", rating: 4.8 },
  { id: 4, name: "Burger Bliss", cuisine: "American", rating: 4.3 },
  { id: 5, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.6 }
];

const RestaurantList = () => {
  return (
    <div className="restaurantList">
      <h2>Restaurants</h2>
      <ul>
        {restaurantData.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Rating: {restaurant.rating} ⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
