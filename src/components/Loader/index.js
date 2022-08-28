import loaderSrc from 'images/loader.gif';
import noResultsGif from 'images/no_results.gif';
import { LoaderStyles } from './styles';

export default function Loader(props) {
  return (
    <LoaderStyles noResults={props.noResults}>
      <h2>No Results Found</h2>
      <div className="gifWrapper">
        <img src={props.noResults ? noResultsGif : loaderSrc} />
      </div>
    </LoaderStyles>
  );
}
