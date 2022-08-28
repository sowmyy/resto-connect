import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Restaurants from './container/Restaurants';
import Dashboard from './container/Dashboard';
import Search from './container/Search';
import { addAnalyticsData } from 'utils/helpers';

function App() {
  const addAnalytics = (type) => {
    addAnalyticsData(type);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resto-Connect</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
          <Link to="/restaurants" onClick={() => addAnalytics('listingPageCount')}>Restaurants</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/search" onClick={() => addAnalytics('searchPageCount')}>Search</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
