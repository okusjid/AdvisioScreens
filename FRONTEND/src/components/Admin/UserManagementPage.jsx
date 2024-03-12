import React, { useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';

const UserProfilePage = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  // State for editing user profile (example: updating the first name)
  const [firstName, setFirstName] = useState(user.firstName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await user.update({ firstName });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div>
        {isEditing ? (
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
            <button onClick={handleEdit}>Edit Profile</button>
          </div>
        )}
      </div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default UserProfilePage;
