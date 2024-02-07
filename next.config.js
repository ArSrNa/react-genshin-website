/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['tdesign-react'],
    // distDir: 'build',
    output: 'export',
    trailingSlash: true,
    reactStrictMode: false,
};

module.exports = nextConfig;