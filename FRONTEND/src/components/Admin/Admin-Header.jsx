import React from 'react';
import { SignedIn, UserButton ,useClerk } from '@clerk/clerk-react';



const AdminHeader = () => {
    const { signOut } = useClerk();
   

    return (
        <header className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">AdvisioScreens</h1>
            <SignedIn>
              <UserButton className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" />
             </SignedIn>
        </header>
    );
};

export default AdminHeader;
