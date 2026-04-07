import { useEffect, useId } from "react";

import CustomTile from "../../components/common/molecules/tile/tile";
import "./styles/home.css"; // Assuming you have a CSS file for styling
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export default function PersonalSpotHome() {
  useEffect(() => {}, []);
  const unique: string = useId();
  const logout = useLogout();
  const navigate = useNavigate();
  const tileMenuItems = [
    {
      title: "Home",
      icon: "fa-file-edit",
      link: "/home",
    },
    {
      title: "Resume",
      icon: "fa-tasks",
      link: "/resume",
    },
    {
      title: "Profile",
      icon: "fa-user",
      link: "/profile_listing",
    },
    {
      title: "Settings",
      icon: "fa-cog",
      link: "/settings",
    },
    {
      title: "TODO",
      icon: "fa-list",
      link: "/to-do",
    },
    {
      title: "Notes",
      icon: "fa-sticky-note",
      link: "/notes",
    },
  ];
  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Personal Spot Home</h1>
      <div className="tile-menu">
        {tileMenuItems.map((item) => (
          <CustomTile
            key={`${item.title} + ${unique}`}
            tileMenuItem={item}
            width="100px"
            height="100px"
          />
        ))}
      </div>
      <div className="flexGrow">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}
