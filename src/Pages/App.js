import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Background, Container, ScrollView } from "./App.styles";
import { GlobalStyle } from "./GlobalStyles";
import HomePage from "./HomePage/HomePage";
import PrivacyPolicyPage from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <NavigationBar /> */}
      <ScrollView>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route exact path='/terms-of-service' element={<TermsOfService />} />
          </Routes>
        </HashRouter>
      </ScrollView>
      <Background />
    </>
  )
}

export default App;