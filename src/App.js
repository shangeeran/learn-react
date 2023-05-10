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

      <Profile name = "Shanga" lname = "Kundu"/>

      {/* <News messagecontent="This is a message from props"/> */}

    </div>
  );
}

export default App;
