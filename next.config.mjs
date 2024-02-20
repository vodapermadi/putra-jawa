/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source:"/api/:path*",
                destination:"http://backend.python-newbie.net/API/:path*"
            }
        ]
    }
};

export default nextConfig;
