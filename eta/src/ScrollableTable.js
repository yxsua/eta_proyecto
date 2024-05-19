import React from 'react';
import './ScrollableTable.css';

const ScrollableTable = ({ data }) => {
  return (
    <div className="scrollable-container">
      <table className="scrollable-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Comentario</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.nombre}</td>
              <td>{row.comentario}</td>
              <td>{row.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;
