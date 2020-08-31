import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Sidebar/Chat'

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
