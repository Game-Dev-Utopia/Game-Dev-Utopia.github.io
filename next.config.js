/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'st.depositphotos.com',
                port: '',
                pathname: '/1000141/3111/i/450/depositphotos_31113585-stock-photo-apple-with-slice.jpg',
            },
        ],
    },
}

module.exports = nextConfig
