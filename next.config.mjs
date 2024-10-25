/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gecskp.ac.in',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
    
};

  
export default nextConfig;
