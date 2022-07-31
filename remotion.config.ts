// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';
import { enableSkia } from "@remotion/skia/enable";

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);

Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
  return enableSkia(currentConfiguration);
});