import React, { useState } from "react";
import useFetchUsers from "./hooks/useFetchUsers"; // Custom hook to fetch user data
import UserGrid from "./components/UserGrid"; // Component to display a grid of users
import ProfileCard from "./components/ProfileCard"; // Component to display and edit a profile card

const App = () => {
  // Fetch users and loading state from the custom hook
  const { users, loading } = useFetchUsers();

  // State to track the currently selected user
  const [selectedUser, setSelectedUser] = useState(null);

  // Display a loading message while user data is being fetched
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "60px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
          360 Customizer Card Generator
        </p>
        <p style={{ fontSize: "20px", color: "#555" }}>
          Select a profile, customize it, and download your card!
        </p>
      </header>

      {/* Display UserGrid or ProfileCard based on user selection */}
      {!selectedUser ? (
        // Show user grid if no user is selected
        <UserGrid users={users} onSelect={setSelectedUser} />
      ) : (
        // Show profile card if a user is selected
        <ProfileCard user={selectedUser} onReset={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

// Export the App component as the default export
export default App;
