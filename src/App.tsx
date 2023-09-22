// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { useStateContext } from './context/ContextProvider'
import './App.css'
// Pages
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import ScrollToTop from './components/ScrollToTop'
import Home from './views/Home'
import Contact from './views/Contact'
import AboutUs from './views/AboutUs'
import Lazy from './views/Lazy'
import Furniture from './views/Furniture'
import Chandeliers from './views/Chandeliers'

// const Container = styled.div`
//   height: 100%;
//   background-color: red;
// `

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lazy" element={<Lazy />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/chandeliers" element={<Chandeliers />} />
            <Route path="/onama" element={<AboutUs />} />
            <Route path="/kontakt" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      {/* {notification && <p className='notification'>{notification}</p>} */}

    </div>
  )
}

export default App