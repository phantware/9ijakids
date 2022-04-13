import React from 'react'
import './card.css'

const Card = ({ game }) => {
  const { GameImage, GameTitle, GameDescription } = game
  return (
    <div className='card-container'>
      <div className='game-wrapper'>
        <img src={GameImage} alt='gameImage' className='cardImg' />
        <div className='card-wrapper'>
          <h3 className='title'>{GameTitle}</h3>
          <p>{GameDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
