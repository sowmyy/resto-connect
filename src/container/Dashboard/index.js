import React, { useState, useEffect } from 'react';
import { DashboardStyles, AnalyticsCard, AnalyticsCardOutline, AnalyticsWrapper, AnalyticsCardTitle, AnalyticsCardValue } from './styles';

export default function Dashboard() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [hitAnalytics, setHitanalytics] = useState(null);

  useEffect(() => {
    const analytics = localStorage.getItem('analytics');
    const hitAnalytics = localStorage.getItem('hitAnalytics');

    setHitanalytics(JSON.parse(hitAnalytics));
    setAnalyticsData(JSON.parse(analytics));
  }, []);

  let sortedArray = [];

  if (analyticsData && analyticsData.length > 0) {
    sortedArray = analyticsData.sort((a,b) => (a.clickCount > b.clickCount) ? -1 : (b.clickCount > a.clickCount) ? 1 : 0);
  }
  return (
    <DashboardStyles>
      <h2 className="pageTitle">Dashboard</h2>
      {analyticsData && analyticsData.length > 0 && <>
        <AnalyticsWrapper>
          <AnalyticsCard blue>
            <AnalyticsCardTitle>Total Number of Restaurants</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].clickCount}</AnalyticsCardValue>
          </AnalyticsCard>
          {hitAnalytics && <AnalyticsCard blue>
            <AnalyticsCardTitle>Number of Hits - <strong>Restaurants Listing Page</strong></AnalyticsCardTitle>
            <AnalyticsCardValue>{hitAnalytics.listingPageCount}</AnalyticsCardValue>
          </AnalyticsCard>}
          {hitAnalytics && hitAnalytics.searchPageCount && <AnalyticsCard blue>
            <AnalyticsCardTitle>Number of Hits - <strong>Search Page</strong></AnalyticsCardTitle>
            <AnalyticsCardValue>{hitAnalytics.searchPageCount}</AnalyticsCardValue>
          </AnalyticsCard>}
          {/* <AnalyticsCard blue>
            <AnalyticsCardTitle>Most Searched Term</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].clickCount}</AnalyticsCardValue>
          </AnalyticsCard> */}
        </AnalyticsWrapper>
        <AnalyticsWrapper>
          <AnalyticsCard>
            <AnalyticsCardTitle>Most Viewed Restaurant</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].restaurantName}</AnalyticsCardValue>
          </AnalyticsCard>
          <AnalyticsCardOutline>
            <AnalyticsCardTitle>Number of Clicks</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].clickCount}</AnalyticsCardValue>
          </AnalyticsCardOutline>
        </AnalyticsWrapper>
        <AnalyticsWrapper>
          <AnalyticsCard>
            <AnalyticsCardTitle>Most Commented Restaurant</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].restaurantName}</AnalyticsCardValue>
          </AnalyticsCard>
          <AnalyticsCardOutline>
            <AnalyticsCardTitle>Number of Comments</AnalyticsCardTitle>
            <AnalyticsCardValue>{sortedArray && sortedArray.length > 0 && sortedArray[0].clickCount}</AnalyticsCardValue>
          </AnalyticsCardOutline>
        </AnalyticsWrapper>
      </>}
    </DashboardStyles>
  );
}
