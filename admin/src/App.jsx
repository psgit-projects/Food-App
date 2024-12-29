import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
        <Navbar></Navbar>
        <hr />
        <div className="app-c">
            <Sidebar></Sidebar>
        </div>
    </div>
  )
}

export default App