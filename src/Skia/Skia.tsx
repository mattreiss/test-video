import React, { useEffect } from "react";
import { useVideoConfig } from "remotion";
import { SkiaCanvas } from "@remotion/skia";
import {Circle, LinearGradient, Group, vec} from "@shopify/react-native-skia";
 
const Skia: React.FC = () => {
  const { width, height } = useVideoConfig();
  const r = 128;
  return (
    <SkiaCanvas width={width} height={height}>
      <Circle cx={r} cy={r} r={r}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(2 * r, 2 * r)}
          colors={["#00ff87", "#60efff"]}
        />
      </Circle>
      <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </SkiaCanvas>
  );
};

export default Skia;