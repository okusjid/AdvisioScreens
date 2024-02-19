import React from 'react';
import { FaComment, FaQrcode, FaGamepad, FaUser, FaAd } from 'react-icons/fa';
import './adminSidebarAnimations.css'; // Make sure to import the CSS

const menuItems = [
  { icon: FaUser, text: 'User Management' },
  { icon: FaAd, text: 'Ad Management' },
  { icon: FaComment, text: 'Feedback Collection' },
  { icon: FaQrcode, text: 'QR Codes' },
  { icon: FaGamepad, text: 'Gamification' },
  { icon: FaComment, text: 'Contact Messages' },
];

const AdminSidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white min-h-screen sidebar-entrance">
      <div className="flex flex-col flex-grow">
        {menuItems.map(({ icon: Icon, text }, index) => (
          <button
            key={index}
            className="menu-item flex items-center justify-start text-lg p-4 w-full mb-4"
            aria-label={text}
          >
            {Icon && <Icon className="icon-animation mr-3" />}
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
