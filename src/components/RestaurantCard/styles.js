import styled from 'styled-components';

export const RestaurantCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  margin-bottom: 4%;
  cursor: pointer;
  width: 12%;
  opacity: 0;
  ${props => props.dataId}
  animation: ${props => `popIn 0.3s ease-in ${0.2 * props.dataId}s forwards`};
  -webkit-animation: ${props => `popIn 0.5s ease-in ${0.2 * props.dataId}s forwards`};
  .cardCoverImg {
    border-radius: 1rem;
  }
  .cardContent {
    margin-top: 1rem;
    .titleContent {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .cardName {
      margin: 0;
      max-width: 75%;
      font-size: 1.2rem;
    }
    .cuisineItem {
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      font-size: 0.9rem;
      display: inline-block;
    }
  }
  @keyframes popIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
