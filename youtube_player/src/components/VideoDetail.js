import React from 'react'

const VideoDetail = ({video}) => {
	if (!video) return <p></p>
	const { title, description } = video.snippet
	const { videoId } = video.id
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{title}</div>
				<div>{description}</div>
			</div>
		</div>
	)
}

export default VideoDetail;
