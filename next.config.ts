import type { NextConfig } from 'next';

// const repoName = "hummer-box-andratx"; // Nombre exacto de tu repositorio en GitHub

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: false, // Evita problemas con imágenes en modo estático
    formats: ['image/webp'],
  },
  basePath: "",
  assetPrefix: ""
};

export default nextConfig;
