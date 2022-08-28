import styled from 'styled-components';

export const CommentStyles = styled.div`
  background: #7E909A;
  padding: 0.2rem;
  color: white;
  border-radius: 0.5rem;
  margin: 2rem;
  margin-left: 0;
  p {
    margin: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  .user {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0;
    margin-left: 1rem;
    .avatar {
      font-size: 1.75rem;
      margin-right: 0.5rem;
    }
  }
`;
