# 🌟 360 Customizer Card Generator 🌟

Welcome to the **360 Customizer Card Generator**, a React application that allows users to fetch profile data, customize profile cards, and download them as images! 🎉

---

## 🚀 Features

- **Fetch Profiles**: Dynamically fetch user profiles from the Random User API.
- **Editable Fields**: Edit Name, Designation, and Company directly on the card.
- **Dynamic Design**: Customize the background color of the profile card.
- **Validation**: Ensure that required fields are filled before downloading.
- **Downloadable Card**: Save the customized profile card as a PNG image.
- **Responsive Layout**: Works seamlessly on all screen sizes.

---

## 🛠️ Tech Stack

- **React**: Frontend framework for building the UI.
- **HTML2Canvas**: Library to capture the DOM as an image.
- **React Hook Form**: For form state management and validation.
- **CSS**: For styling the components.

---

## 📂 Folder Structure

```plaintext
src/
├── components/
│   ├── ProfileCard.jsx  # Profile card component
│   ├── UserGrid.jsx      # User grid component
├── hooks/
│   ├── useFetchUsers.js  # Custom hook to fetch user profiles
├── App.jsx               # Main application component
├── index.css             # Global styles
└── index.js              # Entry point of the application
```

