import React from 'react';
import './Tareas.css';
import { FaArrowLeft } from 'react-icons/fa';

const data = [
    { tarea: 'T1', informacion: 'Ulises Tabla tareas', contacto: 'contacto1@example.com' },
    { tarea: 'T2', informacion: 'Melina Acceso', contacto: 'contacto2@example.com' },
    { tarea: 'T3', informacion: 'Joel Dashboard', contacto: 'contacto3@example.com' },
    { tarea: 'T4', informacion: 'Pantalla principal', contacto: 'contacto3@example.com' },
    { tarea: 'T5', informacion: 'Toño Ventas', contacto: 'contacto3@example.com' },
    { tarea: 'T6', informacion: 'Opiniones', contacto: 'contacto3@example.com' },
    { tarea: 'T7', informacion: 'Chatbot', contacto: 'contacto3@example.com' }
];

function Tareas() {
    const handleBackClick = () => {
        // Lógica para regresar, por ejemplo, usando el history de react-router
        console.log('Regresar');
    };

    return (
        <div className="Tareas">
            <header className="Tareas-header">
                <BackButton onClick={handleBackClick} />
                <h1>Lista de Tareas</h1>
                <Table data={data} />
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

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Prioridad</th>
                    <th>Información</th>
                    <th>Contacto</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td className='td1'>{row.tarea}</td>
                        <td>{row.informacion}</td>
                        <td>{row.contacto}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tareas;