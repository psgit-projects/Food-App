import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExpolreMenu/ExploreMenu'
import FoodDisplay from '../../components/Fooddisplay/FoodDisplay'
import Appdawn from '../../components/Appdawn/Appdawn'
const Home = () => {
  const [category,setCategory]= useState("All");
  return (

    <div>
        <Header></Header>
        <ExploreMenu category = {category} setCategory={setCategory}></ExploreMenu>
        <FoodDisplay category={category}></FoodDisplay>
        <Appdawn></Appdawn>
    </div>
  )
}

export default Home