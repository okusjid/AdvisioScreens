import React from 'react';
import { FaComment, FaQrcode, FaGamepad, FaUser, FaAd } from 'react-icons/fa';

const AdminSidebar = () => {
    return (
        <div className="flex flex-col w-64 bg-gray-800 text-white min-h-full">
            <div className="flex flex-col flex-grow">
                <button className="flex items-center justify-start text-lg text-white hover:bg-gray-700 p-4 w-full mb-4">
                    <FaUser className="mr-3" /> User Management
                </button>
                <button className="flex items-center justify-start text-lg text-white hover:bg-gray-700 p-4 w-full mb-4">
                    <FaAd className="mr-3" /> Ad Management
                </button>
                <button className="flex items-center justify-start text-lg text-white hover:bg-gray-700 p-4 w-full mb-4">
                    <FaComment className="mr-3" /> Feedback Collection
                </button>
                <button className="flex items-center justify-start text-lg text-white hover:bg-gray-700 p-4 w-full mb-4">
                    <FaQrcode className="mr-3" /> QR Codes
                </button>
                <button className="flex items-center justify-start text-lg text-white hover:bg-gray-700 p-4 w-full mb-4">
                    <FaGamepad className="mr-3" /> Gamification
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
