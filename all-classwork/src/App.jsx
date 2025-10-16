
import { Route,Routes } from 'react-router-dom'
import Navbar from './c7-routing-component-8-oct-25/Navbar'
import Home from './c7-routing-component-8-oct-25/Home'
import Propsstate from './c5-props-state-3-oct-25/propsstate'
import Footer from './c7-routing-component-8-oct-25/Footer'
import Cars from './c7-dropdown/Cars'
import Trucks from './c7-dropdown/Trucks'
import Bikes from './c7-dropdown/Bikes'
import FbHomePage from './components-fb-home-page/FbHomePage'
import Props from './c7-routing-component-8-oct-25/Props'
import UseEffect from './c7-routing-component-8-oct-25/UseEffect'
import Form from './c10-form(useState)-useContext-15-oct-25/Form'
import UseEffectc9 from './c9-previous-revision-useeffect-13-oct-25/UseEffectc9'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='counter' element={<Propsstate/>}></Route>
        
        <Route path='props' element={<Props/>}></Route>
        <Route path='fbhomepage' element={<FbHomePage/>}></Route>

        <Route path='useeffect' element={<UseEffect/>}></Route>
        <Route path='cars' element={<Cars/>}></Route>
        <Route path='bikes' element={<Bikes/>}></Route>
         <Route path='trucks' element={<Trucks/>}></Route>
          <Route path='form' element={<Form/>}></Route>
          <Route path='c9useeffect' element={<UseEffectc9 data= {'Asad'}/>}></Route>
          
      </Routes>
      <Footer/>
      
      



  </>
  )
}

export default App
