import React, { useState, useRef } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");
  const exploreMenuRef = useRef(null);

  const scrollToExploreMenu = () => {
    exploreMenuRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <Header scrollToExploreMenu={scrollToExploreMenu}/>
      <div ref={exploreMenuRef}>
        <ExploreMenu category={category} setCategory={setCategory}/>
      </div>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
 