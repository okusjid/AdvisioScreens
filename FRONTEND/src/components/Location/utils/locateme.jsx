import React, { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import { FaCrosshairs } from "react-icons/fa";

function Locateme() {
  const [isLocating, setIsLocating] = useState(false);
  const map = useMapEvents({
    click() {
      if (!isLocating) {
        map.locate();
      }
    },
    locationfound(e) {
      if (isLocating) {
        map.flyTo(e.latlng, 15);
        setIsLocating(false);
      }
    },
  });

  const locatemeclick = () => {
    setIsLocating(!isLocating);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "10px", // Adjust top position as needed
        right: "10px", // Adjust right position as needed
        zIndex: 1000,
      }}
    >
      <button
        onClick={locatemeclick}
        style={{
          borderRadius: "50%", // Makes the button circular
          padding: "10px", // Add padding to the button
          backgroundColor: "white", // Background color of the button
          border: "none", // Remove button border
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow to button
        }}
      >
        <FaCrosshairs size={28} />
      </button>
    </div>
  );
}

export default Locateme;
