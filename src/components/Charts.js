// @ts-nocheck
import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/Chart.css";
import "chartjs-plugin-annotation";

function Chart({ chartData, location, legendPosition, bayes }) {
  var b0 = bayes["bayes"][0];
  var b1 = bayes["bayes"][1];
  var b2 = bayes["bayes"][2];

  return (
    <div className="chart">
      <Bar
        redraw={true}
        data={{
          labels: chartData["keys"],
          datasets: [
            {
              backgroundColor: "rgba(151,157,235,0.7)",
              label: "theta:" + chartData["t1"],
              data: chartData['values_1'] ,
            },
            {
              backgroundColor: "rgba(101,240,100,0.7)",
              label: "theta:" + chartData["t2"],
              data: chartData['values_2'],
            },
            {
              backgroundColor: "rgba(71,200,150,0.7)",
              label: "theta:" + chartData["t3"],
              data: chartData['values_3'],
            },
            {
              backgroundColor: "rgba(200,150,50,0.7)",
              label: "theta:" + chartData["t4"],
              data: chartData['values_4'],
            },
          ],
        }}
        options={{
          title: {
            maintainAspectRatio: false,
            display: true,
            text: location,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: legendPosition,
          },

          annotation: {
            drawTime: "afterDraw",
            annotations: [
              {
                id: "line3",
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                borderWidth: 1,
                value: b0,
                borderColor: "rgba(100,250,250,0.7)",
                label: {
                  content: b0,
                  enabled: true,
                  position: "top",
                  backgroundColor: "rgba(100,250,250,0.7)",
                },
              },
              {
                id: "hline2",
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                borderWidth: 1,
                value: b1,
                borderColor: "rgba(250,150,50,0.7)",
                label: {
                  content: b1,
                  backgroundColor: "rgba(250,150,50,0.7)",
                  enabled: true,
                  position: "top",
                },
              },
              {
                id: "hline1",
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                borderWidth: 1,
                value: b2,
                borderColor: "rgba(100,150,50,0.7)",
                label: {
                  content: b2,
                  backgroundColor: "rgba(100,150,50,0.7)",
                  enabled: true,
                  position: "top",
                },
              },
            ],
          },
          animations: {
            tension: {
              duration: 1000,
              easing: "easeOutBounce",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 1,
                },
                stacked: true,
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                stacked: false,
              },
            ],
          },
        }}
      ></Bar>
    </div>
  );
}

export default Chart;
