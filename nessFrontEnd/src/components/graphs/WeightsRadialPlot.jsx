import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ weights, amenityNames }) => {
  useEffect(() => {
    const canvas = document.getElementById('myRadarChart');
    if (canvas) {
      if (canvas.chart) {
        canvas.chart.destroy();
      }

      const maxWeight = Math.max(...weights);
      const scaledWeights = weights.map(weight => weight / maxWeight);
      const data = {
        labels: amenityNames,
        datasets: [{
          label: 'Weights',
          data: scaledWeights,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      };

      const options = {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 1
          }
        },
        responsive: true
      };

      const ctx = canvas.getContext('2d');
      canvas.chart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
      });
    }
  }, [weights, amenityNames]);

  return  <div style={{ width: "70%"}}><canvas id="myRadarChart"></canvas>
  </div>;
};

export default RadarChart;
