import Script from "next/script";

// The bare "/" is not a real page — it exists only to send visitors and
// crawlers to the right language version. Google should index /fr, /ar,
// /en, /es directly (that's what robots.txt/sitemap.xml point to), so
// this route is marked noindex with its canonical pointed at /fr.
// Meta/title/link tags rendered here are hoisted into <head> by
// Next.js automatically — no need to declare our own <html>/<head>,
// the root layout.js already provides those.
export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/fr" },
};

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/fr/" />
      <p style={{ fontFamily: "sans-serif", padding: 40, textAlign: "center" }}>
        Redirection… <a href="/fr/">Cliquez ici si rien ne se passe</a>.
      </p>
      <Script id="lang-redirect" strategy="beforeInteractive">
        {`
          (function () {
            try {
              var supported = ["fr", "ar", "en", "es"];
              var saved = localStorage.getItem("bf_lang");
              var nav = (navigator.language || "fr").toLowerCase();
              var target = supported.indexOf(saved) !== -1 ? saved
                : nav.indexOf("ar") === 0 ? "ar"
                : nav.indexOf("en") === 0 ? "en"
                : nav.indexOf("es") === 0 ? "es"
                : "fr";
              window.location.replace("/" + target + "/");
            } catch (e) { window.location.replace("/fr/"); }
          })();
        `}
      </Script>
    </>
  );
}
