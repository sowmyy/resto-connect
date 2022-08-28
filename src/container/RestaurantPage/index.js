import { Route, useParams } from "react-router-dom";
import { data } from 'container/Restaurants/restaurants.js';
import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';

export default function Search(props) {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    if (data.restaurants.length > 0) {
      // const result = data.restaurants.filter((item) => item.id == id);
      const result = data.restaurants.find((item) => item.id == id);
      setRestaurantData(result);
    }
  }, [data]);
  return (
    <div>
      {restaurantData ? <main style={{ padding: "1rem 0" }}>
        <h2>{restaurantData.name}</h2>
        <h2>Comments</h2>
        {restaurantData.feedbacks.map((item) => (
          <p key={item.id}>{item.comment}</p>
        ))}
      </main> : <Loader />}
    </div>
  );
}
