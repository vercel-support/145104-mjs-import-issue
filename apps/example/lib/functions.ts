export function getRewrites() {
  const rewriteFiles = [
    "ads.txt",
  ];

  const rewrites = rewriteFiles.map((f) => {
    return {
      source: `/${f}`,
      destination: `/test/${f}`,
    };
  });

  return rewrites;
}
