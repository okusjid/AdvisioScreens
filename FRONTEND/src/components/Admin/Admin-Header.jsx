import React from 'react';
import { SignedIn, UserButton, useUser } from '@clerk/clerk-react';
import { FaUserCircle } from 'react-icons/fa'; // Importing FontAwesome user icon

const AdminHeader = () => {
    const { user } = useUser(); // Destructure to get the first name of the user

    // Enhanced style object for dynamic styling
    const headerStyles = {
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        color: '#ffffff',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    };

    const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        fontFamily: '"Segoe UI", sans-serif',
    };

    const welcomeTextStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem', // Adjusted font size for the welcome text
        color: '#FFF', // Ensuring the text is white for readability
        marginRight: '20px', // Adding some space before the UserButton
    };

    return (
        <header style={headerStyles}>
            <h1 style={titleStyle}>AdvisioScreens</h1>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Admin Dashboard</h1>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <SignedIn>
                {/* Add text title of Admin Dashboard */}
                 
                    <span style={welcomeTextStyle}>
                        Welcome, {user.fullName} 
                    </span>
                    <UserButton className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" />
                </SignedIn>
            </div>
        </header>
    );
};

export default AdminHeader;
