import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
