import React from 'react';
import './Dashboard.css'; // Importa el archivo CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Dashboard</h1>
      <div className="card">
        <h2>Modelo 3D 1</h2>
        <p>Descripción del modelo 3D 1.</p>
      </div>
      <div className="card">
        <h2>Modelo 3D 2</h2>
        <p>Descripción del modelo 3D 2.</p>
      </div>
      <div className="card">
        <h2>Modelo 3D 3</h2>
        <p>Descripción del modelo 3D 3.</p>
      </div>
    </div>
  );
};

export default Dashboard;
