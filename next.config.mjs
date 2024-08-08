/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/my-private-repo',
    output: 'export', // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
