import React, { useState } from "react";
import useFetchUsers from "./hooks/useFetchUsers";
import UserGrid from "./components/UserGrid";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const { users, loading } = useFetchUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "60px",fontWeight: "bold", color: "#333" }}>
          360 Customizer Card Generator
        </p>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Select a profile, customize it, and download your card!
        </p>
      </header>

      
      {!selectedUser ? (
        <UserGrid users={users} onSelect={setSelectedUser} />
      ) : (
        <ProfileCard user={selectedUser} onReset={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App;
