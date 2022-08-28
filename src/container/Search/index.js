import React, { useState, useEffect } from 'react';
import { SearchStyles, SearchBar, ListCard } from './styles.js';
import { BsSearch } from "react-icons/bs";
import { GrClose } from 'react-icons/gr';
import { data } from 'container/Restaurants/restaurants.js';
import coverImg from 'images/cover.jpg';
import Rating from 'components/Rating';
import Loader from 'components/Loader';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataToShow, setDataToShow] = useState(data.restaurants);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setDataToShow(searchRestaurants(searchTerm));
    } else if (searchTerm.length == 0) {
      setDataToShow(data.restaurants);
    }
  }, [searchTerm]);

  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  }

  const clearSearchTerm = () => {
    setSearchTerm('');
  }

  const searchRestaurants = (searchTerm) => {
    data.restaurants.find((item) => {
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <SearchStyles>
      <div className="contentWrapper">
        <h2 className="pageTitle">Search</h2>
        <div className="inputWrapper">
          <SearchBar value={searchTerm} onChange={changeSearchTerm} type="text" placeholder="Search for restaurants" />
          {searchTerm.length > 0 ? <GrClose onClick={clearSearchTerm} className="icon" /> : <BsSearch onClick={searchRestaurants} className="icon" />}
        </div>
        {dataToShow && dataToShow.length >= 0 ?
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
        : <Loader />}
      </div>
    </SearchStyles>
  );
}
