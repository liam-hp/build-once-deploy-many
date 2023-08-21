import logo from './logo.svg';
import './App.css';
import { env } from './env.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <p> {env.REACT_APP_ENV} </p>
      </header>
    </div>
  );
}

export default App;
