import { useState, useEffect } from "react";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import "./styles/profile.css"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PersonalSpotProfileListingPage() {
  useEffect(() => {}, []);
  const axiosPrivate = useAxiosPrivate();

  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data from API or local storage
    const fetchProfileData = async () => {
      try {
        const response = await axiosPrivate.get(
          "http://localhost:5000/user/profile",
          { email: "leopoldo.price@hotmail.com" },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("Profile data fetched:", response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="profile-listing" style={{ padding: "0px 20px" }}>
      <h2>Profile Listing Page</h2>
      <span onClick={() => navigate("/add_new_profile")}>Add New</span>
      {formData.map((profile: any, index: number) => (
        <div typeof="button" className="item" key={index}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              variant="link"
              onClick={() => {
                navigate("/profile_details", { state: { profile } });
              }}
            >
              Edit Profile
            </Button>
            <Button
              variant="link"
              onClick={() => {
                navigate("/resume_editor", { state: { profile } });
              }}
            >
              Create Resume
            </Button>
          </div>
          <h3>{profile.name}</h3>
          <p>Phone: {profile.phoneNumber}</p>
          <p>Email: {profile.email}</p>
          <p>About You: {profile.aboutYou}</p>
          <p>Education: {profile.education}</p>
          <p>Address: {profile.address}</p>
          <p>Skills: {profile.skills}</p>
          <p>Experience: {profile.experience}</p>
        </div>
      ))}
    </div>
  );
}
