import React from 'react';
import './Ventas.css';
import { FaArrowLeft } from 'react-icons/fa';

function Ventas() {
    const handleBackClick = () => {
        // Lógica para regresar, por ejemplo, usando el history de react-router
        console.log('Regresar');
    };
    
    return(
        <body>
            <header>
            <BackButton onClick={handleBackClick} />
                <h1 className="empresa">Empresa jeje</h1>
            </header>
            <div className="Titulo">
                <h1 className="ganancias">$5,000</h1>
                <h2 className="ganancias">ganados</h2>
            </div>
            <center>
            <table className="tabla">
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Monto total</th>
                    <th>Monto pagado</th>
                    <th>Monto por pagar</th>
                    <th>Estado</th>
                    <th>Contacto</th>
                </tr>
                <tr>
                    <td>Juanito</td>
                    <td>Ayer</td>
                    <td>123,456,789 bolas</td>
                    <td>0</td>
                    <td>0</td>
                    <td>Completado</td>
                    <td>442 348 0455</td>
                </tr>
            </table>
            </center>
        </body>
    )

}

const BackButton = ({ onClick }) => {
    return (
        <button className="back-button" onClick={onClick}>
            <FaArrowLeft /> Regresar
        </button>
    );
};



export default Ventas;