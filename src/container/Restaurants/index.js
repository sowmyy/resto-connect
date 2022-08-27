import React, { useState, useEffect } from 'react';
import { data } from './restaurants.js';
import { RestaurantsContainer, RestaurantStyles } from './styles';
import RestaurantCard from 'components/RestaurantCard';
import Loader from 'components/Loader';
import { Dropdown, Menu, Space } from 'antd';

function Restaurants() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isPureVeg, setIsPureVeg] = useState(false);

  useEffect(() => {
    fetch('https://jsonkeeper.com/b/8C5K')
    .then((response) => response.json())
    .then((data) => {
      const loadingTime = setTimeout(() => setRestaurantData(data.restaurants), 1500);

      return () => {
        clearTimeout(loadingTime);
      };
    });
  }, []);

  useEffect(() => {
    if (isPureVeg) {
      const result = restaurantData.filter((item) => item.type == 'veg');
      setRestaurantData(result);
    } else {
      setRestaurantData(data.restaurants);
    }
  }, [isPureVeg]);

  const createRestaurant = (obj) => {
    setRestaurantData((previousState) => {
      return [...previousState, obj];
    })
  }

  return (
    <RestaurantStyles isPureVeg={isPureVeg}>
      <div className="contentWrapper">
        <h1 className="pageTitle">Chennai Restaurants</h1>
        <div className="filters">
          <div className="label">Sort by: </div>
        </div>
        <div onClick={() => setIsPureVeg(!isPureVeg)} className="filterItem">Pure Veg</div>
        {restaurantData && restaurantData.length > 0 ? <RestaurantsContainer>
          {restaurantData.map((item) => (
            <RestaurantCard
              key={item.id}
              data={item}
            />
          ))}
        </RestaurantsContainer> : <Loader />}
      </div>
    </RestaurantStyles>
  );
}

export default Restaurants;
