import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Sidebar/Chat';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path='/rooms/:roomId'>
                  <Chat />
                </Route>

                <Route path='/'>
                </Route>
              </Switch>
            </Router>
          </div>)}
    </div>
  );
}

export default App;
