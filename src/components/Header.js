import React from 'react'
import trollface from '../images/troll-face.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={trollface} alt='meme--photos' className='header--img' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header-title'>React Course - Project 3</h4>
    </header>
  )
}

export default Header
