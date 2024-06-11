import React, { useState, useEffect } from "react";
import axios from 'axios';
import Tooltip from "../../components/Tooltip";
import RealtimeChart from "../../charts/RealtimeChart";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import locations from "../../../Locations";

function DashboardCard05({ viewers }) {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);

  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
    56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
    65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
    49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
    59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
    55.82, 53.94, 52.65, 50.25,
  ];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  const updateViewers = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/update-viewers/", locations);
      const sum = Object.values(response.data).reduce((a, b) => a + b, 0);
      return sum;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    const updateData = async () => {
      const nextValue = await updateViewers();
      if (nextValue !== null) {
        setSlicedData(([x, ...slicedData]) => [...slicedData, nextValue]);
        setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
      }
    };
    updateData();
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-7 bg-white rounded-md shadow-lg border border-slate-200 dark:border-slate-700 text-slate-800">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-800">
          Real Time Impressions on your Ads
        </h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">
            Built with{" "}
            <a
              className="underline"
              href="https://www.chartjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Chart.js
            </a>
          </div>
        </Tooltip>
      </header>
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
