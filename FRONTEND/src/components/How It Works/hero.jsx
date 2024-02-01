import React from 'react';
import clip from '../../../../BACKEND/AdvisioScreens/static/videos/how-it-works.mp4';

const HeroSection = () => {
    const containerStyle = {
        position: 'relative',
        height: '100vh', // Adjust height as needed
        width: '100%', // Ensures it takes full width of its parent
        overflow: 'hidden', // Prevents video overflow
    };

    const heroVideoStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.5) 100%)',
        zIndex: 0,
    };

  
    return (
        <div style={containerStyle}>
            <video autoPlay loop muted style={heroVideoStyle}>
                <source src={clip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={overlayStyle}></div>
            
        </div>
    );
};

export default HeroSection;
