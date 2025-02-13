import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = "hummer-box-andratx"; // Nombre exacto de tu repositorio en GitHub

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Evita problemas con imágenes en modo estático
  },
  basePath: isProd ? `/${repoName}` : '', // Se usa SOLO en producción
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;
