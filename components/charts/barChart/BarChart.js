import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(ArcElement);

function BarChart() {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;