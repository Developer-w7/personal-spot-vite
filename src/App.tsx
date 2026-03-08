import "./App.css";

import type { FC } from "react";
import ErrorBoundaryWrapper from "./components/common/elements/error-boundary/ErrorBoundary";
import ThemeOption from "./components/PersonalSpot/elements/theme-option/ThemeOption";
import Router from "./routes/";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
interface DummyProps {
  number: number;
}

const App: FC<DummyProps> = () => {
  return (
    <ErrorBoundaryWrapper>
      <ThemeOption themeName="light">
        {/* CUSTOM/THEMING */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeOption>
    </ErrorBoundaryWrapper>
  );
};
// reportWebVitals();
export default App;
