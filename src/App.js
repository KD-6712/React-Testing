import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/skills';
import { AppProviders } from './provider/AppProviders';
import { MuiMode } from './components/mui/MuiMode';
import { Users } from './components/Users/Users';
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
      </header>
      {/* <Application/> */}
      {/* <Skills/> */}
      {/* <AppProviders>
        <div className="App">
          <MuiMode/>
        </div>
      </AppProviders> */}
      <Users/>
    </div>
  );
}

export default App;
