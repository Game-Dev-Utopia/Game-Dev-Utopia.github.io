/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
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
                hostname: '',
                pathname: '**'
            }
        ]
    }
}

module.exports = nextConfig
