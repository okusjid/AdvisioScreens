import React from 'react';
import AdminSidebar from '../../components/Admin/Admin-Sidebar'; // Adjust the import path as necessary
import AdminHeader from '../../components/Admin/Admin-Header';

// import AdminFooter from './AdminFooter'; // Ensure you have a footer component
// Other imports...

const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader /> {/* Add the AdminHeader component */}
            <div className="flex flex-1">
                <AdminSidebar />
                <main className="flex-1 bg-gray-100 p-4">
                    {/* Your route-based content goes here */}
                </main>
            </div>
            {/* <AdminFooter /> */}
        </div>
    );
};

export default AdminLayout;
