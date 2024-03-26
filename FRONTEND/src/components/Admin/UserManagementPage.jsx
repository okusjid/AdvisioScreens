import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const UserProfilePage = () => {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/get_user_data/');
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to handle role change
  const handleRoleChange = async (clerkUserId, newRole) => {
    try {
      const response = await fetch('http://localhost:8000/api/set_user_role/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerk_user_id: clerkUserId,
          role: newRole,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user role.');
      }
      // Update the role in the local state
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.clerk_user_id === clerkUserId ? { ...user, role: newRole } : user
        )
      );
      alert('User role updated successfully.');
    } catch (error) {
      console.error(error);
      alert('Failed to update user role.');
    }
  };

  // Function to handle blocking/unblocking a user
  const handleBlockUnblockUser = async (clerkUserId, newRole) => {
    try {
      const response = await fetch('http://localhost:8000/api/set_user_role/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerk_user_id: clerkUserId,
          role: newRole,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user role.');
      }
      // Update the role in the local state
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.clerk_user_id === clerkUserId ? { ...user, role: newRole } : user
        )
      );
      alert('User role updated successfully.');
    } catch (error) {
      console.error(error);
      alert('Failed to update user role.');
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {filteredUsers.map(user => (
          <li
            key={user.clerk_user_id}
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="block text-lg font-bold">Name:</span>
                <span className="block text-gray-600">{user.name}</span>
              </div>
              <span className="block text-gray-600">Role: {user.role.toUpperCase()}</span>
            </div>
            <div className="flex items-center space-x-4">
              {user.role === 'blocked' && (
                <button
                  onClick={() => handleBlockUnblockUser(user.clerk_user_id, 'user')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Unblock User
                </button>
              )}
              {user.role === 'user' && (
                <>
                  <button
                    onClick={() => handleRoleChange(user.clerk_user_id, 'admin')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleBlockUnblockUser(user.clerk_user_id, 'blocked')}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Block User
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfilePage;
