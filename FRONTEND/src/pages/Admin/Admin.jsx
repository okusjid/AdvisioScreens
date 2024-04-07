import React from 'react';
import AdminSidebar from '../../components/Admin/Admin-Sidebar';
import AdminHeader from '../../components/Admin/Admin-Header';

import { Outlet } from 'react-router-dom'; // Import Outlet for nested routing

const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <div className="flex flex-1">
                <AdminSidebar />
                <main className="flex-1 bg-gray-100 p-4">
                    <Outlet /> {/* Placeholder for nested routes */}
                </main>
            </div>
            {/* <AdminFooter /> */}
        </div>
    );
};

export default AdminLayout;
