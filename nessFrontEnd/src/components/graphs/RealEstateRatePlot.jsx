import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RealEsateRatePlot = ({ Rates, locatoinsNames }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current && Rates && Rates.length > 0) {
      // If chart exists, destroy it
      if (myChart) {
        myChart.destroy();
      }

      const data = Rates.map(value => value);

      const ctx = chartRef.current.getContext('2d');

      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: locatoinsNames,
          datasets: [{
            label: 'Average Real Estate Rates (ruppee/sq.ft)',
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
  }, [Rates]);

  return (
    <div style={{width : "70%"}}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RealEsateRatePlot;
