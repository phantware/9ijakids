import React, { useContext, useEffect } from 'react'
import GamesContext from '../context/gameContext'
import Card from './Card'

const Games = () => {
  const gameContext = useContext(GamesContext)
  const { games, getGames } = gameContext
  useEffect(() => {
    getGames()
    // eslint-disable-next-line
  }, [])
  return (
    games &&
    games.map((game) => {
      return <Card game={game} />
    })
  )
}

export default Games
