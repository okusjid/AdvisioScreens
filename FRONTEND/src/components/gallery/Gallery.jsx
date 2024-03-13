import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css"; // Import CSS file for animations

const Gallery = () => {
  const [images, setImages] = useState([]);
  const isInitialMount = useRef(true); // Ref to track initial mount

  useEffect(() => {
    // Fetch random images only on the initial mount
    if (isInitialMount.current) {
      fetchRandomImages();
      isInitialMount.current = false;
    }
  }, []); // Empty dependency array ensures the effect runs only once

  const fetchRandomImages = () => {
    // Updated URL to fetch billboard-related images
    const apiUrl = "https://source.unsplash.com/random/800x600?billboard";

    // Fetching 9 random images
    const fetchPromises = Array.from({ length: 10 }, () => fetch(apiUrl));

    Promise.all(fetchPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.url))
      )
      .then((urls) => setImages(urls))
      .catch((error) => console.error("Error fetching images:", error));
  };

  const handleImageLoad = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], loaded: true };
    setImages(updatedImages);
  };

  return (
    <div className="container mx-auto p-4">
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
    </div>
  );
};

export default Gallery;
