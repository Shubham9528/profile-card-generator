import React from "react";

const UserGrid = ({ users, onSelect }) => {
  return (
    <div className="user-grid">
      {users.map((user, index) => (
        <div
          key={index}
          className="user-card"
          onClick={() => onSelect(user)}
        >
          
          <img
            src={user.picture.medium}
            alt={user.name.first}
          />

     
          <h4>{`${user.name.first} ${user.name.last}`}</h4>

        

       
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;
