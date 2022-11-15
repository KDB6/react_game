import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className='search'>
        <label className='glass' htmlFor="searchInput">
          <AiOutlineSearch />
        </label>
        <input type="text" id='sarchInput' className='inout__search' placeholder='영상을 검색해보세요.' title='검색' />
    </div>
  )
}

export default SearchBar