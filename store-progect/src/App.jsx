// import { useState } from 'react'
// import Header from './Components/Header'
// import CARD from './Components/Card'
// import Slider from "./Components/Slider"
// import Footer from './Components/Footer'
// import './slider.css'
// import DATA from './DATA'

// function App() {
//   const cards = DATA.map((ele, ind) =>{
//     return(
//         <CARD
//           key={ind}
//           {...ele}
//           className="card"
//         />
//     )
// })

//   return (
//     <div className="App">
//       <Header/>
//       <Slider/>
//       <section className='CARDS'>
//         {cards}
//       </section>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import { Route, Routes } from "react-router-dom"
import Page from "./Components/Page"
import About from "./Components/About";
import ContactUs from "./Components/ContactUs"
import Login from "./Components/login";
import Register from "./Components/register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/About" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
