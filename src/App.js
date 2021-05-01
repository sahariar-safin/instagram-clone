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
import Login from './componants/Login/Login';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggingUser, setLoggingUser] = useState({
    
  });
  return (
    <UserContext.Provider value={[loggingUser, setLoggingUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/">
            <Home></Home>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
