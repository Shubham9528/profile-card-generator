import React from "react";

// Component to display a grid of user profiles
const UserGrid = ({ users, onSelect }) => {
  return (
    <div className="user-grid">
      {users.map((user, index) => (
        <div
          key={index} // Unique key for each user card
          className="user-card"
          onClick={() => onSelect(user)} // Select user when their card is clicked
        >
          {/* User Profile Picture */}
          <img
            src={user.picture.medium}
            alt={user.name.first} // User's first name as alt text
          />

          {/* User's Full Name */}
          <h4>{`${user.name.first} ${user.name.last}`}</h4>

          {/* User's Email */}
          <p>{user.email}</p>

          {/* User's Location */}
          <p>
            Location: <b>{user.location.country}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;
