import { useRef, useState, useEffect, useId } from "react";
import TextField from "../../components/common/atom/text-input";
import TextAreaField from "../../components/common/atom/text-area-input";
import { axiosPrivate } from "../../api/axios";

import "./styles/profile.css"; // Assuming you have a CSS file for styling

export default function PersonalSpotProfile() {
  useEffect(() => {}, []);
  const unique: string = useId();

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
    // Fetch user profile data from API or local storage
    // const fetchProfileData = async () => {
    //   try {
    //     const response = await axiosPrivate.get("/user/profile");
    //     setFormData(response.data);
    //   } catch (error) {
    //     console.error("Error fetching profile data:", error);
    //   }
    // };
    // fetchProfileData();
  }, []);

  // Set form data with Faker or Hradcoded values for demonstration
  // This can be replaced with actual data fetching logic
  // const faker = require("faker");
  // setFormData({
  //   name: faker.name.findName(),
  //   phoneNumber: faker.phone.phoneNumber(),
  //   email: faker.internet.email(),
  //   aboutYou: faker.lorem.paragraph(),
  //   education: faker.lorem.sentence(),
  //   address: faker.address.streetAddress(),
  //   skills: faker.lorem.words(5),
  //   experience: faker.lorem.sentence(),
  // });

  //Plumber values
  useEffect(() => {
    setFormData({
      name: "John Doe",
      phoneNumber: "1234567890",
      email: "john@t.com",
      aboutYou: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      education: "Bachelor of Science in Computer Science",
      address: "123 Main St, Anytown, USA",
      skills: "JavaScript, React, Node.js",
      experience: "5 years of experience in web development",
    });
  }, []);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change event:", event.target.value);
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event.target);
    try {
      const response = await axiosPrivate.post(
        "http://127.0.0.1:5000/add_profile",

        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err: any) {
      console.log(err);
    }

    console.log("Form submitted");
  };

  const resetHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form reset");
  };
  return (
    <div className="profile-form form-wrapper" style={{ padding: "0px 20px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
          // Handle form submission logic here
          // For example, you can send the form data to an API or update the state
          // console.log("Form submitted with data:", formData);
          console.log("Form submitted");
        }}
        onReset={(e) => {
          e.preventDefault();
          resetHandler(e);
          // Handle form reset logic here
          // For example, you can clear the form data or reset the state
          // console.log("Form reset with data:", formData);
          // Reset the form fields to their initial values
          e.currentTarget.reset();
          // Optionally, you can also reset any state variables if needed
          console.log("Form reset");
        }}
      >
        {/* <TextField
        defaultValue=""
        label="Password"
        type="password"
        onChange={(v) => console.log(v)}
        // onBlur={(e) => console.log("Blur event:", e.target.value)}
        // onFocus={(e) => console.log("Focus event:", e.target.value)}
        placeholder="Enter your password"
        required
        autoFocus
        autoComplete="current-password"
        maxLength={20}
        minLength={8}
        pattern=".{8,20}"
        readOnly={false}
        rows={1}
        cols={30}
        className="text-input"
        style={{ border: "1px solid #ccc", padding: "8px" }}
        id="profile-password-input"
        name="profilePassword"
        onKeyDown={(e) => console.log("Key down:", e.key)}
        onKeyUp={(e) => console.log("Key up:", e.key)}
        onKeyPress={(e) => console.log("Key press:", e.key)}
        onClick={(e) => console.log("Input clicked:", e)}
        onMouseDown={(e) => console.log("Mouse down:", e)}
        onMouseUp={(e) => console.log("Mouse up:", e)}
        onMouseOver={(e) => console.log("Mouse over:", e)}
      /> */}

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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
              // required
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
              // placeholder="Tell us about yourself"
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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
              // required
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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
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
              // onBlur={(e) => console.log("Blur event:", e.target.value)}
              // onFocus={(e) => console.log("Focus event:", e.target.value)}
              // placeholder="Enter your username"
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
              Save Profile
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
