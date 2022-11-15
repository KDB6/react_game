import React from 'react'

import { SiEpicgames } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';

const HeaderConts = () => {
  return (
    <header id='header'>
      <h1 className='logo'><SiEpicgames className='icon' />Dev Game</h1>
      <div className='search'>
        <label className='glass' htmlFor="searchInput">
          <AiOutlineSearch />
        </label>
        <input type="text" id='sarchInput' className='inout__search' placeholder='게임을 검색해보세요.' title='검색' />
      </div>
    </header>
  )
}

export default HeaderConts