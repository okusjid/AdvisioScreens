import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import CSS file for animations

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchRandomImages();
  }, []); // Fetch random images when the component mounts

  const fetchRandomImages = () => {
    const apiUrl = "https://source.unsplash.com/random/800x600?advertising";

    // Fetching 9 random images
    const fetchPromises = Array.from({ length: 20 }, () => fetch(apiUrl));

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
