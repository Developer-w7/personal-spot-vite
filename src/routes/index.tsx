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
import PersonalSpotLayout from "../pages/PersonalSpot/layout";
import PersonalSpotResumeManager from "../pages/PersonalSpot/resume-upload/ResumeUploader";
import PersonalSpotResumeEditor from "../pages/PersonalSpot/resume-editor/ResumeEditor";
import Login from "@/components/Login";
import Unauthorized from "@/components/Unauthorized";
import LinkPage from "@/components/LinkPage";
import RequireAuth from "@/components/RequireAuth";
import PersistLogin from "@/components/PersistLogin";
import PersonalSpotProfileDetailsPage from "../pages/PersonalSpot/ProfileDetailsPage";
import PersonalSpotProfileListingPage from "@/pages/PersonalSpot/ProfileListingPage";
import PersonalSpotAddNewProfilePage from "@/pages/PersonalSpot/AddNewProfile";

type DummyProps = {
  number?: number;
};

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
  Basic: "basic",
  Chess: "chess",
};

const Router: FC<DummyProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalSpotLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route path="home" element={<PersonalSpotHome />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route
              path="add_new_profile"
              element={<PersonalSpotAddNewProfilePage />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route
              path="profile_listing"
              element={<PersonalSpotProfileListingPage />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route
              path="profile_details"
              element={<PersonalSpotProfileDetailsPage />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route
              path="resume_editor"
              element={<PersonalSpotResumeEditor />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
            <Route path="resume" element={<PersonalSpotResumeManager />} />
          </Route>
        </Route>
        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
