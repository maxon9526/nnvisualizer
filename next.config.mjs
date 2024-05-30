/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // can be set to development when running npm run dev
const nextConfig = {
    basePath : isProd ? '/nnvisualizer' : '',
    output: 'export',
    distDir: 'dist',
};

export default nextConfig;
