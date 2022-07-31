import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig, Sequence, spring, getInputProps} from 'remotion';

const style: React.CSSProperties = {
	fontSize: 40,
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
  textOverflow: 'hidden',
  wordWrap: 'unset'
};

const Text: React.FC = () => {
	const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const fadeInStartFrame = 0;
	const fadeIn = interpolate(frame - fadeInStartFrame, [0, 30], [0, 1]);
  const fadeOutStartFrame = 32
	const fadeOut = interpolate(frame - fadeOutStartFrame, [0, 30], [1, 0]);

  const scaleStartFrame = 150
  const scale = spring({
    fps,
    from: 0,
    to: 5,
    frame: frame - scaleStartFrame,
    durationInFrames: 32,
  });

  const scrollStartFrame = 150;
	const scrollX = interpolate(frame - scrollStartFrame, [0, 128], [-width, width]);

  let { 
    titleText='Relax', 
    titleColor='blue' 
  } = getInputProps();
  
  return (
    <Sequence name='text' from={0} durationInFrames={300}>
      <Sequence name='fade in text' from={0} durationInFrames={fadeOutStartFrame}>
        <div style={{...style, opacity: fadeIn, color: titleColor}}>
          {titleText}
        </div>
      </Sequence>
      <Sequence name='fade out text' from={fadeOutStartFrame} durationInFrames={fadeOutStartFrame - fadeInStartFrame}>
        <div style={{...style, opacity: fadeOut, color: titleColor}}>
          {titleText}
        </div>
      </Sequence>
      <Sequence name='scale text' from={scaleStartFrame} durationInFrames={64}>
        <div style={{
          ...style, 
          transform: `scale(${scale})`,
          position: 'fixed',
          top: height * 0.75,
          width: '100%',
          color: titleColor
      }}>
        {titleText}
        </div>
      </Sequence>
      <Sequence name='scroll text' from={scrollStartFrame} durationInFrames={128}>
        <div style={{
          ...style, 
          position: 'fixed',
          top: height * 0.25,
          left: scrollX,
          width: '100%',
          fontSize: 96,
          color: titleColor
        }}>
          {titleText}
        </div>
      </Sequence>
    </Sequence>
  );
};

export default Text;