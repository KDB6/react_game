import React from 'react'
import { VideoCard, Loader } from './';

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />

  return (
    <article className='videos__inner'>
      {videos.map((item, idx) => (
        <div key={idx}>
          <VideoCard video={item} />
        </div>
      ))}
    </article>
  )
}

export default Videos