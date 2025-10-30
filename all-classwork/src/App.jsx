
import { Route,Routes } from 'react-router-dom'
import {useContext } from "react";
import Navbar from './c7-routing-component-8-oct-25/Navbar'
import Home from './c7-routing-component-8-oct-25/Home'
import Propsstate from './c5-props-state-3-oct-25/Propsstate'
import Footer from './c7-routing-component-8-oct-25/Footer'
import Cars from './c7-dropdown/Cars'
import Trucks from './c7-dropdown/Trucks'
import Props from './c7-routing-component-8-oct-25/Props'
import UseEffect from './c7-routing-component-8-oct-25/UseEffect'
import Form from './c10-11-form(useState)-useContext-15-oct-25/Form'
import UseEffectc9 from './c9-previous-revision-useeffect-13-oct-25/UseEffectc9'
import { ThemeContext } from './c12-useRef-useContext-20-oct-25/ThemeContext'
import C12Main from './c12-useRef-useContext-20-oct-25/C12Main'
import Counter from './c14-redux-toolkit-24-oct-25/Counter'
import HomePage from './c13-task2-handmadestore/pages/HomePage';

import FbHomePage from './components-fb-home-page/FbHomePage'

import BestSellerPage from './c13-task2-handmadestore/pages/BestSellerPage'
import CategoryPage from './c13-task2-handmadestore/pages/CategoryPage'
import AboutHandmade from './c13-task2-handmadestore/pages/AboutHandmade';
import CustomHook from './c15-custom-hooks-27-oct-25/CustomHook';
import NestedRouting from './c15-custom-hooks-27-oct-25/NestedRouting';
import Nesting1 from './c15-custom-hooks-27-oct-25/Nesting1';
import Nesting2 from './c15-custom-hooks-27-oct-25/Nesting2';


const App = () => {
  
   // using the useContext that was made in c12 to manage the state globally
  const {theme}=useContext(ThemeContext); 
  
  // making the object for light/dark theme styling:
  const style={
    background:theme=="light"?"#ffffffff":"#000",
    color:theme=="light"?"#000":"#ffff",
     transition: "all 0.3s ease",
  }
  return (
    <div style={style}>
      <Navbar/>
      <Routes>
        {/* class work links */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/counter' element={<Propsstate/>}></Route>
        <Route path='/props' element={<Props/>}></Route>
        <Route path='/useeffect' element={<UseEffect/>}></Route>
        <Route path='/cars' element={<Cars/>}></Route>
         <Route path='/trucks' element={<Trucks/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/c9useeffect' element={<UseEffectc9 data= {'Asad'}/>}></Route>
          <Route path='/c12useref-usecontext' element={<C12Main/>}></Route>
          <Route path='/c14redux' element={<Counter/>}></Route>
          <Route path='/c15customhook' element={<CustomHook/>}></Route>

          {/* for nested routing , the routed pages are settled within the main component */}
          <Route path='/c15nestedroutes' element={<NestedRouting/>}>
          <Route path='n1' element={<Nesting1/>}></Route>
          <Route path='n2' element={<Nesting2/>}></Route>
          </Route>
          


          
          
          

          {/* C7 fb home task link */}
          <Route path='fbhomepage' element={<FbHomePage/>}></Route>

          {/* C13 handmade soap taks link */}
          <Route path='c13handmadesoap' element={<HomePage/>}></Route>
          <Route path='hmbs' element={<BestSellerPage/>}></Route>
          <Route path='hmct' element={<CategoryPage/>}></Route>
          <Route path='hmab' element={<AboutHandmade/>}></Route>

          <Route path='/*' element={<h1> page not found</h1>
           }></Route>



          
      </Routes>
      <Footer/>

  </div>
  )
}

export default App
