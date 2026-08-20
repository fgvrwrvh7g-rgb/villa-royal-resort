import { Sparkles } from "lucide-react";

import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-display text-base text-foreground">{site.name}</span>
          <span>· Lisice, Bosnien & Herzegowina</span>
        </div>
        <div>© {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}
