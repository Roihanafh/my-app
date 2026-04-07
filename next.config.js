const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   turbopack: {
    // atur root ke folder ini agar Turbopack tidak menebak
    root: path.resolve(__dirname)
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com", 
        pathname: "/**",
      },
    ],
    domains: [
      'lh3.googleusercontent.com', // avatar Google
      'avatars.githubusercontent.com', // avatar GitHub
    ],
  },
}

module.exports = nextConfig
