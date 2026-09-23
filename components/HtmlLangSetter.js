"use client";
import { useEffect } from "react";

// The root layout must declare one static <html> tag (Next.js
// requirement), so we patch its lang/dir attributes on the client once
// we know which /[lang]/ route is active — mirroring what the original
// single-page site did with document.documentElement.
export default function HtmlLangSetter({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("bf_lang", lang);
    } catch (e) {}
  }, [lang]);
  return null;
}
