import type { NextConfig } from 'next';

// const repoName = "hummer-box-andratx"; // Nombre exacto de tu repositorio en GitHub

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Evita problemas con imágenes en modo estático
  },
  // basePath: "/", // Se usa SOLO en producción
  // assetPrefix: "/"
  
};

export default nextConfig;
