import React, { useState } from 'react';
import './Register.css'; // Importa el archivo CSS

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
    if (username && password && email) {
      onRegister(true); // Llama a la función pasada por props para registrar
      // También puedes agregar lógica para enviar datos a un backend
    } else {
      setError('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registrate</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
