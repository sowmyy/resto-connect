import React, { useState, useReducer, useEffect } from 'react';
import { data } from './restaurants.js';
import { RestaurantsContainer, RestaurantStyles } from './styles';
import RestaurantCard from 'components/RestaurantCard';
import Loader from 'components/Loader';
import Map from 'components/Map';
import { addToLocalStorage } from 'utils/helpers.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  },
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
];

function Restaurants(props) {
  const [isPureVeg, setIsPureVeg] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Name');
  const [selectedRating, setSelectedRating] = useState('3');
  const [resetAll, setResetAll] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const analyticsData = JSON.parse(localStorage.getItem('analytics'));

  useEffect(() => {
    if (selectedSort == 'Name') {
      props.dispatch({
        type: "SORT_BY_NAME",
        payload: {
          sortType: 'asc'
        }
      })
    }
  }, [selectedSort]);

  let cuisinesList = [];
  props.dataState.data.map((item) => {
    item.cuisines && item.cuisines.map((cuisineItem) => {
      cuisinesList.push(cuisineItem);
    })
  });
  let cuisineListToShow = [...new Set(cuisinesList)];

  const resetAllFunction = () => {
    setResetAll(true);
    setIsPureVeg(false);
    setSelectedRating('3');
    setSelectedSort('Name');
    setSelectedCuisine(null);
  }

  const onChangeRatingValue = (e) => {
    setSelectedRating(e.value);
    props.dispatch({
      type: "FILTER_BY_RATING",
      payload: {
        rating: Number(e.value)
      }
    });
  }

  const onChangeCuisineValue = (e) => {
    setSelectedCuisine(e.value);
    props.dispatch({
      type: "FILTER_BY_CUISINE",
      payload: {
        cuisine: e.value
      }
    });
  }

  const onChangeSortValue = (e) => {
    setSelectedSort(e.value);
    if (e.value == 'Name') {
      props.dispatch({
        type: "SORT_BY_NAME",
        payload: {
          sortType: 'asc'
        }
      })
    } else if (e.value == 'Rating') {
      props.dispatch({
        type: "SORT_BY_RATING",
        payload : {
          sortType: 'desc'
        }
      })
    } else if (e.value == 'Most Viewed') {
      props.dispatch({
        type: "SORT_BY_MOST_VIEWED",
        payload : null
      })
    } else {
      props.dispatch({
        type: "SORT_BY_MOST_COMMENTED",
        payload : null
      })
    }
  }

  useEffect(() => {
    if (isPureVeg) {
      const result = props.dataState.data.filter((item) => item.type == 'veg');
      // setRestaurantData(result);
      props.dispatch({
        type: 'SELECT_VEG_RESTAURANTS',
        payload: null
      })
    } else {
      props.dispatch({
        type: 'RESET_VEG_FILTER',
        payload: null
      })
    }
  }, [isPureVeg]);

  useEffect(() => {
    if(resetAll) {
      props.dispatch({
        type: 'RESET_ALL',
        payload: null
      })
    }
  }, [resetAll]);

  const createRestaurant = (obj) => {
    props.dispatch({
      type: "CREATE_RESTAURANT",
      payload: obj
    });
  }

  return (
    <RestaurantStyles isPureVeg={isPureVeg}>
      <div className="contentWrapper">
        <h1 className="pageTitle">Chennai Restaurants</h1>
        <div className="filtersWrapper">
          <div className="filters">
            <div className="label">Sort by: </div>
            <Dropdown options={sortList} onChange={onChangeSortValue} value={selectedSort} placeholder="Select an option" />
          </div>
          <div className="filters">
            <div className="label">Filter | Rating : </div>
            <Dropdown options={ratingList} onChange={onChangeRatingValue} value={`${selectedRating}+`} placeholder="Select an option" />
          </div>
          {cuisineListToShow && cuisineListToShow.length > 0 && <div className="filters">
            <div className="label">Cuisines : </div>
            <Dropdown options={cuisineListToShow} onChange={onChangeCuisineValue} value={selectedCuisine} placeholder="Select an option" />
          </div>}
          <div onClick={() => setIsPureVeg(!isPureVeg)} className="filterItem">Pure Veg</div>
          <div onClick={resetAllFunction} className="filterItem reset">Reset all filters and sorts</div>
        </div>
        <Map data={props.dataState.data}/>
        {props.dataState.data.length > 0 ? <RestaurantsContainer>
          {props.dataState.data.map((item, index) => (
            <RestaurantCard
              key={item.id}
              data={item}
              index={index}
            />
          ))}
        </RestaurantsContainer> : <Loader />}
      </div>
    </RestaurantStyles>
  );
}

export default Restaurants;
