import React, { useState } from 'react'
import Games from './components/Games'
import GameState from './context/GameState'
import Home from './pages/home/Home'

function App() {
  return (
    <GameState>
      <Home />
      <Games />
    </GameState>
  )
}

export default App
