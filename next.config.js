/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['images.pexels.com']
    },
    env:{
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET
    }
}