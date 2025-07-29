import React from 'react'
import ScreenshotEditor from './ScreenshotEditor'
import { Routes,Route } from 'react-router-dom'
import Hero from './Hero'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="/editor" element={<ScreenshotEditor/>}></Route>
    </Routes>
  )
}

export default App