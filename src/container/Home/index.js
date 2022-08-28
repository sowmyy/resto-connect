import React, { useState, useEffect, useReducer } from 'react';
import { data } from 'container/Restaurants/restaurants.js';
import Loader from 'components/Loader';
import Restaurants from 'container/Restaurants';
import RestaurantPage from 'container/RestaurantPage';
import Dashboard from 'container/Dashboard';
import Search from 'container/Search';
import App from '../../App.js';
import { getRandomInt } from 'utils/helpers';
import { addAnalyticsData } from 'utils/helpers';
import { HomeStyles } from './styles';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const initialState = {
  data: data.restaurants,
  searchTerm: ""
};

function reducerFn(state, action) {
  switch (action.type) {
    case "CREATE_RESTAURANT": {
      const newState = { ...state };
      newState.data = [...newState.data, action.payload.newRestaurant];
      return newState;
    }
    case "ADD_COMMENT": {
      const newState = { ...state };
      const data = {
        id: getRandomInt(1000),
        comment: action.payload.comment
      };
      newState.data = newState.data.map((item) => {
        if (action.payload.restId == item.id) {
          item.feedbacks = [...item.feedbacks, data]
        }
        return item;
      })
      return newState;
    }
    case "ADD_ANALYTICS": {
      const newState = {...state };
      newState.data = newState.data.map((item) => {
        action.payload.map((dataItem) => {
          if (item.id == dataItem.restaurantId) {
            item.clickCount = dataItem.clickCount;
            item.commentCount = dataItem.commentCount;
          }
        })
        if (!item.clickCount) {
          item.clickCount = 0;
        }
        if (!item.commentCount) {
          item.commentCount = 0;
        }
        return item;
      })
      return newState;
    }
    case "UPDATE_RESTAURANT": {
      const newState = { ...state };
      newState.data = newState.data.map((restaurant) => {
        if (restaurant.id === action.payload.id) {
          return action.payload.data;
        }
        return restaurant;
      });
      return newState;
    }
    case "RESET_ALL": {
      const newState = { ...state };
      newState.data = data.restaurants;
      return newState;
    }
    case "SORT_BY_NAME": {
      const newState = { ...state };
      newState.data.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);
      return newState;
    }
    case "SORT_BY_RATING": {
      const newState = { ...state };
      newState.data.sort((a, b) => (b.rating > a.rating) ? 1 : (a.rating > b.rating) ? -1 : 0);
      return newState;
    }
    case "SORT_BY_MOST_VIEWED": {
      const newState = { ...state };
      newState.data.sort((a, b) => (b.clickCount > a.clickCount) ? 1 : (a.clickCount > b.clickCount) ? -1 : 0);
      console.log('newState', newState);
      return newState;
    }
    case "SORT_BY_MOST_COMMENTED": {
      const newState = { ...state };
      newState.data.sort((a, b) => (b.commentCount > a.commentCount) ? 1 : (a.commentCount > b.commentCount) ? -1 : 0);
      return newState;
    }
    case "SELECT_VEG_RESTAURANTS": {
      const newState = { ...state };
      newState.data = newState.data.filter((item) => item.type == 'veg');
      return newState;
    }
    case "RESET_VEG_FILTER": {
      const newState = { ...state };
      newState.data = data.restaurants;
      return newState;
    }
    case "FILTER_BY_RATING": {
      const newState = { ...state };
      newState.data = data.restaurants;
      newState.data = newState.data.filter(
        (restaurant) => restaurant.rating >= action.payload.rating
      );
      // newState.filters.push({
      //   type: action.type,
      //   value: action.payload.rating
      // });
      return newState;
    }
    case "FILTER_BY_CUISINE": {
      const newState = { ...state };
      newState.data = data.restaurants;
      newState.data = newState.data.filter(
        (restaurant) => restaurant.cuisines.find((item) => item == action.payload.cuisine) ? true : false
      );
      return newState;
    }

    case "SEARCH_BY_NAME": {
      const newState = { ...state };
      newState.data = newState.data.filter((restaurant) =>
        restaurant.includes(action.payload.searchTerm)
      );
      return newState;
    }
    default:
      return state;
  }
}
export default function Home() {
  const [dataState, dispatch] = useReducer(reducerFn, initialState);
  const [selectedTab, setSelectedTab] = useState('restaurants');

  const analyticsData = JSON.parse(localStorage.getItem('analytics'));
  const redirectTo = (type) => {
    if (type) {
      addAnalyticsData(type);
      if (type == 'listingPageCount') {
        setSelectedTab('restaurants');
      } else {
        setSelectedTab('search');
      }
    } else {
      setSelectedTab('dashboard');
    }
  }
  useEffect(() => {
    if (analyticsData && analyticsData.length > 0) {
      dispatch({
        type: 'ADD_ANALYTICS',
        payload: analyticsData
      });
    }
  }, []);

  return (
    <HomeStyles>
      <BrowserRouter>
        <div className="linkWrapper">
          <Link className={selectedTab == 'restaurants' ? "link selected" : "link"} to="/restaurants" onClick={() => redirectTo('listingPageCount')}>Restaurants</Link>
          <Link className={selectedTab == 'dashboard' ? "link selected" : "link"} to="/dashboard" onClick={() => redirectTo('')}>Dashboard</Link>
          <Link className={selectedTab == 'search' ? "link selected" : "link"} to="/search" onClick={() => redirectTo('searchPageCount')}>Search</Link>
        </div>
          <Routes>
            <Route path="/" element={<Restaurants dataState={dataState} dispatch={dispatch} />} />
            <Route path="dashboard" element={<Dashboard dataState={dataState} />} />
            <Route path="restaurants" element={<Restaurants dataState={dataState} dispatch={dispatch}/>} />
            <Route path="restaurant/:id" element={<RestaurantPage dataState={dataState} dispatch={dispatch}/>} />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </HomeStyles>
  );
}
