import NavbarFb from './NavbarFb'
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'
import { ThemeContext } from '../c12-useRef-useContext-20-oct-25/ThemeContext'
import { useContext } from 'react'
const FbHomePage = () => {
  const {theme} = useContext(ThemeContext);
  
    const style={
      background:theme=="light"?"#000":"#fff",
      color:theme=="light"?"#fff":"#000",
       transition: "all 0.3s ease",
    }
  return (
//react fragmentatio we can put multiple divs wihtin this main empty div
    <div style={style}>
    <div>
    <NavbarFb/>
    </div>
   <div className=" flex gap-6 ">
  <LeftSidebar/>
  <MainContent/>
  <RightSidebar/>
  
</div>


    
    </div>
      
  )
}

export default FbHomePage
