import { Link } from "react-router-dom";
import Video from "./Video";
import useVideoList from "../hooks/useVideoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {

	const [page, setPage] = useState(1);
  	const { loading, error, videos, hasMore } = useVideoList(page);

	console.log("Rendered Videos");
	console.log(page);
	console.log(error);
	console.log(videos);
	console.log(hasMore);
	
	return (
		<div>
			{videos.length > 0 && (
				<InfiniteScroll
				dataLength={videos.length}
				hasMore={hasMore}
				next={() => setPage(page + 8)}
				>
					{videos.map((video) =>
						video.noq > 0 ? (
						<Link to="/quiz" key={Math.random()}>
							<Video
							title={video.title}
							id={video.youtubeID}
							noq={video.noq}
							/>
						</Link>
						) : (
						<Video title={video.title} id={video.youtubeID} noq={video.noq} />
						)
					)}
				</InfiniteScroll>
			)}
			{!loading && videos.length === 0 && <div>No data found!</div>}
			{error && <div>There was an error!</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}