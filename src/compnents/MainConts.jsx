import React, { useState } from 'react'
import { Category, Videos } from './index';

const MainConts = () => {
  const [selectCategory, setSelectCaegory] = useState("우왁굳의 게임방송")

  return (
    <main id='main'>
      <aside id='aside'>
        <Category selectCategory={selectCategory} setSelectCaegory={setSelectCaegory} />
      </aside>
      <section id='contents'>
        <h2>
          <em>{selectCategory}</em>
        </h2>
        <Videos />
      </section>
    </main>
  )
}

export default MainConts