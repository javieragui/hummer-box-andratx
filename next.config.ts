import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = "HummerBoxAndratx"; // Nombre EXACTO de tu repositorio en GitHub

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Necesario para que GitHub Pages maneje imágenes sin optimización de Next.js
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

export default nextConfig;
