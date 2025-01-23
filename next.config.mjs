/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Add a rule for handling SVG files
    config.module.rules.push({
      test: /\.svg$/, // Matches .svg files
      use: [
        {
          loader: "@svgr/webpack", // Transforms SVGs into React components
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false, // Keep the viewBox attribute for scaling
                },
              ],
            },
          },
        },
      ],
    });

    // Ensure other image formats (e.g., PNG, JPG) are handled by the default loader
    return config;
  },
  images: {
    domains: ["your-domain.com"], // Add allowed external image domains here
  },
  async redirects() {
    return [
      {
        source: "/", // Redirect from the root path
        destination: "/shop", // Redirect to the /shop page
        permanent: true, // Indicates a permanent redirect (301 status)
      },
    ];
  },
};

export default nextConfig;
