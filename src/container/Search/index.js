import React, { useState, useEffect } from 'react';
import { SearchStyles, SearchBar, ListCard } from './styles.js';
import { BsSearch } from "react-icons/bs";
import { GrClose } from 'react-icons/gr';
import { data } from 'container/Restaurants/restaurants.js';
import coverImg from 'images/cover.jpg';
import Rating from 'components/Rating';
import Loader from 'components/Loader';
import { addToSearchAnalytics } from 'utils/helpers';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataToShow, setDataToShow] = useState(data.restaurants);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchRestaurants(searchTerm);
    } else if (searchTerm.length == 0) {
      setDataToShow(data.restaurants);
    }
  }, [searchTerm]);

  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 4) {
      addToSearchAnalytics(event.target.value);
    }
  }

  const clearSearchTerm = () => {
    setSearchTerm('');
  }

  const searchRestaurants = (searchTerm) => {
    const result = data.restaurants.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDataToShow(result);
  }
  return (
    <SearchStyles>
      <div className="contentWrapper">
        <h2 className="pageTitle">Search</h2>
        <div className="inputWrapper">
          <SearchBar autoFocus value={searchTerm} onChange={changeSearchTerm} type="text" placeholder="Search for restaurants" />
          {searchTerm.length > 0 ? <GrClose onClick={clearSearchTerm} className="icon" /> : <BsSearch onClick={searchRestaurants} className="icon" />}
        </div>
        {dataToShow.length > 0 ?
          dataToShow.map((item) => (
            <ListCard key={item.id}>
              <img className="cardCoverImg" src={coverImg} />
              <div>
                <div className="titleWrapper">
                  <h2 className="title">{item.name}</h2>
                  <Rating data={item.rating} />
                </div>
                <p className="desc">{item.description}</p>
                {item.cuisines && <ul>
                  {item.cuisines.map((cuisineItem, index) => (
                    <li className="listItem">{cuisineItem}{index + 1 == item.cuisines.length ? '' : ','}&nbsp;</li>
                  ))}
                </ul>}
              </div>
            </ListCard>
          ))
        : (searchTerm.length > 0 && dataToShow.length == 0) ? <Loader noResults/> : <Loader />}
      </div>
    </SearchStyles>
  );
}
