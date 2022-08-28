export function addAnalyticsData(type) {
  let analytics = localStorage.getItem('hitAnalytics');

  if (analytics) {
    analytics = JSON.parse(analytics);
  } else {
    analytics = {
      listingPageCount: 0,
      searchPageCount: 0,
    };
  }
  analytics[type] += 1;
  localStorage.setItem('hitAnalytics', JSON.stringify(analytics));
}

export function addToLocalStorage(data) {
  let analytics = localStorage.getItem('analytics');
  if (analytics) {
    analytics = JSON.parse(analytics);
  } else {
    analytics = [];
  }

  let isAlreadyPresent = analytics.find((item) => item.restaurantId == data.restaurantId);
  if (isAlreadyPresent) {
    analytics = analytics.map((item) => {
      if (item.restaurantId == data.restaurantId) {
        item[data.type] += 1;
      }
      return item;
    })
  } else {
    let initialObj = {
      restaurantId: data.restaurantId,
      restaurantName: data.restaurantName,
      clickCount: 0,
      commentCount: 0
    };
    initialObj[data.type] += 1;

    analytics = [...analytics, initialObj];
  }

  localStorage.setItem('analytics', JSON.stringify(analytics));
}
