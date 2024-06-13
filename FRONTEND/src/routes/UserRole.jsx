import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// Clerk to Postgres
import {
  useUser
} from "@clerk/clerk-react";


// Custom hook to fetch and handle user role
export function useUserRole() {
  const { isSignedIn, user } = useUser();
  const [userRole, setUserRole] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      const fetchUserRole = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/get_user_role/', {
            params: { clerk_user_id: user.id },
            withCredentials: false
          });
          const { role } = response.data;
          setUserRole(role);
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      };

      fetchUserRole();
    }
  }, [isSignedIn, user?.id]);

  return userRole;
}
