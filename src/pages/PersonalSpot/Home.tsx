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
      title: "Resume",
      icon: "fa-file-edit",
      link: "/personalspot/resume",
    },
    {
      title: "Task Board",
      icon: "fa-tasks",
      link: "/personalspot/taskboard",
    },
    {
      title: "Profile",
      icon: "fa-user",
      link: "/personalspot/profile_listing",
    },
    {
      title: "Settings",
      icon: "fa-cog",
      link: "/personalspot/settings",
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
