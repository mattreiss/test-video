import React from "react";
import { useCurrentFrame, useVideoConfig, spring, Sequence } from "remotion";
import Logo from "./Logo";
 
const Colors = {
    cyan: "#53e4dc",
    yellow: "#e5a529",
    pink: "#f35d93"
}

const Kapwing: React.FC = () => {
  const { fps, width, height } = useVideoConfig();
  const frame = useCurrentFrame();

  const logoWidth = 512;
  const layerHeight = logoWidth / 6;
  const layerPadding = layerHeight / 2;
  const borderRadius = layerHeight / 8;
  
  let x = (width / 2) - (logoWidth / 2);
  let y = (height / 2) - (logoWidth / 2);

  const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame: frame - (1 * fps),
    durationInFrames: 1 * fps,
  });

//   const right = spring({
//     fps,
//     from: 0,
//     to: 1,
//     frame: frame - (1 * fps),
//     durationInFrames: 1 * fps,
//   });

//   x += right * width / 50;

  return (
    <>
        <Sequence name='Kapwing' from={1 * fps}>
            <div style={{
                position: 'fixed',
                left: x,
                top: (height / 2) - (logoWidth / 2.5),
                transform: `scale(${scale})`,
                color: 'white',
                fontSize: layerHeight * 3.5,
                fontFamily: 'Raleway,sans-serif',
            }}>
                Kapwing
            </div>
        </Sequence>
        <Logo />
    </>
  );
};

export default Kapwing;