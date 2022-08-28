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

export function mostFrequent(inputArray) {
  let hash = new Map();
  inputArray.map((item, index) => {
    if (hash.has(inputArray[index])) {
      hash.set(inputArray[index], hash.get(inputArray[index])+1)
    } else {
      hash.set(inputArray[index], 1)
    }
  })
  let max_count = 0, res = -1;
  hash.forEach((value,key) => {
    if (max_count < value) {
      res = key;
      max_count = value;
    }
  });
  return res;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function addToSearchAnalytics(data) {
  let analytics = localStorage.getItem('searchAnalytics');

  if (analytics) {
    analytics = JSON.parse(analytics);
  } else {
    analytics = [];
  }
  analytics.push(data);
  localStorage.setItem('searchAnalytics', JSON.stringify(analytics));
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
