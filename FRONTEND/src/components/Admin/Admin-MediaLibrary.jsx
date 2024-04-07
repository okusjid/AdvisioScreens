import React, { useState, useEffect } from 'react';

const MediaLibrary = () => {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [zoomed, setZoomed] = useState(false);

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
    } catch (error) {
      console.error('Error fetching media list:', error);
    }
  };

  const handleMediaClick = (mediaId) => {
    setSelectedMedia(mediaId);
    setZoomed(true);
  };

  const handleZoomOut = () => {
    setZoomed(false);
  };

  return (
    <div className="media-library text-white min-h-screen py-10 relative">
      <h1 className="text-3xl font-bold mb-8 text-center">Media Library</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaList.map((media) => (
          <div key={media.id} className="media-item cursor-pointer rounded-lg overflow-hidden shadow-lg">
            <img
              src={`http://localhost:8000/uploads${media.image_url}`}
              alt={media.name}
              className={`w-full h-60 object-cover ${zoomed ? 'zoomed' : ''}`}
              onClick={() => handleMediaClick(media.id)}
              style={{ transition: 'transform 0.3s ease' }}
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800 mb-2">{media.name}</p>
              <p className="text-sm text-gray-600">{media.location}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedMedia && zoomed && (
        <div className="overlay fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal relative w-96 h-96">
            <button className="absolute top-2 right-2 text-white text-xl" onClick={handleZoomOut}>
              &times;
            </button>
            <img
              src={`http://localhost:8000/uploads${mediaList.find(media => media.id === selectedMedia).image_url}`}
              alt={mediaList.find(media => media.id === selectedMedia).name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;
