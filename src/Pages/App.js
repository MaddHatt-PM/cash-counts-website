import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage/HomePage";
import PrivacyPolicyPage from "./PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;