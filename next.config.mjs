import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow only the hosts you actually use, e.g.
    // { protocol: 'https', hostname: 'images.example.com', pathname: '/**' }
    remotePatterns: []
  },
  reactStrictMode: true
};

export default withPlaiceholder(nextConfig);
