import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://befreemarrakech.com"),
};

// This root layout only exists because Next.js requires exactly one
// <html>/<body> pair for the whole app. The real per-language <html
// lang="…" dir="…">, metadata, and JSON-LD all live one level down in
// app/[lang]/layout.js, which is where every actual page renders.
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
