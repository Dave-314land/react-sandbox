import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < HelloWorld name="Dave" greeting="Yo" />
        < HelloWorld name="World" greeting="What up" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function HelloWorld({ name = "World", greeting = "Hello" }) {
  return (
    <h1>{greeting} {name}  </h1>
  );
}

export default App;
