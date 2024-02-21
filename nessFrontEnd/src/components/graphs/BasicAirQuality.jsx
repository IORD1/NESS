import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AirQualityChart = ({ airQualityData, locatoinsNames }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current && airQualityData && airQualityData.length > 0) {
      // If chart exists, destroy it
      if (myChart) {
        myChart.destroy();
      }

    //   const labels = airQualityData.map((_, index) => `Data Point ${index + 1}`);
    //   const labels = locations;
      const data = airQualityData.map(value => value);

      const ctx = chartRef.current.getContext('2d');

      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: locatoinsNames,
          datasets: [{
            label: 'Air Quality',
            data: data,
            fill: false,
            borderColor: 'rgb(175, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      // Clean up chart on unmount
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [airQualityData]);

  return (
    <div style={{width : "70%"}}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AirQualityChart;
