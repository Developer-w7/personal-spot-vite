import type { FC } from "react";
// import * as ReactDOM from "react-dom/client";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";

import "../App.css";
// import Layout from "../Layout";

// import Missing from "../Missing";
// import Login from "../components/Login";
// import Dashboard from '../components/chess';
// import RequireAuth from "../components/RequireAuth";

// import Dashboard from '../components/chess';

import PersonalSpotHome from "../pages/PersonalSpot/Home";
import PersonalSpotProfile from "../pages/PersonalSpot/Profile";
import PersonalSpotLayout from "../pages/PersonalSpot/layout";
import PersonalSpotResumeManager from "../pages/PersonalSpot/resume-upload/ResumeUploader";
import PersonalSpotResumeEditor from "../pages/PersonalSpot/resume-editor/ResumeEditor";

type DummyProps = {
  number?: number;
};

// const ROLES = {
//   User: 2001,
//   Editor: 1984,
//   Admin: 5150,
//   Basic: "basic",
//   Chess: "chess",
// };

const Router: FC<DummyProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalSpotLayout />}>
        <Route path="home" element={<PersonalSpotHome />} />
        <Route path="profile" element={<PersonalSpotProfile />} />
        <Route path="resume" element={<PersonalSpotResumeManager />} />
        <Route path="resume_editor" element={<PersonalSpotResumeEditor />} />
      </Route>
    </Routes>
  );
};

export default Router;
