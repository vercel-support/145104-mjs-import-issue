// NOTE: Loading function from a local file doesn't work
import { getRewrites } from "./lib/functions";

// NOTE: Using function defined within next.config.mjs works
// function getRewrites() {
//   const rewriteFiles = [
//     "ads.txt",
//   ];

//   const rewrites = rewriteFiles.map((f) => {
//     return {
//       source: `/${f}`,
//       destination: `/test/${f}`,
//     };
//   });

//   return rewrites;
// }

const rewrites = getRewrites();

export default {
  async rewrites() {
    return {
      beforeFiles: rewrites,
    };
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};
