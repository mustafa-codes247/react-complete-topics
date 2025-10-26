import React from 'react'
import NavbarHandmade from '../components/NavbarHandmade'
import Banner from '../components/Banner'
import FooterHandmade from '../components/FooterHandmade'
import BestSeller from '../components/BestSeller'

const HomePage = () => {
  return (
    <>
    <div>
       
        <NavbarHandmade/>
         <Banner/>
         <BestSeller limit={4}/>
         <FooterHandmade/>
         
    </div>
      
    </>
  )
}

export default HomePage
