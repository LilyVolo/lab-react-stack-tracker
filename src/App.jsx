import "./App.css";

import technologiesJ from "./technologies.json";
import companiesJ from "./companies.json"
import { useState } from "react";
import {Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {
  const [technologies, setTechnologies] = useState(technologiesJ)

  const [companies, setCompanies] = useState(companiesJ)

  return (
    <div className="App">
     
      <h1>LAB | React Stack Tracker</h1>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage/>} />
      </Routes>
  
    </div>
  );
}

export default App;
