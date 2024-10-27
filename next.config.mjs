/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [{hostname: "images.unsplash.com"},{hostname:"https://images.pexels.com"}]
    }
};

export default nextConfig;
