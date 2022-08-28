import React, { useState, useEffect } from 'react';
import { DashboardStyles, BarGraphStyles, AnalyticsCard, AnalyticsCardOutline, AnalyticsWrapper, AnalyticsCardTitle, AnalyticsCardValue } from './styles';
import { mostFrequent } from 'utils/helpers';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

import SearchTermGraph from 'components/SearchTermGraph';


export default function Dashboard(props) {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [hitAnalytics, setHitanalytics] = useState(null);
  const [commentAnalyticData, setCommentAnalyticData] = useState(null);
  const searchAnalytics = localStorage.getItem('searchAnalytics');

  const [clickArray, setClickArray] = useState([]);
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    let tempObjClick = {};
    let tempObjComment = {};
    let tempArrClick = [];
    let tempArrComment = [];

    if (props.dataState.data && props.dataState.data.length > 0) {
      props.dataState.data.map((item) => {
        tempObjClick = {
          x: item.name,
          y: item.clickCount ? item.clickCount : 0,
        };
        tempObjComment = {
          x: item.name,
          y: item.commentCount ? item.commentCount : 0,
        };
        tempArrClick.push(tempObjClick);
        tempArrComment.push(tempObjComment);
        setClickArray(tempArrClick);
        setCommentArray(tempArrComment);
      })
    }
  }, []);

  useEffect(() => {
    const analytics = localStorage.getItem('analytics');
    const hitAnalytics = localStorage.getItem('hitAnalytics');

    setHitanalytics(JSON.parse(hitAnalytics));
    setAnalyticsData(JSON.parse(analytics));
    setCommentAnalyticData(JSON.parse(analytics));
  }, []);

  let sortedArrayForClicked = [];
  let sortedArrayForCommented = [];

  if (analyticsData && analyticsData.length > 0) {
    sortedArrayForClicked = analyticsData.sort((a,b) => (a.clickCount > b.clickCount) ? -1 : (b.clickCount > a.clickCount) ? 1 : 0);
  }
  if (commentAnalyticData && commentAnalyticData.length > 0) {
    sortedArrayForCommented = commentAnalyticData.sort((a,b) => (a.commentCount > b.commentCount) ? -1 : (b.commentCount > a.commentCount) ? 1 : 0);
  }
  return (
    <DashboardStyles>
      <div className="contentWrapper">
        <h2 className="pageTitle">Dashboard</h2>
          <AnalyticsWrapper>
            <AnalyticsCard blue>
              <AnalyticsCardTitle>Total Number of Restaurants</AnalyticsCardTitle>
              <AnalyticsCardValue>{props.dataState && props.dataState.data.length ? props.dataState.data.length : 0}</AnalyticsCardValue>
            </AnalyticsCard>
            {hitAnalytics ? <AnalyticsCard blue>
              <AnalyticsCardTitle>Number of Hits - <strong>Restaurants Listing Page</strong></AnalyticsCardTitle>
              <AnalyticsCardValue>{hitAnalytics.listingPageCount}</AnalyticsCardValue>
            </AnalyticsCard> :  <AnalyticsCard blue>
              <AnalyticsCardTitle>Number of Hits - <strong>Restaurants Listing Page</strong></AnalyticsCardTitle>
              <AnalyticsCardValue>0</AnalyticsCardValue>
            </AnalyticsCard>}
            {hitAnalytics ? <AnalyticsCard blue>
              <AnalyticsCardTitle>Number of Hits - <strong>Search Page</strong></AnalyticsCardTitle>
              <AnalyticsCardValue>{hitAnalytics.searchPageCount}</AnalyticsCardValue>
            </AnalyticsCard> : <AnalyticsCard blue>
              <AnalyticsCardTitle>Number of Hits - <strong>Search Page</strong></AnalyticsCardTitle>
              <AnalyticsCardValue>0</AnalyticsCardValue>
            </AnalyticsCard>}
            {searchAnalytics ? <AnalyticsCard blue>
              <AnalyticsCardTitle>Most Searched Term</AnalyticsCardTitle>
              <AnalyticsCardValue>{searchAnalytics.length > 0 ? `'${mostFrequent(JSON.parse(searchAnalytics))}'` : ' '}</AnalyticsCardValue>
            </AnalyticsCard> : <AnalyticsCard blue>
              <AnalyticsCardTitle>Most Searched Term</AnalyticsCardTitle>
              <AnalyticsCardValue>NA</AnalyticsCardValue>
            </AnalyticsCard>}
          </AnalyticsWrapper>
          <AnalyticsWrapper>
            {sortedArrayForClicked && sortedArrayForClicked.length > 0 ? <AnalyticsCard>
              <AnalyticsCardTitle>Most Viewed Restaurant</AnalyticsCardTitle>
              <AnalyticsCardValue>{sortedArrayForClicked && sortedArrayForClicked.length > 0 && sortedArrayForClicked[0].restaurantName}</AnalyticsCardValue>
            </AnalyticsCard> : <AnalyticsCard>
              <AnalyticsCardTitle>Most Viewed Restaurant</AnalyticsCardTitle>
              <AnalyticsCardValue>NA</AnalyticsCardValue>
            </AnalyticsCard>}
            {sortedArrayForClicked && sortedArrayForClicked.length > 0 ? <AnalyticsCardOutline>
              <AnalyticsCardTitle>Number of Views</AnalyticsCardTitle>
              <AnalyticsCardValue>{sortedArrayForClicked && sortedArrayForClicked.length > 0 && sortedArrayForClicked[0].clickCount}</AnalyticsCardValue>
            </AnalyticsCardOutline> : <AnalyticsCardOutline>
              <AnalyticsCardTitle>Number of Views</AnalyticsCardTitle>
              <AnalyticsCardValue>0</AnalyticsCardValue>
            </AnalyticsCardOutline>}
          </AnalyticsWrapper>
          <AnalyticsWrapper>
            {analyticsData && analyticsData.length > 0 ? <AnalyticsCard>
              <AnalyticsCardTitle>Most Commented Restaurant</AnalyticsCardTitle>
              <AnalyticsCardValue>{sortedArrayForCommented && sortedArrayForCommented.length > 0 && sortedArrayForCommented[0].restaurantName}</AnalyticsCardValue>
            </AnalyticsCard> : <AnalyticsCard>
              <AnalyticsCardTitle>Most Commented Restaurant</AnalyticsCardTitle>
              <AnalyticsCardValue>NA</AnalyticsCardValue>
            </AnalyticsCard>}
            {analyticsData && analyticsData.length > 0 ? <AnalyticsCardOutline>
              <AnalyticsCardTitle>Number of Comments</AnalyticsCardTitle>
              <AnalyticsCardValue>{sortedArrayForCommented && sortedArrayForCommented.length > 0 && sortedArrayForCommented[0].commentCount}</AnalyticsCardValue>
            </AnalyticsCardOutline> : <AnalyticsCardOutline>
              <AnalyticsCardTitle>Number of Comments</AnalyticsCardTitle>
              <AnalyticsCardValue>0</AnalyticsCardValue>
            </AnalyticsCardOutline>}
          </AnalyticsWrapper>
      </div>
      <h2 className="heading">Restaurants  &nbsp;&nbsp; <span>X</span> &nbsp;&nbsp;  Clicks & Comments made</h2>
      {clickArray.length > 0 && commentArray.length > 0 && <BarGraphStyles>
        <XYPlot xType="ordinal" width={1500} height={1000} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={clickArray} />
          <VerticalBarSeries data={commentArray} />
        </XYPlot>
      </BarGraphStyles>}
      {/* <SearchTermGraph /> */}
    </DashboardStyles>
  );
}
