import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Sheared/Navbar/Navbar';
import Home from './componants/Home/Home/Home';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggingUser, setLoggingUser] = useState([]);
  return (
    <UserContext.Provider value={[loggingUser, setLoggingUser]}>
      <Navbar></Navbar>
      <Home></Home>
    </UserContext.Provider>
  );
}

export default App;
