import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css"; // Import CSS file for animations

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const isInitialMount = useRef(true); // Ref to track initial mount

  useEffect(() => {
    // Fetch random images only on the initial mount
    if (isInitialMount.current) {
      fetchRandomImages();
      isInitialMount.current = false;
    }
  }, []); // Empty dependency array ensures the effect runs only once

  const fetchRandomImages = async () => {
    // Updated URL to fetch billboard-related images
    const apiUrl = "https://loremflickr.com/800/600/digitalbillboard";

    try {
      const responses = await Promise.all(
        Array.from({ length: 10 }, () => fetch(apiUrl))
      );
      const urls = await Promise.all(
        responses.map(async (response) => {
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );
      setImages(urls);
      setLoading(false); // Set loading to false after images are fetched
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageLoad = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], loaded: true };
    setImages(updatedImages);
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? ( // Conditionally render loading animation
        <div className="loading-animation loader"></div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-container rounded-lg overflow-hidden shadow-lg ${
                image.loaded ? "loaded" : ""
              }`}
            >
              <img
                className="image"
                src={image}
                alt=""
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
