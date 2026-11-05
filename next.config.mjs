/** @type {import('next').NextConfig} */
const nextConfig = {
  // 只有显式开启静态导出时才设置 output，
  // 平时 npm run dev 不启用（启用后 dev 会读不到 fallback-build-manifest.json 而整页 500）。
  output: process.env.STATIC_EXPORT === "1" ? "export" : undefined,
};

export default nextConfig;
