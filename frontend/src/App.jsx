import React, { useState } from 'react'
import Nav from './components/navbar/nav'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PO from './pages/PlaceOrder/PO'
import Foooter from './components/Footer/Foooter'
import Login from './components/Login/Login'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}></Login>:<></>}
     <div className='App'>
      <Nav setShowLogin={setShowLogin}></Nav>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/cart' element={<Cart></Cart>}></Route>
       <Route path='/order' element={<PO></PO>}></Route>
    </Routes>
    </div>
    <br></br>
  <Foooter></Foooter>
    </>
   
  )
}

export default App



