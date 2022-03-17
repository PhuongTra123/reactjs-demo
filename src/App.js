import { Routes, Route } from 'react-router-dom'


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
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
          <li>
            <a href="/todo">To do</a>
          </li>
        </ul>
      </div>
      {/* <Form />
      <Info /> */}
    </div>
  );
}

export default App;
