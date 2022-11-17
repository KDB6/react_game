import React from 'react'
import { ChannelCard, VideoCard, Loader } from './';

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />

  return (
    <article className='videos__inner'>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </div>
      ))}
    </article>
  )
}

export default Videos