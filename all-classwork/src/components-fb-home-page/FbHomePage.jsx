import NavbarFb from './NavbarFb'
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'
import Navbar from '../c7-routing-component-8-oct-25/Navbar'

const FbHomePage = () => {
  return (
//react fragmentatio we can put multiple divs wihtin this main empty div
    <>
    <div>
    <NavbarFb/>
    </div>
   { <div className=" flex gap-6">
  <LeftSidebar/>
  <MainContent/>
  <RightSidebar/>
  
</div> }


    
    </>
      
  )
}

export default FbHomePage
