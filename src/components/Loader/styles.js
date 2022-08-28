import styled from 'styled-components';

export const LoaderStyles = styled.div`
  h2 {
    margin-left: 30rem;
    margin-top: 5rem;
  }
  .gifWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
  ${props => props.noResults && `
    .gifWrapper {
      height: 100vh;
      align-items: flex-start;
      justify-content: flex-start;
      img {
        margin-left: 13rem;
        margin-top: 3rem;
      }
    }
  `}
`;
