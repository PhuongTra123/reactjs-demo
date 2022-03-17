import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#info">Info</a>
          </li>
          <li>
            <a href="#todo">To do</a>
          </li>
        </ul>
      </div>
      <Form />
    </div>
  );
}

export default App;
