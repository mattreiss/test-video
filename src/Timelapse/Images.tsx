import { Sequence, Img, useCurrentFrame, staticFile, useVideoConfig } from "remotion";
 
const Images: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const startTime = 0;
  const startFrame = startTime * fps;
  return (
    <Sequence name='images' from={startFrame} durationInFrames={durationInFrames}>
      <Img 
        src={staticFile(`/images/DSC0${9517 + frame}.JPG`)}
        style={{
          width,
          height,
          objectFit: 'contain'
        }}
      />
    </Sequence>
  );
};

export default Images;