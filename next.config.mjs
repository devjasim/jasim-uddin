/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: process.env.NODE_ENV !== 'development',
    output: 'standalone',
    cleanDistDir: true,
    poweredByHeader: false,
    compress: true,
    generateEtags: true,
    pageExtensions: ['tsx', 'ts'],
};
export default nextConfig;
