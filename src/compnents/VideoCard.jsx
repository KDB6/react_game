import React from 'react'
import { Link } from 'react';

const VideoCard = ({ video: {id: {videoId}, snippet }}) => {
  return (
    <>
      <div className='box'>
        {/* <Link to={`/video/${videoId}`}> */}
          <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        {/* </Link> */}
      </div>
      <div className='title'>
        {/* <Link to={`/video/${videoId}`}> */}
          <h2>{snippet?.title}</h2>
        {/* </Link> */}
      </div>
    </>
  )
}

export default VideoCard