import { GlobalStyle } from "./global.styles";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing-page/landing-page.component";
import Registration from "./components/registration/registration.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
