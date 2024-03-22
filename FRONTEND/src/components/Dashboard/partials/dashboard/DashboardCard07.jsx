import axios from "axios";
import React, { useEffect, useState } from "react";

import {useUser} from '@clerk/clerk-react';

function DashboardCard07() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const user = useUser();

  useEffect(() => {
    console.log('get-approved-images user id: ',user.user.id )
    const fetchImages = async () => {
      try {
        const user_id=user.user.id 
        const response = await axios.get('http://localhost:8000/api/get-approved-images/',{
          params: {
            user_id: user_id
          }
        });
        setImages(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-white shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-800">
          Ads on Display
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-900 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Cost</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Location</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Impressions</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {images.map((image, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <svg
                          className="shrink-0 mr-2 sm:mr-3"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                        >
                          <circle fill="#EA4335" cx="18" cy="18" r="18" />
                          <path
                            d="M18 17v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C21.6 11.7 20 11 18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H18z"
                            fill="#FFF"
                            fillRule="nonzero"
                          />
                        </svg>
                        <div className="text-slate-800 dark:text-slate-800">
                          {image.name}
                        </div>
                      </div>
                    </td>
          
                    <td className="p-2">
                        <div className="text-center">NULL</div>
                    </td>
                    <td className="p-2">
                        <div className="text-center text-emerald-500">NULL</div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">NULL</div>
                    </td>
                    <td className="p-2">
                        <div className="text-center text-sky-500">NULL</div>
                    </td>
                  </tr>
              ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
