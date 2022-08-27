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
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    border: 1px solid grey;
    padding: 0.8rem;
    display: inline-block;
    border-radius: 0.8rem;
    cursor: pointer;
    &.reset {
      background-color: #cb202d;
      color: white;
      border: none;
      font-weight: bold;
    }
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
    margin-top: 1rem;
    .Dropdown-control {
      cursor: pointer;
    }
    .label {
      margin-left: 1rem;
      margin-right: 1rem;
      font-weight: bold;
      :first-child{
        margin-left: 0;
      }
    }
  }
`;
