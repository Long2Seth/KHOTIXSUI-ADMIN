const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "khotixs.devkh.asia",
            },
        ],
    },
};

export default nextConfig;