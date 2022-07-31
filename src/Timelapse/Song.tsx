import { Audio, staticFile, useVideoConfig } from "remotion";

const Song: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();
  // clip audio to startTime + duration in frames
  const startTime = 60;
  const startFrame = startTime * fps;
  return (
    <Audio 
      src={staticFile(`/audio/relax.mp3`)}
      startFrom={startFrame}
      endAt={durationInFrames + startFrame}
    />
  );
};

export default Song;