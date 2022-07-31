import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig, Sequence, spring, getInputProps} from 'remotion';

const subtitle: React.CSSProperties = {
	fontSize: 40,
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red'
};

const Text: React.FC = () => {
	const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

  const scale = spring({
    fps,
    from: 0,
    to: 5,
    frame: frame - 32,
    durationInFrames: 300,
  });

  const { titleText, titleColor } = getInputProps();
  
  return (
    <Sequence name='text' from={0} durationInFrames={300}>
      <Sequence name='sample text' from={0} durationInFrames={32}>
        <div style={{...subtitle, opacity, color: titleColor || 'red'}}>
          {titleText || 'Sample Text'}
        </div>
      </Sequence>
      <Sequence name='frame text' from={32}>
        <div style={{...subtitle, transform: `scale(${scale})`}}>
          frame {frame}
        </div>
      </Sequence>
    </Sequence>
  );
};

export default Text;