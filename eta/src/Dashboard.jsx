import './Dashboard.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import {FaArrowLeft} from 'react-icons/fa';
import './FaArrowLeft.css';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  const handleBackClick = () => 
    {
      console.log('Regresar');
    };

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Ventas',
        data: [],
        fill: false,
        backgroundColor: 'rgb(3, 3, 248)', // Color de fondo de los puntos
        borderColor: 'rgb(3, 3, 248)', // Color de la línea
        pointBackgroundColor: 'rgb(3, 3, 248)', // Color de fondo de los puntos
        pointBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  });

  useEffect(() => {
    axios.get('http://localhost:3001/api/datos')
      .then((response) => {
        const data = response.data;
        const labels = data.map(item => item.fecha_creacion); // Ajusta según tus columnas
        const ventasData = data.map(item => item.adeudo); // Ajusta según tus columnas
        setLineData({
          labels,
          datasets: [
            {
              label: 'Ventas',
              data: ventasData,
              fill: false,
              backgroundColor: 'rgb(3, 3, 248)', // Color de fondo de los puntos
              borderColor: 'rgb(3, 3, 248)', // Color de la línea
              pointBackgroundColor: 'rgb(3, 3, 248)', // Color de fondo de los puntos
              pointBorderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error obteniendo datos de la API: ', error);
      });
  }, []);

  const lineOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'rgba(0, 0, 0, 0.87)' // Color de las etiquetas de la leyenda
        }
      },
      title: {
        display: true,
        /*text: 'Growth Line Chart',*/
        color: 'rgba(0, 0, 0, 0.87)', // Color del título
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(0, 0, 0, 0.87)', // Color de las etiquetas del eje x
          align: 'center', // Centra las etiquetas en el eje x
          padding: 10, // Añade espacio de relleno para mejor visualización
          
        }
      },
      y: {
        ticks: {
          color: 'rgba(0, 0, 0, 0.87)', // Color de las etiquetas del eje y
          crossAlign: 'center', // Centra las etiquetas en el eje y
        }
      }
    }
  };


  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container_start">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft /> Regresar
      </button>
      <div className='dash_container'>
        <h1>Dashboard Inicial</h1>
      </div>

      <div className="chart-container">
        <Line data={lineData} options={lineOptions} />
      </div>

    </div>
  );
}

export default Dashboard;
