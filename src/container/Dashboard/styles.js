import styled from 'styled-components';

export const BarGraphStyles = styled.div`
  margin-left: 12%;
  margin-top: 2%;
  padding-bottom: 5%;
  .rv-xy-plot__axis__line {
    stroke: black;
  }
  .rv-xy-plot__grid-lines__line {
    stroke: #ccc;
  }
`;

export const DashboardStyles = styled.div`
  .heading {
    padding-left: 11.5%;
    margin-top: 2%;
    margin-bottom: 2%;
    span {
      font-weight: normal;
    }
  }
  .contentWrapper {
    .pageTitle {
      margin-top: 7%;
      margin-left: 1.5rem;
      font-size: 3rem;
      color: #444;
    }
    padding-left: 10%;
    padding-right: 5%;
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
