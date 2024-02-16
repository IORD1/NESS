import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ data }) => {
  useEffect(() => {
    const canvas = document.getElementById('RadarChart');
    if (canvas) {
      // Check if a chart instance exists
      if (canvas.chart) {
        // Destroy the existing chart instance
        canvas.chart.destroy();
      }

      // Prepare data for chart
      const labels = data.namesOfAmmenites;
      const dataset = data.weights
      // const dataset = {
      //   label: 'Weights',
      //   data: data.weights,
      //   fill: true,
      //   backgroundColor: 'rgba(75, 192, 192, 0.2t)', // Background color
      //   borderColor: 'rgba(75, 192, 192, 1)', // Border color
      //   pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point background color
      //   pointBorderColor: '#fff', // Point border color
      //   pointHoverBackgroundColor: '#fff', // Point hover background color
      //   pointHoverBorderColor: 'rgba(75, 192, 192, 1)', // Point hover border color
      // };

      // Create chart
      const ctx = canvas.getContext('2d');
      canvas.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: dataset,
        },
        options: {
          elements: {
            line: {
              borderWidth: 3, // Adjust the line width
            },
          },
          scales: {
            r: {
              angleLines: {
                display: true,
              },
              suggestedMin: 0,
            },
          },
          responsive: true
        },
      });
    }
  }, [data]);

  return <div  style={{ width: "90%"}}>
    <canvas id="RadarChart"></canvas>
  </div>;
};

export default RadarChart;
