import styled from 'styled-components';

export const RestaurantCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  margin-bottom: 4%;
  cursor: pointer;
  width: 20%;
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
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
