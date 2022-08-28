import { RestaurantCardStyles } from './styles';
import coverImg from 'images/cover.jpg';
import Rating from 'components/Rating';
import { useNavigate } from 'react-router-dom';
import { addToLocalStorage } from 'utils/helpers';

export default function RestaurantCard(props) {
  let navigate = useNavigate();
  const redirectToRestaurant = (obj) => {
    const data = {
      restaurantId: obj.id,
      restaurantName: obj.name,
      type: "clickCount"
    }
    addToLocalStorage(data);
    navigate(`/restaurant/${obj.id}`)
  }
  return (
    <RestaurantCardStyles coverImg={coverImg} onClick={() => redirectToRestaurant(props.data)}>
      <img className="cardCoverImg" src={coverImg} />
      <div className="cardContent">
        <div className="titleContent">
          <h2 className="cardName">{props.data.name}</h2>
          <Rating data={props.data.rating} />
        </div>
        {props.data.cuisines.slice(0,3).map((item, index) => (
          <p key={index} className="cuisineItem">{item}{props.data.cuisines.length == index + 1 ? '' : ','}&nbsp;</p>
        ))}
        . . .
      </div>
    </RestaurantCardStyles>
  );
}
