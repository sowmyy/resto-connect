import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
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
            <Link to="/restaurants">Restaurants</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/search">Search</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
