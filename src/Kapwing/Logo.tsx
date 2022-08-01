import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SkiaCanvas } from "@remotion/skia";
import {RoundedRect, Group, Text} from "@shopify/react-native-skia";
 
const Colors = {
    cyan: "#53e4dc",
    yellow: "#e5a529",
    pink: "#f35d93"
}

const Logo: React.FC = () => {
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
    frame: frame,
    durationInFrames: 1 * fps,
  });

  const left = spring({
    fps,
    from: 0,
    to: 1,
    frame: frame - (1 * fps),
    durationInFrames: 1 * fps,
  });

  x -= left * width / 3;

  return (
    <SkiaCanvas width={width} height={height}>
        <Group transform={[{ scale }]} origin={{ x: width / 2, y: height / 2 }}>
            <RoundedRect
                x={x + layerPadding + (logoWidth * 0.5) - layerPadding}
                y={y + layerPadding}
                width={(logoWidth * 0.5) + layerPadding}
                height={layerHeight}
                r={borderRadius}
                color={Colors.yellow}
            />
            <RoundedRect
                x={x + layerPadding}
                y={y + layerPadding + layerHeight + layerPadding}
                width={logoWidth}
                height={layerHeight}
                r={borderRadius}
                color={Colors.cyan}
            />
            <RoundedRect
                x={x + layerPadding}
                y={y + (2 * (layerPadding + layerHeight)) + layerPadding}
                width={(logoWidth * 0.5) - layerPadding}
                height={layerHeight}
                r={borderRadius}
                color={Colors.cyan}
            />
            <RoundedRect
                x={x + layerPadding + (logoWidth * 0.5)}
                y={y + (2 * (layerPadding + layerHeight)) + layerPadding}
                width={logoWidth / 4}
                height={layerHeight}
                r={borderRadius}
                color={Colors.pink}
            />
        </Group>
    </SkiaCanvas>
  );
};

export default Logo;