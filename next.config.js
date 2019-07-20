const withMDX = require("@next/mdx");

/* --- Next.js Configuration -------------------------------- */

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  target: "serverless",
  webpack(config) {
    // Markdown & MDX support
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: ["babel-loader", "@mdx-js/loader"]
    });
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
