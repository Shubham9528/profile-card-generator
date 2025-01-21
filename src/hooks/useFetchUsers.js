import { useState, useEffect } from "react";

// Custom hook to fetch user data from the Random User API
const useFetchUsers = () => {
  // State to store the list of users fetched from the API
  const [users, setUsers] = useState([]);
  // State to manage the loading status while data is being fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data from the Random User API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=15"); 
        const data = await response.json(); 
        setUsers(data.results); 
      } catch (error) {
        console.error("Error fetching users:", error); // Log errors to the console for debugging
      } finally {
        setLoading(false); // Set loading to false after data fetch or error
      }
    };

    fetchUsers(); 
  }, []); 

  // Return the users array and loading state to the component using this hook
  return { users, loading };
};

export default useFetchUsers; 
