import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Videos, Loader } from './'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VideoConts = () => {
  const [ videoDetail, setVideoDetail ] = useState(null);
  const [ videos, setVideos ] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items)
    )
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <section className='video'>
      <div className="video__top">
        <div className="video__info">
          <div className='video__view'>
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls />
            </div>
          </div>

          <div className="video__title">
            <div className="title">
              {title}
              <div className='count'>
                <div className="viewCount">조회 수 : {viewCount}회</div>
                <div className="likeCount">♥ : {likeCount}개</div>
              </div>
            </div>
            <div className="channelTitle">{channelTitle}</div>
            <div className="channelId">
              <Link to={`/channel/${channelId}`}>채널 : {channelId}</Link>
            </div> 
          </div>
        </div>

        <div className="video__list"> 
          <div className="list">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default VideoConts