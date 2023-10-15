import { useState } from 'react'
import './App.css'
import Tesla from './MyComponents/tesla.jsx';
import MoonLight from './MyComponents/moonLight.jsx';
import Build from './MyComponents/building';

function App() {
  return (
    <>
      <div className='container'>
        <Tesla/>
        <MoonLight/>
        <Build/>
      </div>
    </>
  )
}

export default App;
