import { useState, useEffect } from 'react';
import axios from 'axios';

const ImageManagement = () => {
  const [images, setImages] = useState([]);
  // const [approvedImages, setApprovedImages] = useState([]);
  // const [rejectedImages, setRejectedImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [mediaFilter, setMediaFilter] = useState('all'); // Added media filter state
  const [error, setError] = useState(null);
  const [report, setReport] = useState(null);
  const [showReport, setShowReport] = useState(false);

  // Filter buttons for media type
  const filterMedia = (mediaType) => {
    setMediaFilter(mediaType);
  };

  // Define getMediaType function before it's used
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
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [allResponse, approvedResponse, rejectedResponse] = await Promise.all([
        axios.get('http://localhost:8000/api/get-all-images/'),
        axios.get('http://localhost:8000/api/get-all-approved-images/'),
        axios.get('http://localhost:8000/api/get-all-rejected-images/'),
      ]);

      const allImages = allResponse.data;
      const approvedIds = approvedResponse.data.map(image => image.id);
      const rejectedIds = rejectedResponse.data.map(image => image.id);

      const updatedImages = allImages.map(image => {
        if (approvedIds.includes(image.id)) {
          return { ...image, approved: true, rejected: false };
        } else if (rejectedIds.includes(image.id)) {
          return { ...image, approved: false, rejected: true };
        } else {
          return { ...image, approved: false, rejected: false };
        }
      });

      setImages(updatedImages);
      setApprovedImages(approvedResponse.data);
      setRejectedImages(rejectedResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSetApproval = async (imageId, isApproved) => {
    try {
      await axios.post('http://localhost:8000/api/set-image-approved/', { image_id: imageId, approved: isApproved });
      alert('Approval status updated successfully');
      updateImageStatus(imageId, isApproved, 'approved');
      fetchData();
    } catch (error) {
      console.error('Error setting approval status:', error);
    }
  };

  const handleSetRejection = async (imageId, isRejected) => {
    try {
      await axios.post('http://localhost:8000/api/set-image-rejected/', { image_id: imageId, rejected: isRejected });
      alert('Rejection status updated successfully');
      updateImageStatus(imageId, isRejected, 'rejected');
      fetchData();
    } catch (error) {
      console.error('Error setting rejection status:', error);
    }
  };

  const updateImageStatus = (imageId, statusValue, statusType) => {
    const updatedImages = images.map(image =>
      image.id === imageId ? { ...image, [statusType]: statusValue } : image
    );
    setImages(updatedImages);
  };

  const filterImages = (filterType) => {
    setFilter(filterType);
  };

  let filteredImages = [];
  if (filter === 'all') {
    filteredImages = images;
  } else if (filter === 'approved') {
    filteredImages = images.filter(image => image.approved);
  } else if (filter === 'rejected') {
    filteredImages = images.filter(image => image.rejected);
  }

  // Apply media filter
  if (mediaFilter === 'image') {
    filteredImages = filteredImages.filter(image => getMediaType(image.image_url) === 'image');
  } else if (mediaFilter === 'video') {
    filteredImages = filteredImages.filter(image => getMediaType(image.image_url) === 'video');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Ad Management</h2>
      {error && <div className="text-red-500">{error}</div>}
      {showReport && <ReportDisplay />}
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={() => filterImages('all')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>All</button>
        <button onClick={() => filterImages('approved')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'approved' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Approved</button>
        <button onClick={() => filterImages('rejected')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'rejected' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Rejected</button>
        <button onClick={() => filterMedia('image')} className={`px-6 py-2 rounded-md transition duration-300 ${mediaFilter === 'image' ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Images</button>
        <button onClick={() => filterMedia('video')} className={`px-6 py-2 rounded-md transition duration-300 ${mediaFilter === 'video' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Videos</button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div key={image.id} className={`shadow-md rounded-lg overflow-hidden ad-box ${image.approved ? 'bg-green-100' : image.rejected ? 'bg-red-100' : 'bg-gray-100'}`}>
            {/* Media display */}
            <div className="p-4">
              {getMediaType(image.image_url) === 'image' ? (
                <img src={`http://localhost:8000/uploads${image.image_url}`} alt={image.name} className="w-full h-60 object-cover mb-10" />
              ) : (
                <video controls className="w-full h-60 mb-10">
                  <source src={`http://localhost:8000/uploads${image.image_url}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {/* Image name */}
              <h3 className="text-xl font-semibold mb-2">
                Name: {image.name}
              </h3>
              {/* Image location */}
              <p className="text-gray-700">
                Location: {image.location}
              </p>
            </div>
            
            {/* Generate Report button*/}
            <button
              onClick={() => handleReportCreation(image.image_url)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full text-center uppercase font-semibold tracking-wider focus:outline-none focus:ring focus:ring-blue-500 mt-4 hover:shadow-md"
            >
              Generate Report
            </button>
            {/* Image status and actions */}
            <div className="p-4 flex justify-between items-center">
              <span className={`${image.approved ? 'text-green-500 font-semibold' : image.rejected ? 'text-red-500 font-semibold' : 'font-semibold'}`}>
                Status:  {image.approved ? 'Accepted' : image.rejected ? 'Rejected' : 'Pending'}
              </span>
              {image.approved && !image.rejected && (
                <button
                  onClick={() => handleSetRejection(image.id, true)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-red-700"
                >
                  Reject
                </button>
              )}
              {!image.approved && image.rejected && (
                <button
                  onClick={() => handleSetApproval(image.id, true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-700"
                >
                  Approve
                </button>
              )}
              {!image.approved && !image.rejected && (
                <>
                  <button
                    onClick={() => handleSetApproval(image.id, true)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleSetRejection(image.id, true)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-red-700"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManagement;
