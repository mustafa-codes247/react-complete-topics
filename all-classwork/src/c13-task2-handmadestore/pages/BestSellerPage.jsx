import React from 'react'
import BestSeller from '../components/BestSeller'
import NavbarHandmade from '../components/NavbarHandmade'
import FooterHandmade from '../components/FooterHandmade'

const BestSellerPage = () => {
  return (
    <>
    <div>
      <NavbarHandmade/>
      <BestSeller limit={8} />
      <FooterHandmade/>
    </div>
    </>
  )
}

export default BestSellerPage
