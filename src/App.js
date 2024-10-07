import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Header from './components/Header';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = (registered) => {
    if (registered) {
      setIsLoggedIn(true);
      setIsRegistering(false);
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : isRegistering ? (
        <Register onRegister={handleRegister} />
      ) : (
        <Login onLogin={setIsLoggedIn} onToggleRegister={toggleRegister} />
      )}
    </div>
  );

};

export default App;


