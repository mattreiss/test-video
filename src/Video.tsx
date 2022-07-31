import {Composition} from 'remotion';
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
		</>
	);
};
