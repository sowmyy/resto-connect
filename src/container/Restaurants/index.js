import React, { useState, useReducer, useEffect } from 'react';
import { data } from './restaurants.js';
import { RestaurantsContainer, RestaurantStyles } from './styles';
import RestaurantCard from 'components/RestaurantCard';
import Loader from 'components/Loader';
import GoogleMapMarkers from 'components/GoogleMapMarkers';
import { addToLocalStorage } from 'utils/helpers.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const initialState = {
  data: data.restaurants,
  searchTerm: ""
};

const sortList = [
  {
    label:'Name',
    key: '1',
  },
  {
    label: 'Rating',
    key: '2',
  },
  {
    label: 'Most Commented',
    key: '3',
  },
  {
    label: 'Most Viewed',
    key: '4',
  }
];

const ratingList = [
  {
    label: '2',
    key: '1'
  },
  {
    label: '3',
    key: '2'
  },
  {
    label: '4',
    key: '3'
  },
]

function reducerFn(state, action) {
  switch (action.type) {
    case "CREATE_RESTAURANT": {
      const newState = { ...state };
      newState.data = [...newState.data, action.payload.newRestaurant];
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

function Restaurants() {
  const [isPureVeg, setIsPureVeg] = useState(false);
  const [dataState, dispatch] = useReducer(reducerFn, initialState);
  const [selectedSort, setSelectedSort] = useState('Name');
  const [selectedRating, setSelectedRating] = useState('3');
  const [resetAll, setResetAll] = useState(false);

  const resetAllFunction = () => {
    setResetAll(true);
    setIsPureVeg(false);
  }

  const onChangeRatingValue = (e) => {
    setSelectedRating(e.value);
    dispatch({
      type: "FILTER_BY_RATING",
      payload: {
        rating: Number(e.value)
      }
    });
  }

  const onChangeSortValue = (e) => {
    setSelectedSort(e.value);
    if (e.value == 'Name') {
      dispatch({
        type: "SORT_BY_NAME",
        payload: {
          sortType: 'asc'
        }
      })
    } else if (e.value == 'Rating') {
      dispatch({
        type: "SORT_BY_RATING",
        payload : {
          sortType: 'desc'
        }
      })
    }
  }

  useEffect(() => {
    if (isPureVeg) {
      const result = dataState.data.filter((item) => item.type == 'veg');
      // setRestaurantData(result);
      dispatch({
        type: 'SELECT_VEG_RESTAURANTS',
        payload: null
      })
    } else {
      dispatch({
        type: 'RESET_VEG_FILTER',
        payload: null
      })
    }
  }, [isPureVeg]);

  useEffect(() => {
    if(resetAll) {
      dispatch({
        type: 'RESET_ALL',
        payload: null
      })
    }
  }, [resetAll]);



  const createRestaurant = (obj) => {
    dispatch({
      type: "CREATE_RESTAURANT",
      payload: obj
    });
  }

  return (
    <RestaurantStyles isPureVeg={isPureVeg}>
      <div className="contentWrapper">
        <h1 className="pageTitle">Chennai Restaurants</h1>
        {/* <GoogleMapMarkers data={dataState.data} /> */}
        <div className="filters">
          <div className="label">Sort by: </div>
          <Dropdown options={sortList} onChange={onChangeSortValue} value={selectedSort} placeholder="Select an option" />
        </div>
        <div className="filters">
          <div className="label">Filter | Rating : </div>
          <Dropdown options={ratingList} onChange={onChangeRatingValue} value={selectedRating} placeholder="Select an option" />
        </div>
        <div onClick={() => setIsPureVeg(!isPureVeg)} className="filterItem">Pure Veg</div>
        <div onClick={resetAllFunction} className="filterItem reset">Reset all filters and sorts</div>
        {dataState.data.length > 0 ? <RestaurantsContainer>
          {dataState.data.map((item) => (
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
