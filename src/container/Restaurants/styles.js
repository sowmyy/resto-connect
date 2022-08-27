import styled from 'styled-components';

export const RestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
`;

export const RestaurantStyles = styled.div`
  .contentWrapper {
    .pageTitle {
      margin-top: 7%;
      font-size: 3rem;
    }
    padding-left: 15%;
    padding-right: 5%;
  }
  .filterItem {
    margin-top: 20px;
    border: 1px solid grey;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    ${props => props.isPureVeg && `
      border: none;
      background: #282c34;
      color: white;
      font-weight: bold;
      `}
    }
  .filters {
    display: flex;
    align-items: center;
    .label {
      margin-left: 20px;
      font-weight: bold;
      :first-child{
        margin-left: 0;
      }
    }
  }
`;
