/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ["antd", "@ant-design", "@ant-design/icons", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
    // distDir: 'build',
    output: 'export',
    // trailingSlash: true
};

module.exports = nextConfig;