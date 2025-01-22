import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Category from "../components/Category"
import Gift from "../components/Gift"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"

const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Gift/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default home