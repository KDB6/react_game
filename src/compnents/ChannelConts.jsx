import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/fetchAPI';
import { useParams } from 'react-router-dom';

import { Videos } from './';

const ChannelConts = () => {
  const [ channelDetail, setchannelDetail ] = useState();
  const [ videos, setVideos ] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)
      setchannelDetail(data?.items[0])

    const videosData = await fetchAPI(
      `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id]);

  return (
    <section id='channelConts'>
      <div className='channel-header' style={{backgroundImage:`url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`}}>
      </div>
      <div className='channel-info'>
        <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt="" />
        <h2>{channelDetail?.snippet?.title}</h2>
      </div>
      <div className='channel-info2'>
        <h3>구독자 수 : {channelDetail?.statistics?.subscriberCount}</h3>
        <h3>총 비디오 갯수 : {channelDetail?.statistics?.videoCount}</h3>
        <h3>비디오 카운트 : {channelDetail?.statistics?.viewCount}</h3>
      </div>
      <div className='channel-videos'>
        <Videos videos={videos}/>
      </div>
    </section>
  )
}

export default ChannelConts