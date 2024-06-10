import React, { useState, useEffect } from 'react';


const MediaLibrary = () => {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [report, setReport] = useState(null);
  const [showReport, setShowReport] = useState(false);
  useEffect(() => {
    fetchMediaList();
  }, []);

  const fetchMediaList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/get-all-images/');
      if (!response.ok) {
        throw new Error('Failed to fetch media list');
      }
      const data = await response.json();
      setMediaList(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error fetching media list');
      console.error('Error fetching media list:', error);
    }
  };

  const handleMediaClick = (mediaId) => {
    setSelectedMedia(mediaId);
    setZoomed(true);
  };

  const handleZoomOut = () => {
    setSelectedMedia(null);
    setZoomed(false);
  };


  const filteredMediaList = mediaList.filter(media =>
    media.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMediaType = (mediaUrl) => {
    const extension = mediaUrl.split('.').pop().toLowerCase();
    return extension === 'mp4' ? 'video' : 'image';
  };



  const handleReportCreation = async (mediaurl) => {
    console.log("url is: ", mediaurl);
    // send the url to the backend
    try {
      // Correctly escape the backslash and declare processedurl with const or let
      const processedurl = mediaurl.replace(/\//g, "\\");
      console.log("Processed URL:", processedurl); // Added this line to check the processed URL
  
      const response = await fetch('http://localhost:8000/api/analyze-media/', {
        method: 'POST',
        body: JSON.stringify({ media_path: processedurl }), // Send the processed URL
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Correctly call json() as a method
      console.log("Response Data:", data);
      setReport(data);
      setShowReport(true);
      
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  
  // Display the report
  const ReportDisplay = () => (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 text-gray-800 px-5 py-4 rounded-lg shadow-2xl mx-auto my-6 max-w-4xl relative transition-all duration-300 ease-in-out">
      <button 
        onClick={() => setShowReport(false)} 
        className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition-colors duration-300 ease-in-out text-2xl"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-5 text-blue-900">Analysis Report</h2>
      {report.alerts ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-blue-100">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Type
                </th>
                <th scope="col" className="py-3 px-6">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {report.alerts.map((alert, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Alert {index + 1}
                  </td>
                  <td className="py-4 px-6">
                    {alert}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-gray-600">{report}</p>
      )}
    </div>
  );
  



  return (
    <div className="media-library text-white min-h-screen py-10 relative">
      <h1 className="text-3xl font-bold mb-6 text-black">Media Library</h1>
      <input
        type="text"
        placeholder="Search by Ad Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500 text-gray-800 bg-white border border-gray-300 placeholder-gray-500 focus:border-blue-500"
        style={{ transition: 'border-color 0.3s ease' }}
      />

      {error && <div className="text-red-500">{error}</div>}
      {showReport && <ReportDisplay />}
      

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMediaList.map((media) => (
          <div key={media.id} className="media-item cursor-pointer rounded-lg overflow-hidden shadow-lg">
            {getMediaType(media.image_url) === 'image' ? (
              <img
                src={`http://localhost:8000/uploads${media.image_url}`}
                alt={media.name}
                className={`w-full h-60 object-cover ${zoomed ? 'zoomed' : ''}`}
                onClick={() => handleMediaClick(media.id)}
                style={{ transition: 'transform 0.3s ease' }}
              />
            ) : (
              <video
                src={`http://localhost:8000/uploads${media.image_url}`}
                alt={media.name}
                className={`w-full h-60 object-cover ${zoomed ? 'zoomed' : ''}`}
                onClick={() => handleMediaClick(media.id)}
                style={{ transition: 'transform 0.3s ease' }}
                controls
              />
            )}
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800 mb-2">{media.name}</p>
              <p className="text-sm text-gray-600">{media.location}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleReportCreation(media.image_url)}>Generate Report</button>
            </div>
          </div>
        ))}
      </div>
      {selectedMedia && zoomed && (
        <div className="overlay fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleZoomOut}>
          <div className="modal relative w-98 h-96" onClick={(e) => e.stopPropagation()}>
            {(getMediaType(mediaList.find(media => media.id === selectedMedia).image_url) === 'image') ? (
              <img
                src={`http://localhost:8000/uploads${mediaList.find(media => media.id === selectedMedia).image_url}`}
                alt={mediaList.find(media => media.id === selectedMedia).name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <video
                  src={`http://localhost:8000/uploads${mediaList.find(media => media.id === selectedMedia).image_url}`}
                  alt={mediaList.find(media => media.id === selectedMedia).name}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <button className="absolute top-2 right-2 text-white text-xl" onClick={handleZoomOut}>
              &times;
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default MediaLibrary;
