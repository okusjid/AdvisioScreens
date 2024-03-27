import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageManagement = () => {
  const [images, setImages] = useState([]);
  const [approvedImages, setApprovedImages] = useState([]);
  const [rejectedImages, setRejectedImages] = useState([]);
  const [filter, setFilter] = useState('all');

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
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Ad Management</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={() => filterImages('all')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>All</button>
        <button onClick={() => filterImages('approved')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'approved' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Approved</button>
        <button onClick={() => filterImages('rejected')} className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'rejected' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>Rejected</button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div key={image.id} className={`shadow-md rounded-lg overflow-hidden ad-box ${image.approved ? 'bg-green-100' : image.rejected ? 'bg-red-100' : 'bg-gray-100'}`}>
            <img src={`http://localhost:8000/uploads${image.image_url}`} alt={image.name} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
              Name: {image.name}
              </h3>
              <p className="text-gray-700">
              Location: {image.location}
              </p>
            </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManagement;
