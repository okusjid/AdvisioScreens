import React, { useEffect, useState } from "react";
import DoughnutChart from "../../charts/DoughnutChart";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard06({ adList }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (adList && adList.length > 0) {
      const labels = adList.map(ad => ad.name);
      const data = adList.map(ad => ad.viewers);

      const newChartData = {
        labels: labels,
        datasets: [
          {
            label: "Top Ads",
            data: data,
            backgroundColor: [
              tailwindConfig().theme.colors.indigo[500],
              tailwindConfig().theme.colors.blue[400],
              tailwindConfig().theme.colors.indigo[800],
              tailwindConfig().theme.colors.indigo[100],
              tailwindConfig().theme.colors.blue[800],
              tailwindConfig().theme.colors.indigo[200],
              // Add more colors as needed
            ],
            hoverBackgroundColor: [
              tailwindConfig().theme.colors.indigo[600],
              tailwindConfig().theme.colors.blue[500],
              tailwindConfig().theme.colors.indigo[900],
              tailwindConfig().theme.colors.indigo[200],
              tailwindConfig().theme.colors.blue[900],
              tailwindConfig().theme.colors.indigo[300],
              // Add more colors as needed
            ],
            borderWidth: 0,
          },
        ],
      };
      // console.log('chart', newChartData)
      setChartData(newChartData);
    }
  }, [adList]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-5 bg-white dark:bg-white shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-800">
          All Ads Impressions
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
