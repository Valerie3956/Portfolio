import { useState } from 'react'
import portfolio from './portfolio'
import PortfolioList from './portfolioList'


export default function App() {

const portfolioItems = portfolio.map(item => {
  return(
    <PortfolioList 
    name = {item.name}
    framework = {item.Framework}
    screenshots = {item.screenshots}
    img1 = {item.screenshots[0]}
    img2 = {item.screenshots[1]}
    img3 = {item.screenshots[2]}
    link = {item.link}
    live = {item.live}
    />
  )
})

  return (
    <>
      {portfolioItems}
    </>
  )
}


