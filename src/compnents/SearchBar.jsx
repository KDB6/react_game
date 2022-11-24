import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <AiOutlineSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="원하시는 영상을 검색해주세요."
        title="검색"
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
export default SearchBar