import { ArrowRight, Sparkles } from "lucide-react";

import { site } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-display text-lg tracking-wide">{site.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground transition">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm hover:bg-primary transition"
        >
          Reservieren <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
