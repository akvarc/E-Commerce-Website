import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import Newcollections from '../components/NewCollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const shop = () => {
  return (

    <div><Hero/>
    <Popular/>
    <Offers/>
    <Newcollections/>
    <Newsletter/>
   
    </div>
  )
}

export default shop