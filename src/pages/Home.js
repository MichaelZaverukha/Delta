import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Content from '../components/Content/Content'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import { heroOne, heroTwo, heroThree } from '../data/HeroData'
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
      <Footer />
    </>
  )
}
