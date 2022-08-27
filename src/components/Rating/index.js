import { RatingStyles } from './styles';

export default function Rating(props) {
  console.log('rate', props.data);
  return (
    <RatingStyles>
      {props.data}
    </RatingStyles>
  );
}
