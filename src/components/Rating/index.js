import { RatingStyles } from './styles';
import { AiFillStar } from "react-icons/ai";

export default function Rating(props) {
  return (
    <RatingStyles>
      {props.data}
      <AiFillStar className="star" />
    </RatingStyles>
  );
}
