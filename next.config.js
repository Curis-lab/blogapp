/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['images.pexels.com'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "letsenhance.io",
            },
          ],
    },
    env:{
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET
    }
}