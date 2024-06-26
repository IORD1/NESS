import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  useEffect(() => {
    const canvas = document.getElementById('myChart');
    if (canvas) {
      if (canvas.chart) {
        canvas.chart.destroy();
      }

      const labels = data.namesOfAmmenites;
      const datasets = data.ammenitiesList.map((amenities, index) => ({
        label: data.givenOrder[index],
        data: amenities,
        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`, // Random color
      }));


      const ctx = canvas.getContext('2d');
      canvas.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          responsive: true
        },
      });
    }
  }, [data]);

  return <div style={{ width: "90%"}}>

      <canvas id="myChart" ></canvas>;
  </div>
};

export default BarChart;
