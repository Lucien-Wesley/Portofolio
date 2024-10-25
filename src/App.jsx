// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import Portofolio from './components/Portofolio'
const App = () => {
  return (
    <div>
        <Header />
        <main>
          <Hero/>
          <Portofolio/>
          
          <div className="h-96"></div>
        </main>
    </div>
  )
}

export default App