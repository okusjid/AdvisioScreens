import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
// import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import {useUser} from '@clerk/clerk-react';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function Dashboard() {
  
  const user = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [vidopen, vidsetOpen] = useState(false);
  const vidhandleOpen = () => vidsetOpen(true);
  const vidhandleClose = () => vidsetOpen(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [reject, setRejected] = useState([]);
  const [name, setName] = useState(null);
  const fetchImages = async () => {
    try {
      const user_id=user.user.id 
      const response = await axios.get('http://localhost:8000/api/get-unapproved-images/', {
        params: {
          user_id: user_id
        }
      });
      setImages(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchRejected = async () => {
    try {
      const user_id=user.user.id 
      const response = await axios.get('http://localhost:8000/api/get-rejected-items/', {
        params: {
          user_id: user_id
        }
      });
      setRejected(response.data);
      console.log("dashboard rejected",response.data);
    } catch (error) {
      console.error('Error fetching rejected images:', error);
    }
  };
  
  useEffect(() => {
    
    console.log('get-rejected-items user id: ',user.user.id )
  
    fetchRejected();
  }, []);


  useEffect(() => {
    
    console.log('get-unapproved-images user id: ',user.user.id )
  
    fetchImages();
  }, []);

  const locations = [
    { name: 'Location 1', viewers: 1000, price: 50 },
    { name: 'Location 2', viewers: 2000, price: 75 },
    { name: 'Location 3', viewers: 1500, price: 60 },
    { name: 'Location 4', viewers: 1800, price: 70 },
    { name: 'Location 5', viewers: 2500, price: 100 }
  ];
  console.log("User:",user)
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const handleSubmit = async () => {
    console.log(selectedLocation,file)
    console.log('submit user',user.user.id)
    const user_id=user.user.id
    try {
      const response = await axios.post('http://localhost:8000/api/upload/', {loc:selectedLocation['name'], file:file, user_id:user_id,name:name}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      fetchImages();
    } catch (error) {
      console.error('Error:', error);
    }
    setOpen(false)
  };

  const handleSubmitVideo = async () => {
    console.log(selectedLocation,file)
    
    const user_id=user.user.id
    try {
      const response = await axios.post('http://localhost:8000/api/upload_video/', {loc:selectedLocation['name'], file:file, user_id:user_id,name:name}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    vidsetOpen(false)
  };

  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

    
       
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner title='Welcome to AdvisioScreens'/>

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              <DashboardAvatars />
              <div className="flex justify-center items-center space-x-4">
                <div>
                  <button onClick={handleOpen} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" >
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="xs:block ml-2">Add Image</span>
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                    <TextField
                    style={{marginBottom:'10px', width:'100%'}}
                      required
                      id="outlined-required"
                      label="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select Location
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="modal">
                          <div className="modal-content">
                            <ul>
                              {locations.map((location, index) => (
                                <li key={index}>
                                  <label>
                                    <input type="radio" style={{marginRight:'10px'}} name="location" value={location.name} onChange={() => handleLocationSelect(location)} />
                                    {location.name} - {location.viewers} viewers - ${location.price}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button
                          style={{ marginTop: '20px', width: '100%' }}
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload file
                          <VisuallyHiddenInput accept='image/*' type="file" onChange={handleFileChange}/>
                        </Button>
                        <Button disabled={!selectedLocation || !file || !name} style={{ marginTop: '20px'}} onClick={handleSubmit} variant="contained">Submit</Button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>

                <div>
                  <button onClick={vidhandleOpen} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" >
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="xs:block ml-2">Add Video</span>
                  </button>
                  <Modal
                    open={vidopen}
                    onClose={vidhandleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select Location
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="modal">
                          <div className="modal-content">
                            <ul>
                              {locations.map((location, index) => (
                                <li key={index}>
                                  <label>
                                    <input type="radio" style={{marginRight:'10px'}} name="location" value={location.name} onChange={() => handleLocationSelect(location)} />
                                    {location.name} - {location.viewers} viewers - ${location.price}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button
                          style={{ marginTop: '20px', width: '100%' }}
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload file
                          <VisuallyHiddenInput accept="video/*" type="file" onChange={handleFileChange}/>
                        </Button>
                        <Button disabled={!selectedLocation || !file} style={{ marginTop: '20px'}} onClick={handleSubmitVideo} variant="contained">Submit</Button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div> 

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard05 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
              {/* Line chart (Sales Over Time) */}
              <DashboardCard08 />
              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09 />
              {/* Card (Customers) */}
              <DashboardCard10 images={images}/>
              {/* Card (Reasons for Refunds) */}
              <DashboardCard11 />
              {/* Card (Recent Activity) */}
              <DashboardCard12 locations={locations} />
              {/* Card (Income/Expenses) */}
              <DashboardCard13 reject={reject}/>
            </div>
          </div>
          <div></div>
        </main>

      
      </div>
    </div>
  );
}

export default Dashboard;