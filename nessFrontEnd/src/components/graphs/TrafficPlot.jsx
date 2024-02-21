import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TrafficPlot = ({ jamFactor, locatoinsNames }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current && jamFactor && jamFactor.length > 0) {
      // If chart exists, destroy it
      if (myChart) {
        myChart.destroy();
      }

      const data = jamFactor.map(value => value);

      const ctx = chartRef.current.getContext('2d');

      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: locatoinsNames,
          datasets: [{
            label: 'Traffic Density [0(low) - 10(high)]',
            data: data,
            fill: false,
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
  }, [jamFactor]);

  return (
    <div style={{width : "70%"}}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TrafficPlot;
