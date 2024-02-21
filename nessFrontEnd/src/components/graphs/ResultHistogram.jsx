import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ResultHistogram = ({ results }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    let myChart;

    if (canvas) {
      if (canvas.chart) {
        canvas.chart.destroy();
      }

      if (results && results.length > 0) {
        const labels = results.map(result => result.index);
        const data = results.map(result => result.value);

        const ctx = canvas.getContext('2d');

        myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Results',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
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
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [results]);

  return (
    <div style={{ width: "70%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ResultHistogram;
