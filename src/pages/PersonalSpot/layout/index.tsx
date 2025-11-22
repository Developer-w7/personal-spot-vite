import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PersonalSpotLayout() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "left",
          margin: "10px 10px",
          fontSize: "15px",
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        Personal Spot &gt;&gt;
      </h1>
      <hr />
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <NavLink to="home">Home</NavLink>
        ||<NavLink to="profile">Profile</NavLink>||
        <NavLink to="resume_editor">Resume Editor</NavLink>||
        <NavLink to="resume">Resume</NavLink>||
        <NavLink to="profile">Settings</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
