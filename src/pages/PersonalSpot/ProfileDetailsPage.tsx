import { useState, useEffect } from "react";
import TextField from "../../components/common/atom/text-input";
import TextAreaField from "../../components/common/atom/text-area-input";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./styles/profile.css";
import { useLocation } from "react-router-dom";

export default function PersonalSpotProfileDetailsPage() {
  useEffect(() => {}, []);
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const { profile } = location.state;

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    aboutYou: "",
    education: "",
    address: "",
    skills: "",
    experience: "",
  });

  useEffect(() => {
    console.log("Profile from state:", profile);
    setFormData(profile);
  }, [profile]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // console.log("Change event:", event.target.value);
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log(event.target);
    try {
      const response = await axiosPrivate.post(
        `http://127.0.0.1:5000/update_profile/${profile._id}`,

        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
    } catch (err: any) {
      console.log(err);
    }

    console.log("Form submitted TO API with data:", formData);
  };

  const resetHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form reset");
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      aboutYou: "",
      education: "",
      address: "",
      skills: "",
      experience: "",
    });
  };
  return (
    <div className="profile-form form-wrapper" style={{ padding: "0px 20px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
          console.log("Form submitted");
        }}
        onReset={(e) => {
          e.preventDefault();
          resetHandler(e);
          e.currentTarget.reset();
          console.log("Form reset");
        }}
      >
        <div className="input-group">
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.name}
              label="Name"
              type="text"
              onChange={(event) => onChangeHandler(event)}
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              placeholder="Enter your username"
              // required
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={1}
              cols={30}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="name"
            />
          </div>
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.phoneNumber}
              label="Phone Number"
              type="number"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={4}
              cols={50}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="phoneNumber"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-item">
            <TextAreaField
              defaultValue=""
              value={formData.aboutYou}
              label="About You"
              onChange={(event) => onChangeHandler(event)}
              required={false}
              autoFocus={false}
              maxLength={200}
              minLength={10}
              readOnly={false}
              rows={4}
              cols={40}
              className="text-area-input"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                width: "100%",
                minHeight: "60px",
                overflowY: "auto",
                borderRadius: "4px",
              }}
              id="profile-bio-input"
              name="aboutYou"
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.email}
              label="Email"
              type="email"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={4}
              cols={50}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="email"
            />
          </div>
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.education}
              label="Education"
              type="text"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={1}
              cols={30}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="education"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.address}
              label="Address"
              type="text"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={1}
              cols={30}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="address"
            />
          </div>
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.skills}
              label="Skills"
              type="text"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={1}
              cols={30}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="skills"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-item">
            <TextField
              defaultValue=""
              value={formData.experience}
              label="Experience"
              type="text"
              onChange={(event) => onChangeHandler(event)}
              autoFocus={false}
              autoComplete="username"
              maxLength={20}
              minLength={3}
              readOnly={false}
              rows={1}
              cols={30}
              className="text-input"
              style={{ border: "1px solid #ccc", padding: "8px" }}
              id="profile-username-input"
              name="experience"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-item">
            {/* Add more fields as necessary */}
            <button
              style={{ width: "100%" }}
              type="submit"
              className="submit-button primary-button"
            >
              Update Profile
            </button>
          </div>
          <div className="input-item">
            <button
              style={{ width: "100%" }}
              type="reset"
              className="reset-button"
            >
              Reset Profile
            </button>
          </div>
          {/* Add more buttons or actions as necessary */}
        </div>
      </form>
    </div>
  );
}
