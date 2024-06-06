import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import QRCode from "qrcode.react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Dashboard/partials/Sidebar";
import WelcomeBanner from "../components/Dashboard/partials/dashboard/WelcomeBanner";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Analytics = () => {
  const [images, setImages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAd, setActiveAd] = useState(0);
  const user = useUser();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const user_id = user.user.id;
        const response = await axios.get(
          "http://localhost:8000/api/get-approved-images/",
          {
            params: {
              user_id: user_id,
            },
          }
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const image = images[activeAd]

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar adList={images} adOpen={activeAd} setAdOpen={setActiveAd} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner title="Here are your Running Ads" />

              {/* Cards */}
              <div className="rounded-md">
                {image ?
                  <Card sx={{ borderRadius: 10 }}>
                    <CardContent>
                      <div className="flex justify-between">
                        <div>
                          <h1 className="h3">{image.name}</h1>
                          <p>{image.location}</p>
                        </div>
                        <Link
                          to={`/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`}
                        >
                          <QRCode
                            value={`http://localhost:5173/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`}
                            size={60}
                          />
                        </Link>
                      </div>
                    </CardContent>
                    <CardContent>
                      {image.image_url.endsWith(".mp4") ||
                        image.image_url.endsWith(".avi") ||
                        image.image_url.endsWith(".mkv") ? (
                        <video
                          src={`http://localhost:8000/uploads/${image.image_url}`}
                          controls
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 10,
                          }}
                        ></video>
                      ) : (
                        <img
                          src={`http://localhost:8000/uploads/${image.image_url}`}
                          alt={image.image_url}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 10,
                          }}
                        />
                      )}
                    </CardContent>
                    {/* <CardContent>
                        <Link
                          to={`/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`}
                        >
                          <QRCode
                            value={`http://localhost:5173/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`}
                            size={60}
                          />
                        </Link>
                        <ImageListItemBar
                          style={{
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%)",
                            borderRadius: 16,
                          }}
                          title={image.name}
                          subtitle={<span>{image.location}</span>}
                          position="below"
                        />
                      </CardContent> */}
                  </Card>
                  :
                  <p>No ads to display</p>
                }

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Analytics;
