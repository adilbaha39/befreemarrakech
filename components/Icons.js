export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.1c-.2.2-.4.2-.7 0-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 8.9 9 7.9 8.8 7.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.2 1 1-3.2-.2-.3C3.5 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9z" />
    </svg>
  );
}

export function Icon({ name, className }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", className };
  switch (name) {
    case "pin":
      return (<svg {...common}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.4" /></svg>);
    case "scooter":
      return (<svg {...common}><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M6 18h6l2-6h3" /><path d="M9 12h4l1.5 3" /><path d="M17 8h2l1 4h-2" /></svg>);
    case "clock":
      return (<svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>);
    case "shield":
      return (<svg {...common}><path d="M12 3l7 3v5c0 4.6-3 8.3-7 10-4-1.7-7-5.4-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "flag":
      return (<svg {...common}><path d="M5 21V4" /><path d="M5 5h11l-2 3.5L16 12H5" /></svg>);
    case "flagCheckered":
      return (<svg {...common}><path d="M5 21V4" /><path d="M5 5h5l1 1.5h5L14.5 9H19l-2 3H5" /></svg>);
    case "gear":
      return (<svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .35 1.9l.05.05a2 2 0 1 1-2.85 2.85l-.05-.05a1.7 1.7 0 0 0-1.9-.35 1.7 1.7 0 0 0-1 1.55V19.5a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.9.35l-.05.05a2 2 0 1 1-2.85-2.85l.05-.05a1.7 1.7 0 0 0 .35-1.9 1.7 1.7 0 0 0-1.55-1H4.5a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.35-1.9l-.05-.05a2 2 0 1 1 2.85-2.85l.05.05a1.7 1.7 0 0 0 1.9.35H10a1.7 1.7 0 0 0 1-1.55V4.5a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.9-.35l.05-.05a2 2 0 1 1 2.85 2.85l-.05.05a1.7 1.7 0 0 0-.35 1.9V10c.14.42.42.78.8 1a1.7 1.7 0 0 0 1.55 1h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.55 1z" /></svg>);
    case "phone":
      return (<svg {...common}><path d="M4 5c0-1.1.9-2 2-2h2l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 13l5 2v2c0 1.1-.9 2-2 2h-1C9.4 19 5 14.6 5 8V7z" /></svg>);
    case "chat":
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.1c-.2.2-.4.2-.7 0-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 8.9 9 7.9 8.8 7.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" /><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.2 1 1-3.2-.2-.3C3.5 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9z" /></svg>);
    case "facebook":
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.6c0-.93.26-1.56 1.6-1.56h1.7V3.14C15.98 3.1 15.02 3 13.9 3 11.57 3 9.98 4.42 9.98 7.05v2.55H7.2v3.2h2.78V21h3.52z" /></svg>);
    case "instagram":
      return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" /></svg>);
    case "star":
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2z" /></svg>);
    case "google":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Stars({ rating, size = "w-4 h-4" }) {
  return (
    <div className="flex gap-0.5 text-yellow-400" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon key={i} name="star" className={`${size} ${i <= rating ? "" : "opacity-30"}`} />
      ))}
    </div>
  );
}
