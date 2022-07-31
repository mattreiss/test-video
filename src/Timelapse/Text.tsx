import React from 'react';
import {interpolate, useCurrentFrame, Sequence} from 'remotion';

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
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
    <Sequence name='text' from={0} durationInFrames={300}>
      <Sequence name='frame text' from={0} durationInFrames={32}>
        <div style={{...subtitle, opacity}}>
          Sample Text
        </div>
      </Sequence>
      <Sequence name='sample text' from={32}>
        <div style={{...subtitle, opacity}}>
          frame {frame}
        </div>
      </Sequence>
    </Sequence>
	);
};

export default Text;