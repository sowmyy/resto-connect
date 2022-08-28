import { RatingStyles } from './styles';
import { AiFillStar } from "react-icons/ai";

export default function Rating(props) {
  return (
    <RatingStyles marginTop={props.marginTop}>
      <span>{props.data}</span>
      <AiFillStar className="star" />
    </RatingStyles>
  );
}
