import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../utils/fetchAPI';
import { Category, Videos } from './index';

const MainConts = () => {
  const [selectCategory, setSelectCaegory] = useState("우왁굳의 게임방송")
  const [videos, setVideos] = useState{null}

  useEffect(() => {
    fetchAPI(`searc?part=snippet&q=우왁굳의 게임방송`).then((data) => 
      console.log(data)
    ) 
  }, []);

  return (
    <main id='main'>
      <aside id='aside'>
        <Category selectCategory={selectCategory} setSelectCaegory={setSelectCaegory} />
      </aside>
      <section id='contents'>
        <h2>
          <em>{selectCategory}</em>
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts