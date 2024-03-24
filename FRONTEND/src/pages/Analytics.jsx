import { useEffect, useState } from "react";
import axios from "axios"; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import QRCode from "qrcode.react";
import {useUser} from '@clerk/clerk-react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Dashboard/partials/Sidebar";
import WelcomeBanner from "../components/Dashboard/partials/dashboard/WelcomeBanner";

const Analytics = () => {
  const [images, setImages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [videos, setVideos] = useState([]);
  const user = useUser();

  useEffect(() => {
    console.log('get-approved-images user id: ',user.user.id )
    const fetchImages = async () => {
      try {
        const user_id=user.user.id 
        const response = await axios.get('http://localhost:8000/api/get-approved-images/',{
          params: {
            user_id: user_id
          }
        });
        setImages(response.data);
        console.log('get-approved-images',response.data)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  
    return (

      <>
      <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

    
       
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner title='Here are your Running Ads'/>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

            <div>
              
            <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={164}>
              {images.map((image, index) => (
                <div style={{ width: '320px', height: 'auto', position: 'relative' }} key={index}>
                  <ImageListItem key={index} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    {(image.image_url.endsWith(".mp4") || image.image_url.endsWith(".avi") || image.image_url.endsWith(".mkv")) ? (
                      <video
                        src={`${"http://localhost:8000/uploads/" + image.image_url}`}
                        controls
                        style={{ width: '100%', height: 'auto' }}
                      ></video>
                    ) : (
                      <img 
                        srcSet={`${"http://localhost:8000/uploads/" + image.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${"http://localhost:8000/uploads/" + image.image_url}?w=164&h=164&fit=crop&auto=format`}
                        alt={image.image_url}
                        loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    )}
                    <Link to={`/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`}>
                      <div style={{ position: "absolute", top: '5px', right: '5px', border:'solid 1px white' }}>
                        <QRCode value={`http://localhost:5173/dashboard/feedback-form?imageId=${image.id}&userId=${user.user.id}`} size={40} />
                      </div>
                    </Link>
                    <ImageListItemBar
                      style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)' }}
                      title={image.name}
                      subtitle={<span>{image.location}</span>}
                      position="below"
                    />
                  </ImageListItem>
                </div>
              ))}
            </ImageList>

          
            </div>

            </div>
          </div>
          <div></div>
        </main>

      
      </div>
    </div>
      </>
    );
};

export default Analytics;
