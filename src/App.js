import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import News from './components/News';

function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <Message/>
      <Profile name = "Shangeeran" lname = "Kulam"/>
      <Profile name = "Tharshu" lname = "Shan"/>
      <Profile name = "Kundu" lname = "Mangus">
        <h3>This is a profile of a person</h3>
      </Profile> */}

      <News messagecontent="This is a message from props"/>

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
