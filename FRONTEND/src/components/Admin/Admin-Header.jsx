import React from 'react';
import { SignedIn, UserButton, useUser } from '@clerk/clerk-react';
import { FaUserCircle } from 'react-icons/fa'; // Importing FontAwesome user icon

const AdminHeader = () => {
    const { user, isLoaded, isError } = useUser(); // Destructure to include loading and error states

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
        fontSize: '1rem',
        color: '#FFF',
        marginRight: '20px',
    };

    // Handling loading and error states
    let welcomeMessage = "Loading..."; // Default message during loading
    if (isLoaded && !isError && user) {
        welcomeMessage = `Welcome, ${user.fullName}`;
    } else if (isError) {
        welcomeMessage = "Error loading user info"; // Message in case of an error
    }

    return (
        <header style={headerStyles}>
            <h1 style={titleStyle}>AdvisioScreens</h1>
            <h1 style={titleStyle}>Admin Dashboard</h1>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <SignedIn>
                    <span style={welcomeTextStyle}>
                        {welcomeMessage}
                    </span>
                    <UserButton className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" />
                </SignedIn>
            </div>
        </header>
    );
};

export default AdminHeader;
