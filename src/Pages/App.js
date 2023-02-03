import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Background } from "./App.styles";
import HomePage from "./HomePage/HomePage";
import PrivacyPolicyPage from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";

function App() {
  return (
    <Background>
      <NavigationBar />
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route exact path='/terms-of-service' element={<TermsOfService />} />
        </Routes>
      </HashRouter>
    </Background >
  )
}

export default App;