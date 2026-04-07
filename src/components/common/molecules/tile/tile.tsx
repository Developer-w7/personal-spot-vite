import { useRef, useState, useEffect, FC } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./style.css"; // Assuming you have a CSS file for styling

export default function CustomTile({
  tileMenuItem,
  width,
  height,
}: {
  tileMenuItem: { title: string; icon: string; link: string };
  width?: string;
  height?: string;
}) {
  const navigate = useNavigate();
  // This component renders a set of tiles based on the provided menu items.
  useEffect(() => {}, []);
  const handleNavigate = (link) => {
    // Implement navigation logic here, e.g., using react-router's useNavigate
    console.log(`Navigating to ${link}`);
    navigate(link);
  };

  return (
    <div
      onClick={() => handleNavigate(tileMenuItem.link)}
      className="tile-wrapper"
      style={{ width, height }}
    >
      <div className="tile-inner">
        <i className={`fa-solid ${tileMenuItem.icon}`}></i>
        <span>{tileMenuItem.title}</span>
      </div>
    </div>
  );
}
