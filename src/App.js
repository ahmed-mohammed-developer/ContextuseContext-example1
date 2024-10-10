import './App.css';
import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <UserProfile />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
