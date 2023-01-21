import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;