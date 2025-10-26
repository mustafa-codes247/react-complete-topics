
import { Route,Routes } from 'react-router-dom'
import {useContext } from "react";
import Navbar from './c7-routing-component-8-oct-25/Navbar'
import Home from './c7-routing-component-8-oct-25/Home'
import Propsstate from './c5-props-state-3-oct-25/Propsstate'
import Footer from './c7-routing-component-8-oct-25/Footer'
import Cars from './c7-dropdown/Cars'
import Trucks from './c7-dropdown/Trucks'
import FbHomePage from './components-fb-home-page/FbHomePage'
import Props from './c7-routing-component-8-oct-25/Props'
import UseEffect from './c7-routing-component-8-oct-25/UseEffect'
import Form from './c10-11-form(useState)-useContext-15-oct-25/Form'
import UseEffectc9 from './c9-previous-revision-useeffect-13-oct-25/UseEffectc9'
import { ThemeContext } from './c12-useRef-useContext-20-oct-25/ThemeContext'
import C12Main from './c12-useRef-useContext-20-oct-25/C12Main'


const App = () => {
  
   // using the useContext that was made in c12 to manage the state globally
  const {theme}=useContext(ThemeContext); 
  
  // making the object for light/dark theme styling:
  const style={
    background:theme=="light"?"#000":"#fff",
    color:theme=="light"?"#fff":"#000",
     transition: "all 0.3s ease",
  }
  return (
    <div style={style}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='counter' element={<Propsstate/>}></Route>
        
        <Route path='props' element={<Props/>}></Route>
        <Route path='fbhomepage' element={<FbHomePage/>}></Route>

        <Route path='useeffect' element={<UseEffect/>}></Route>
        <Route path='cars' element={<Cars/>}></Route>
         <Route path='trucks' element={<Trucks/>}></Route>
          <Route path='form' element={<Form/>}></Route>
          <Route path='c9useeffect' element={<UseEffectc9 data= {'Asad'}/>}></Route>
          <Route path='c12useref-usecontext' element={<C12Main/>}></Route>
          <Route path='c14redux' element={<Counter/>}></Route>
          
          
      </Routes>
      <Footer/>

  </div>
  )
}

export default App
