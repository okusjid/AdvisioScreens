import React, { useState, useCallback, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import locations from "../Locations";

function Navbar({ map, currPosition }) {
  const routingRef = useRef(null);

  let coordinates = [
    [31.514104, 74.351377],
    [31.5925, 74.3095],
  ];
  let markerCordinates = useRef([]);
  // Center on marker
  const centerMarker = (curr) => {
    map.setView(curr, 13);
  };

  function changeMarkerCordinates(coordinates) {
    markerCordinates.current = coordinates;
  }

  //   Routes Logic
  const setRoute = useCallback(() => {
    if (routingRef.current) {
      map.removeControl(routingRef.current);
    }
    routingRef.current = new L.Routing.control({
      waypoints: [
        L.latLng(markerCordinates.current[0], markerCordinates.current[1]),
        L.latLng(currPosition.lat, currPosition.lng),
      ],
      lineOptions: {
        styles: [{ color: "#FF204E", weight: 4 }],
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: function (i, wp, nWps) {
        return null;
      },
    }).addTo(map);
  }, [map, currPosition, markerCordinates]);

  return (
    <>
      <div className="h-[80%] w-3/12 border-2 p-4 rounded-3xl absolute  top-[10vh] left-4 z-30 bg-white shadow-2xl overflow-hidden ">
        <h1 className="font-medium text-2xl mt-4">Advisio Screens</h1>

        {/* Make a list of all the places */}
        <div className="mt-4 h-[92%] overflow-y-scroll no-scrollbar">
          <div>
            {locations.map((loc, index) => {
              //Make two buttons Center and direction
              return (
                <div className="flex items-center space-x-2 justify-between mt-4 border-2 py-5 px-4">
                  <p>{loc.name}</p>
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                      onClick={() => {
                        centerMarker([loc.latitude, loc.longitude]);
                      }}
                    >
                      Center
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                      onClick={() => {
                        changeMarkerCordinates([loc.latitude, loc.longitude]);
                        setRoute();
                      }}
                    >
                      Direction
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
