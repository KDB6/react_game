import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VidoeConts = () => {
  const [ vidoeDetail, setVideoDetail ] = useState(null);
  const [ video, setVideos ] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippert,statistics$id=${id}`)
    .then((data) => setVideoDetail(data.items[0])
    )

    fetchAPI(`serach?part=snipper&relatedToVideoid=${id}&type=video`)
    .then((data) => setVideos(data.items)
    )
  }, [id]);

  // const {
  //   snippet  : {title, channelId, channelTitle},
  //   statistics : {viewCount, likeCount}
  // } = vidoeDetail

  return (
    <section className='video'>
      <div className="video__top">
        <div className='video__view'>
          <div className="play">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            controls />
            <h2>지식한입</h2>
          </div>
        </div>

        <div className="video__list">
          <div className="list"></div>
        </div>
        <div className="video__title">

        </div>
      </div>
      
    </section>
  )
}

export default VidoeConts