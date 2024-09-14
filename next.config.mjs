/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'brainsbing.com'
            }
        ]
    }
};

export default nextConfig;
