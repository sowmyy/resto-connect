import { RestaurantCardStyles } from './styles';
import coverImg from 'images/cover.jpg';

export default function RestaurantCard(props) {
  return (
    <RestaurantCardStyles coverImg={coverImg}>
      <img className="cardCoverImg" src={coverImg} />
      <div className="cardContent">
        <h2 className="cardName">{props.data.name}</h2>
        {props.data.cuisines.slice(0,3).map((item, index) => (
          <p key={index} className="cuisineItem">{item}{props.data.cuisines.length == index + 1 ? '' : ','}&nbsp;</p>
        ))}
        . . .
      </div>
    </RestaurantCardStyles>
  );
}
