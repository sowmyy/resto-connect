import { Route, useParams } from "react-router-dom";
import { data } from 'container/Restaurants/restaurants.js';
import React, { useState, useEffect, memo } from 'react';
import Loader from 'components/Loader';
import { RestaurantPageStyles, TextAreaWrapper } from './styles';
import Rating from 'components/Rating';
import Comment from 'components/Comment';
import { addToLocalStorage } from 'utils/helpers';

function RestaurantPage(props) {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [commentValue, setCommentValue] = useState('');

  const commentFunction = (e) => {
    setCommentValue(e.target.value);
  }

  const addComment = (event) => {
    const data = {
      restaurantId: restaurantData.id,
      restaurantName: restaurantData.name,
      type: "commentCount"
    };
    addToLocalStorage(data);
    props.dispatch({
      type: "ADD_COMMENT",
      payload: {
        comment: commentValue,
        restId: id,
      }
    });
    setCommentValue('');
  }

  useEffect(() => {
    if (props.dataState && props.dataState.data.length > 0) {
      const result = props.dataState.data.find((item) => item.id == id);
      setRestaurantData(result);
    }
  }, []);

  return (
    <RestaurantPageStyles>
      {restaurantData ? <main style={{ padding: "1rem 0" }}>
        <div className="coverPic" />
        <div className="titleWrapper">
          <h2 className="restTitle">{restaurantData.name}</h2>
          <Rating marginTop data={restaurantData.rating} />
        </div>
        <h4 className="restDesc">{restaurantData.description}</h4>
        {restaurantData.cuisines && <ul>
          {restaurantData.cuisines.map((cuisineItem, index) => (
            <li className="listItem">{cuisineItem}{index + 1 == restaurantData.cuisines.length ? '' : ','}&nbsp;</li>
          ))}
        </ul>}
        <h2 className="title">Feedbacks</h2>
        {restaurantData.feedbacks.map((item) => (
          <Comment key={item.id} data={item.comment} />
        ))}
        <TextAreaWrapper>
          <h3>Type your valuable feedback here:</h3>
          <textarea value={commentValue} onChange={commentFunction} rows="5" cols="50" />
          <button type="button" disabled={!commentValue} onClick={addComment} className="commentButton">Comment</button>
        </TextAreaWrapper>
      </main> : <Loader />}
    </RestaurantPageStyles>
  );
}

export default memo(RestaurantPage);
