// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import {registerRoot} from 'remotion';
import { LoadSkia } from "@shopify/react-native-skia/src/web";

(async () => {
  await LoadSkia();
  const { RemotionVideo } = await import("./Video");
  registerRoot(RemotionVideo);
})();