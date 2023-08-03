import React from 'react'
import './App.css'
import Header from './header/Header'
import ContactUs from './contact-us/ContactUs'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  )
}
export default App