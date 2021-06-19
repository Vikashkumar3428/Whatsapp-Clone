import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (  
    // BEM  naming convention
    <div className="App">
      {!user ? (
        <Login />
      ): (
        <div className="app__body">
          <Router>
            <Sidebar/> 
            <Switch>
              <Route path ="/rooms/:roomId">
                  <Chat />
              </Route>
              <Route path="/">
                  <Chat />
              </Route>
            </Switch>
          </Router>
        </div>

        )}
    </div>
  );
}

export default App;
