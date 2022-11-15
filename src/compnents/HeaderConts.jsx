import React from 'react'

import { AiFillYoutube } from 'react-icons/ai';
import { SearchBar } from './';

const HeaderConts = () => {
  return (
    <header id='header'>
      <h1 className='logo'><AiFillYoutube className='icon' />Dev Youtube</h1>
      <SearchBar />
    </header>
  )
}

export default HeaderConts