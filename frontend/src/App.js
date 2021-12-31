//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import User from './components/User';
import Registration from './components/Registration';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/User" element={<User/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
