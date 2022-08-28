import styled from 'styled-components';

export const SearchStyles = styled.div`
  .contentWrapper {
    padding-left: 15%;
    padding-right: 5%;
    .pageTitle {
      margin-top: 7%;
      font-size: 3rem;
      color: #444;
    }
    .inputWrapper {
      position: relative;
      width: 80%;
    }
    .icon {
      cursor: pointer;
      font-size: 1.5rem;
      position: absolute;
      right: 4%;
      top: 30%;
    }
  }
`;

export const ListCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .titleWrapper {
    display: flex;
    align-items: baseline;
  }
  .cardCoverImg {
    width: 7%;
    height: 7%;
    border-radius: 1rem;
    margin-right: 1.5rem;
  }
  .title  {
    margin: 0;
    margin-right: 0.5rem;
  }
  .desc {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    color: #888;
  }
`;

export const SearchBar = styled.input`
  font-size: 1.5rem;
  width: 95%;
  padding: 1rem;
  border-radius: 0.8rem;
  border: 1px solid grey;
  position
`;
