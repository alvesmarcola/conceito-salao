import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SALON } from "@/lib/media";

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contato", href: "#contato" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex flex-col leading-none", className)}>
      <span className="font-serif text-2xl tracking-[0.28em]">CONCEITO</span>
      <span className="eyebrow mt-1 text-[0.55rem] tracking-[0.55em] text-gold">Salon Shop</span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid ? "bg-background/95 text-foreground shadow-[0_1px_0_var(--border)] backdrop-blur" : "text-ink-foreground",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="eyebrow text-[0.65rem] opacity-80 transition-opacity hover:opacity-100 hover:text-gold">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className={cn("hidden sm:inline-flex", solid ? "btn-solid" : "btn-light", "!px-5 !py-3")}>
            Agendar horário
          </a>
          <button aria-label="Menu" className="p-2 lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X strokeWidth={1.25} /> : <Menu strokeWidth={1.25} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-serif text-2xl">
              {n.label}
            </a>
          ))}
          <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-solid mt-6 w-full">
            Agendar horário
          </a>
        </div>
      )}
    </header>
  );
}
