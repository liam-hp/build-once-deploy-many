import logo from './logo.svg';
import './App.css';
import { env } from './env.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Development Environment: {env.REACT_APP_ENV}
        </p>
        <p>
          App Version: {env.REACT_APP_RELEASE}
        </p>
      </header>
    </div>
  );
}

export default App;
