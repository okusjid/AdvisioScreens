import React, { useEffect, useState } from "react";
import BarChart from "../../charts/BarChart03";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import axios from "axios";

function DashboardCard11() {
  // const chartData = {
  //   labels: ["Reasons"],
  //   datasets: [
  //     {
  //       label: "Having difficulties using the product",
  //       data: [0],
  //       backgroundColor: tailwindConfig().theme.colors.indigo[500],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
  //       barPercentage: 1,
  //       categoryPercentage: 1,
  //     },
  //     {
  //       label: "Missing features I need",
  //       data: [0],
  //       backgroundColor: tailwindConfig().theme.colors.indigo[800],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
  //       barPercentage: 1,
  //       categoryPercentage: 1,
  //     },
  //     {
  //       label: "Not satisfied about the quality of the product",
  //       data: [0],
  //       backgroundColor: tailwindConfig().theme.colors.sky[400],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
  //       barPercentage: 1,
  //       categoryPercentage: 1,
  //     },
  //     {
  //       label: "The product doesn’t look as advertised",
  //       data: [0],
  //       backgroundColor: tailwindConfig().theme.colors.green[400],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
  //       barPercentage: 1,
  //       categoryPercentage: 1,
  //     },
  //     {
  //       label: "Other",
  //       data: [0],
  //       backgroundColor: tailwindConfig().theme.colors.slate[200],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
  //       barPercentage: 1,
  //       categoryPercentage: 1,
  //     },
  //   ],
  // };
  
  const [chartData, setChartData] = useState({
    labels: ["Reasons"],
    datasets: [
      {
        label: "Having ",
        data: [0],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "Missing features I need",
        data: [0],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "Not satisfied about the quality of the product",
        data: [0],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "The product doesn’t look as advertised",
        data: [0],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "Other",
        data: [0],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  });

  let total = 0;

  chartData.datasets.forEach(dataset => {
      total += dataset.data.reduce((acc, currentValue) => acc + currentValue, 0);
  });

  const [feedbackData,setFeedbackData] = useState([]);

  useEffect(() => {
    
    console.log('get-feedback-count')
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get-feedback-count/');
        const feedbackCounts = response.data['feedback_counts'];
        const fetched = response.data['feedback_data'];
        console.log('feedback', fetched);
        setFeedbackData(fetched);
        setChartData(prevChartData => ({
          ...prevChartData,
          datasets: prevChartData.datasets.map((dataset, index) => ({
            ...dataset,
            data: [parseInt(feedbackCounts[index + 1]) || 0] 
          }))
        }));
        

        console.log("feedback", chartData)
      } catch (error) {
        console.error('Error getting feedback counts:', error);
      }
    };
  
    fetchFeedback();
  }, []);

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-white shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-800">
          Feedbacks 
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-800 mr-2">
            {total}
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            -22%
          </div>
        </div>
      </div>
      {/* <div></div> */}
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} feedbackData={feedbackData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard11;
