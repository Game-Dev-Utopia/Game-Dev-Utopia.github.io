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
                hostname: "github.com"
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
            {
                hostname: 'st.depositphotos.com',
                port: '',
                pathname: '/1000141/3111/i/450/depositphotos_31113585-stock-photo-apple-with-slice.jpg',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'gdu-data-bucket.s3.ap-south-1.amazonaws.com',
            },
            {
                protocol:'https',
                hostname:'gdu-data-bucket.s3.amazonaws.com'
            }
        ]
    }
}

module.exports = nextConfig