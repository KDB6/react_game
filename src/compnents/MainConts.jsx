import React from 'react'
import { Category, Video } from './index';

const MainConts = () => {
  return (
    <main id='main'>
      <aside id='aside'>
        <Category />
      </aside>
      <section id='contents'>
        <Video />
      </section>
    </main>
  )
}

export default MainConts