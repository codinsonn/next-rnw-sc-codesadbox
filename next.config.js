const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {}
});

/* --- Next.js Configuration -------------------------------- */

const nextConfig = withMDX({
  target: "serverless",
  pageExtensions: ["js", "jsx", "mdx", "md"],
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
      module: "empty"
    };
    // Alias react-native
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "^react-native$": "react-native-web"
    };
    // Return edited config
    return config;
  }
});

/* --- Export Config -------------------------------------------- */

module.exports = nextConfig;
