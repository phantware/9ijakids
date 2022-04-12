import React, { useContext, useEffect } from 'react'
import GamesContext from '../context/gameContext'

const Games = () => {
  const gameContext = useContext(GamesContext)
  const { games, getGames } = gameContext
  useEffect(() => {
    getGames()
    // eslint-disable-next-line
  }, [])
  return <div></div>
}

export default Games
