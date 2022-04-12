import React from 'react'

const Card = ({ game }) => {
  const {
    GameDescription,
    GameImage,
    GameTitle,
    Group,
    Level,
    Subject,
    Topic,
  } = game
  return (
    game && (
      <div className='card-container'>
        <div className='card-wrapper'>
          <img src={GameImage} alt='game image' className='cardImg' />
          <h3 className='title'>{GameTitle}</h3>
        </div>
      </div>
    )
  )
}

export default Card
