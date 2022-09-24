import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
	console.log("Rendered Quiz");
     
	return (
		<div>
			<h1>Pick three of your favorite Star Wars Flims</h1>
			<h4>Question can have multiple answers</h4>
			<Answers />
			<ProgressBar />
			<MiniPlayer />
		</div>
	);
}