import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaFolderOpen, FaGamepad, FaUser, FaAd } from 'react-icons/fa';
import './adminSidebarAnimations.css'; // Make sure to import the CSS

const menuItems = [
    { icon: FaUser, text: 'User Management', to: '/admin/user-management' },
    { icon: FaAd, text: 'Ad Management', to: '/admin/ad-management' },
    // { icon: FaFolderOpen, text: 'Media Library', to: '/admin/media-library' },
    { icon: FaComment, text: 'Feedback Collection', to: '/admin/feedback-collection' },
    // { icon: FaGamepad, text: 'Gamification', to: '/admin/gamification' },
    { icon: FaComment, text: 'Contact Messages', to: '/admin/contact-messages' },
];

const AdminSidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white min-h-screen sidebar-entrance">
      <div className="flex flex-col flex-grow">
        {menuItems.map(({ icon: Icon, text, to }, index) => (
          <Link
            key={index}
            to={to}
            className="menu-item flex items-center justify-start text-lg p-4 w-full mb-4 hover:bg-gray-700 transition-colors duration-150"
          >
            {Icon && <Icon className="icon-animation mr-3" />}
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
