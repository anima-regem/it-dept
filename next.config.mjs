/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["gecskp.etlab.in"],
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
