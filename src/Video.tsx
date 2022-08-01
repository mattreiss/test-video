import {Composition} from 'remotion';
import Kapwing from './Kapwing/Kapwing';
import SkateVideo from './SkateVideo/SkateVideo';
import Skia from './Skia/Skia';
import Timelapse from './Timelapse/Timelapse';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="TimelapseLandscape"
				component={Timelapse}
				durationInFrames={336}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="TimelapsePortrait"
				component={Timelapse}
				durationInFrames={336}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Skia"
				component={Skia}
				durationInFrames={336}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="SkateVideo"
				component={SkateVideo}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Kapwing"
				component={Kapwing}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
