import React, { useState } from "react";
import html2canvas from "html2canvas";

const ProfileCard = ({ user, onReset }) => {
  
  const [name, setName] = useState(`${user.name.first} ${user.name.last}`);
  const [designation, setDesignation] = useState("Frontend Developer");
  const [company, setCompany] = useState("365 customizer");


  const downloadCard = () => {
    const card = document.getElementById("profile-card");
    if (card) {
      html2canvas(card).then((canvas) => {
        const link = document.createElement("a");
        link.download = "profile-card.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        id="profile-card"
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          margin: "0 auto",
          background: "#f9f9f9",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        
        <img
          src={user.picture.large}
          alt={name}
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />

        
        <div style={{ textAlign: "left" }}>
          <label>
            <strong>Name:</strong>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                margin: "5px 0",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label>
            <strong>Designation:</strong>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                margin: "5px 0",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label>
            <strong>Company:</strong>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                margin: "5px 0",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
        </div>
      </div>
      <button
        onClick={downloadCard}
        style={{
          marginRight: "10px",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Download Card
      </button>
      <button
        onClick={onReset}
        style={{
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#6c757d",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ProfileCard;
