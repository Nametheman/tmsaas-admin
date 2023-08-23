import React from 'react'
import Homepage from './Homepage/Homepage'
import Sidebar from './Sidebar/Sidebar'

const Home = () => {
  return (
    <main className="container">
        <Sidebar/>
       <Homepage/>

    </main>
  )
}

export default Home