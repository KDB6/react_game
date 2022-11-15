import React from 'react'
import { Category, Videos } from './index';

const MainConts = () => {
  return (
    <main id='main'>
      <aside id='aside'>
        <Category />
      </aside>
      <section id='contents'>
        <h2>
          <em>??</em>Youtuber
        </h2>
        <Videos />
      </section>
    </main>
  )
}

export default MainConts