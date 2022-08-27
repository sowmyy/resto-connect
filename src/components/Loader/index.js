import loaderSrc from 'images/loader.gif';
import { LoaderStyles } from './styles';

export default function Loader() {
  return (
    <LoaderStyles>
      <img src={loaderSrc} />
    </LoaderStyles>
  );
}
