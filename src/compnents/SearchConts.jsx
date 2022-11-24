import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Category } from './'

const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState(null)
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}}&type=video`).then((data) =>
    setVideos(data.items)
    ) 
  }, [selectCategory]);

  return (
    <main id="main">
      <aside id='aside'>
        <Category selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </aside>
    <section id="contents">
      <div className="result"><span>{searchTerm}</span> 검색 결과입니다.</div>
      <Videos videos={videos} />
    </section>
    </main>
  )
}
export default SearchConts