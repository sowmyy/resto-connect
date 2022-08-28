import { CommentStyles } from './styles';
import { FaUserCircle } from 'react-icons/fa';

export default function Comment(props) {
  return (
    <CommentStyles>
      <div className="user">
        <FaUserCircle className="avatar" />
        <h2>Jessy</h2>
      </div>
      <p>{props.data}</p>
    </CommentStyles>
  );
}
