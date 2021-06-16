import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    // BEM  naming convention
    <div className="App">
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
    </div>
  );
}

export default App;
