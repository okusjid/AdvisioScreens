import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

// Sample data for the Doughnut chart
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    },
  ],
};

const AdminHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card title="Total Users" value="1,024" icon="👤" />
          <Card title="Monthly Revenue" value="$18,400" icon="💰" />
          <Card title="Feedback Messages" value="320" icon="📬" />
          <Card title="Active Subscriptions" value="928" icon="🔔" />
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Revenue Breakdown</h2>
              <Doughnut data={data} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Latest Feedback</h2>
              {/* Example list. Replace with your data */}
              <ul>
                <li className="border-b-2 mb-2 pb-2">Great service! - John Doe</li>
                <li className="border-b-2 mb-2 pb-2">I love this product! - Jane Smith</li>
                <li>Need more features. - Emily Johnson</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon }) => (
  <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div>
      <div className="text-lg font-medium text-gray-700">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
    <div className="text-4xl">{icon}</div>
  </div>
);

export default AdminHomePage;
