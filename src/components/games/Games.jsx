import React, { useContext, useEffect } from 'react'
import GamesContext from '../../context/gameContext'
import Card from '../card/Card'
import './games.css'

const Games = () => {
  const gameContext = useContext(GamesContext)
  const { games, getGames, search } = gameContext

  const data = [...games, ...search]

  console.log(search)
  useEffect(() => {
    getGames()
    // eslint-disable-next-line
  }, [])

  const renderItem = (game, index) => {
    return <Card game={game} key={index} />
  }
  return (
    <div className='gameContainer'>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default Games
