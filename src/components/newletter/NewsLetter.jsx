import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newLetterContainer'>
      <div className='leftNewContainer'>
        <div className='newLetterImage'>
          <img
            src='assets/images/Newsletter.png'
            alt=''
            className='newLetterImg'
          />
        </div>
      </div>
      <div className='rightNewContainer'>
        <div className='rightNewsDiv'>
          <h4 className='subscribe'>Subscribe now</h4>
          <h2 className='beInTouch'>Be in the know...</h2>
        </div>
        <div className='subscribe2'>
          <i className='fas fa-envelope subscribe2Icon'></i>
          <input
            type='text'
            placeholder='Enter email address'
            className='subscribe2Email'
          />
          <button className='subscribe3'>subscribe now</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
