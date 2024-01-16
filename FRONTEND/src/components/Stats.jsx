import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaBullhorn, FaUsers, FaRegChartBar, FaCity } from 'react-icons/fa';

// Example data - replace with your actual data
const stats = [
  { id: 1, label: 'Billboards Managed', value: 150, icon: <FaBullhorn className="text-4xl text-purple-500 mb-4"/> },
  { id: 2, label: 'Clients Served', value: 320, icon: <FaUsers className="text-4xl text-blue-500 mb-4"/> },
  { id: 3, label: 'Campaigns Run', value: 570, icon: <FaRegChartBar className="text-4xl text-green-500 mb-4"/> },
  { id: 4, label: 'Cities Covered', value: 45, icon: <FaCity className="text-4xl text-yellow-500 mb-4"/> },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg">
              {stat.icon}
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h2 className="text-3xl font-bold text-gray-800">
                    {isVisible ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                  </h2>
                )}
              </VisibilitySensor>
              <p className="text-lg mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
