import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './c7-routing-component-8-oct-25/Navbar'
import About from './c7-routing-component-8-oct-25/About'
import Home from './c7-routing-component-8-oct-25/Home'
import Services from './c7-routing-component-8-oct-25/Services'
import Propsstate from './c5-props-state-3-oct-25/propsstate'
import Footer from './c7-routing-component-8-oct-25/Footer'
import Cars from './c7-landing-page-task/Cars'
import Trucks from './c7-landing-page-task/Trucks'
import Bikes from './c7-landing-page-task/Bikes'
import FbHomePage from './components-fb-home-page/FbHomePage'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='counter' element={<Propsstate/>}></Route>
        
        <Route path='about' element={<About/>}></Route>
        <Route path='fbhomepage' element={<FbHomePage/>}></Route>

        <Route path='services' element={<Services/>}></Route>
        <Route path='cars' element={<Cars/>}></Route>
        <Route path='bikes' element={<Bikes/>}></Route>
         <Route path='trucks' element={<Trucks/>}></Route>
      </Routes>
      <Footer/>
      
      
  

   {/* class 7 landing page task: */}


  </>
  )
}

export default App
