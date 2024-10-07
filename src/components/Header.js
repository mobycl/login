// src/components/Header.js
import React from 'react';
import logo from '../images/Logo-IngeBIM-Vertical.png'; // Ajusta la ruta según la ubicación de tu logo
import './Header.css'; // Importa el CSS

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de la aplicación" />
      <h1>Nombre de la Aplicación</h1>
    </header>
  );
};

export default Header;
