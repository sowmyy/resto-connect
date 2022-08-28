import styled from 'styled-components';
import coverImg from 'images/cover_image.jpg';

export const TextAreaWrapper = styled.div`
  background: #ddd;
  margin-right: 2rem;
  padding: 2rem;
  textarea {
    width: 100%;
    font-size: 1rem;
  }
  h3 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: normal;
  }
  .commentButton {
    margin-top: 1rem;
    padding: 0.8rem;
    background-color: #7E909A;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const RestaurantPageStyles = styled.div`
  padding: 5rem;
  opacity: 0;
  animation: appear 0.75s ease-in forwards;
  .title {
    margin-top: 5%;
  }
  .coverPic {
    background: url(${coverImg});
    height: 400px;
    width: 50%;
    border-radius: 2rem;
    background-repeat: no-repeat;
  }
  ul {
    margin: 0;
    margin-top: 0.5rem;
    padding: 0;
    list-style: none;
    display: flex;
    color: #888;
    .listItem {
      text-transform: capitalize;
    }
  }
  .titleWrapper {
    display: flex;
    align-items: center;
    .restTitle {
      font-size: 3rem;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
    }
  }
  .restDesc {
    margin: 0;
    font-size: 1rem;
    color: #666;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
