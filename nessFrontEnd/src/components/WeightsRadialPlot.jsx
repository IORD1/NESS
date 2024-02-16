import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ weights, amenityNames }) => {
  useEffect(() => {
    const canvas = document.getElementById('myRadarChart');
    if (canvas) {
      // Check if a chart instance exists
      if (canvas.chart) {
        // Destroy the existing chart instance
        canvas.chart.destroy();
      }

      // Find the maximum value in the weights array
      const maxWeight = Math.max(...weights);

      // Scale all values in the weights array based on the maximum value
      const scaledWeights = weights.map(weight => weight / maxWeight);

      // Create chart data
      const data = {
        labels: amenityNames,
        datasets: [{
          label: 'Weights',
          data: scaledWeights,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1, // Border width
        }]
      };

      // Create chart options
      const options = {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 1
          }
        }
      };

      // Create chart
      const ctx = canvas.getContext('2d');
      canvas.chart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
      });
    }
  }, [weights, amenityNames]);

  return  <div style={{ width: "70%"}}><canvas id="myRadarChart" width="400" height="400"></canvas>
  </div>;
};

export default RadarChart;
