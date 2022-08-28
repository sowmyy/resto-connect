import styled from 'styled-components';

export const DashboardStyles = styled.div`
  .pageTitle {
    margin: 1.5rem;
    font-size: 2.5rem;
    color: #444;
  }
`;

export const AnalyticsCardOutline = styled.div`
  border: 1px solid #EA6A47;
  color: #EA6A47;
  display: inline-block;
  border-radius: 10px;
  margin: 1.5rem;
  padding: 1.5rem;

`;

export const AnalyticsCardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
`;

export const AnalyticsCardValue = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const AnalyticsCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.8rem;
  background: #EA6A47;
  color: white;
  display: inline-block;
  margin: 1.5rem;
  ${props => props.blue && `
    background: #7E909A;
  `}
`;

export const AnalyticsWrapper = styled.div`

`;
