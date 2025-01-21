import React, { useState } from "react";
import html2canvas from "html2canvas";

const ProfileCard = ({ user, onReset }) => {
  // State for form fields
  const [name, setName] = useState(`${user.name.first} ${user.name.last}`);
  const [designation, setDesignation] = useState("Frontend Developer");
  const [company, setCompany] = useState("365 Customizer");

  // State for background color
  const [backgroundColor, setBackgroundColor] = useState("#f9f9f9");

  // State for error messages
  const [errors, setErrors] = useState({ name: "", designation: "", company: "" });

  // Validate fields and download the card
  const downloadCard = () => {
    let hasError = false;
    const newErrors = { name: "", designation: "", company: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      hasError = true;
    }
    if (!designation.trim()) {
      newErrors.designation = "Designation is required.";
      hasError = true;
    }
    if (!company.trim()) {
      newErrors.company = "Company name is required.";
      hasError = true;
    }

    setErrors(newErrors);

    // Only proceed if there are no errors
    if (!hasError) {
      const card = document.getElementById("profile-card");
      if (card) {
        html2canvas(card, {
          useCORS: true,
          allowTaint: false,
        }).then((canvas) => {
          const link = document.createElement("a");
          link.download = "profile-card.png";
          link.href = canvas.toDataURL();
          link.click();
        });
      }
    }
  };


  function handleReset() {
    setName(`${user.name.first} ${user.name.last}`);
    setDesignation("Frontend Developer");
    setCompany("365 Customizer");
    // onReset();
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Background Color Picker */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Select Background Color:</strong>
        </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "5px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Profile Card */}
      <div
        id="profile-card"
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          margin: "0 auto",
          background: backgroundColor,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Profile Picture */}
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

        {/* Editable Fields */}
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
            {errors.name && (
              <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>
                {errors.name}
              </p>
            )}
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
            {errors.designation && (
              <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>
                {errors.designation}
              </p>
            )}
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
            {errors.company && (
              <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>
                {errors.company}
              </p>
            )}
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "20px" }}>
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
        onClick={handleReset}
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
      <button
        onClick={onReset}
        style={{
          padding: "8px 15px",
          marginLeft: "15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#6c757d",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Home
      </button>


      </div>
     
    </div>
  );
};

export default ProfileCard;
