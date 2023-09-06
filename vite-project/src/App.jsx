import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import NavBar from './components/Navbar'
import {Originals,Action,Romance,Documentary} from './Urls'
import './App.css'
import Banner from './components/Banner/Banner'
import RawPost from './components/RawPost/RawPost'


function App() {
  return (
   <div className='App'>
    <NavBar/>
    <Banner/>
    <RawPost url={Originals} title='Netflix Originals'/>
    <RawPost url={Action} title='Action' isSmall/>
    <RawPost url={Romance} title='Romance' isSmall/>
    <RawPost url={Documentary} title='Documentary' isSmall/>
    </div>
  )
}

export default App
