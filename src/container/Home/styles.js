import styled from 'styled-components';

export const HomeStyles = styled.div`
  padding: 5%;
  .linkWrapper {
    padding-left: 10%;
    .link {
      text-decoration: none;
      margin-right: 3rem;
      font-size: 1.5rem;
      color: #666;
      &.selected {
        color: #cb202d;
        font-weight: bold;
        border-bottom: 1px solid #cb202d;
        padding: 5px;
      }
    }
  }
`;
