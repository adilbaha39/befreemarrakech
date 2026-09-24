/** @type {import('next').NextConfig} */
const nextConfig = {
  // Running on Vercel now (not GitHub Pages), and the admin dashboard
  // needs real server-side API routes (to talk to the GitHub API and
  // to gate /admin behind a password) — both require Vercel's normal
  // server runtime, so static export ("output: export") is dropped.
  // Vercel still pre-renders every page to static HTML at build time
  // wherever possible; only /api/admin/* and the /admin pages run
  // server-side per request.
  trailingSlash: true,
};

export default nextConfig;
