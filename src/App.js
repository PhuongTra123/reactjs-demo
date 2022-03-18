import { Routes, Route, Link } from 'react-router-dom'


import "./App.css";
import Form from "./components/Form";
import HomePage from './components/Home';
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/todo" element={<Form />}/>
      </Routes>
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/todo">To do</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
