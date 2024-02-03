import React from "react";
import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg"; // Update the path
import image3 from "../../assets/Gallery/image3.jpg"; // Update the path
import a from "../../assets/Gallery/a.jpeg"; // Update the path
import b from "../../assets/Gallery/b.jpeg"; // Update the path
import d from "../../assets/Gallery/d.jpeg"; // Update the path
import c from "../../assets/Gallery/c.jpeg"; // Update the path
import image8 from "../../assets/Gallery/image8.jpeg"; // Update the path
import image9 from "../../assets/Gallery/image9.jpeg"; // Update the path
const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img className="h-auto max-w-full" src={image1} alt="" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img className="h-auto max-w-full" src={image2} alt="" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img className="h-auto max-w-full" src={image3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img className="h-auto max-w-full" src={a} alt="" />
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img className="h-auto max-w-full" src={b} alt="" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img className="h-auto max-w-full" src={d} alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img className="h-auto max-w-full" src={c} alt="" />
            </div>
          </div>

          {/* Repeat the structure for other grids with local images */}
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img className="h-auto max-w-full" src={image8} alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img className="h-auto max-w-full" src={image9} alt="" />
            </div>
          </div>
          {/* Repeat the structure for other grids with local images */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
