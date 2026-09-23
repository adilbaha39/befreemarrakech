/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain HTML/CSS/JS "out/" folder,
  // deployable to GitHub Pages, Vercel, Netlify, or any static host.
  output: "export",
  images: {
    // next/image optimization needs a server. On a static export it is
    // disabled by default; images are still served as-is (no crashes),
    // just without on-the-fly resizing. Deploying to Vercel instead of
    // GitHub Pages removes this limitation (drop output: "export" there).
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
