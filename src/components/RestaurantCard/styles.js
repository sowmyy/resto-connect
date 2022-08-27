import styled from 'styled-components';

export const RestaurantCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3%;
  margin-bottom: 6%;
  cursor: pointer;
  max-width: 30%;
  .cardCoverImg {
    width: 75%;
    border-radius: 1rem;
  }
  .cardContent {
    margin-top: 1rem;
    .cardName {
      margin: 0;
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
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
