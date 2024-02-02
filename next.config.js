/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.wixmp.com**',
            },
            {
                protocol: 'https',
                hostname: '**.shutterstock.com**',
            },
            {
                protocol: 'https',
                hostname: '**.vecteezy.com**',
            },
            {
                protocol: 'https',
                hostname: '**.freepik.com**',
            },
        ],
    },
}

module.exports = nextConfig
