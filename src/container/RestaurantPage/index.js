import { Route, useParams } from "react-router-dom";
import { data } from 'container/Restaurants/restaurants.js';
import React, { useState, useEffect } from 'react';

export default function Search(props) {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    if (data.restaurants.length > 0) {
      // const result = data.restaurants.filter((item) => item.id == id);
      const result = data.restaurants.find((item) => item.id == id);
      setRestaurantData(result);
      console.log('test', result);
    }
  }, [data]);

  return (
    <main style={{ padding: "1rem 0" }}>
      {restaurantData && <h2>Restaurant Page of {restaurantData.name}</h2>}
    </main>
  );
}
