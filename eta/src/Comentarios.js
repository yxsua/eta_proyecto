import React from 'react';
import './Comentarios.css';
import ScrollableTable from './ScrollableTable';
import { FaArrowLeft } from 'react-icons/fa';

const dataClientes = [
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 },
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 },
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 }
    // Añadir más filas si es necesario para probar el desplazamiento
];

const dataEmpleados = [
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 },
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 },
    { nombre: 'Juan Pérez', comentario: 'Muy bueno', calificacion: 5 },
    { nombre: 'Ana Gómez', comentario: 'Regular', calificacion: 3 },
    { nombre: 'Luis Sánchez', comentario: 'Excelente', calificacion: 5 },
    { nombre: 'Carla Mendez', comentario: 'Malo', calificacion: 2 },
    { nombre: 'Pedro Torres', comentario: 'Aceptable', calificacion: 4 }
    // Añadir más filas si es necesario para probar el desplazamiento
];

function Tareas() {
    const handleBackClick = () => {
        // Lógica para regresar, por ejemplo, usando el history de react-router
        console.log('Regresar');
    };

    return (
        <div className="Comentarios">
            <header className="Comentarios-header">
                <BackButton onClick={handleBackClick} />
                <h1>Comentarios y Calificaciones</h1>
                <h2>Comentarios de clientes</h2>
                <ScrollableTable data={dataClientes} />
                <h2>Comentarios de empleados</h2>
                <ScrollableTable data={dataEmpleados} />
            </header>
        </div>
    );
}

const BackButton = ({ onClick }) => {
    return (
        <button className="back-button" onClick={onClick}>
            <FaArrowLeft /> Regresar
        </button>
    );
};

export default Tareas;