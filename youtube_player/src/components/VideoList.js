import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = ({videos, onVideoSelect}) => {

	const videoItems = videos.map((v) => (
		<VideoListItem key={v.etag} video={v} onVideoSelect={onVideoSelect}/>
	))

	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	)

}

export default VideoList;
