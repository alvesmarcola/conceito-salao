import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SALON } from "@/lib/media";

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Instagram", href: "#instagram" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex flex-col leading-none group", className)}>
      <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] text-current transition-colors">
        CONCEITO
      </span>
      <span className="eyebrow mt-1 text-[0.52rem] sm:text-[0.58rem] tracking-[0.55em] text-gold">
        Salon Shop
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid
          ? "bg-background/95 text-foreground shadow-[0_1px_0_var(--border)] backdrop-blur-md py-1"
          : "bg-gradient-to-b from-ink/90 via-ink/40 to-transparent text-ink-foreground py-2",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-[0.62rem] opacity-80 transition-all hover:opacity-100 hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SALON.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "hidden sm:inline-flex",
              solid ? "btn-solid" : "btn-light",
              "!px-5 !py-2.5 !text-[0.65rem] !tracking-[0.22em]",
            )}
          >
            Agendar horário
          </a>
          <button
            aria-label="Abrir menu"
            className="p-2 lg:hidden cursor-pointer hover:text-gold transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X strokeWidth={1.5} className="h-6 w-6" /> : <Menu strokeWidth={1.5} className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-10 pt-4 lg:hidden animate-in slide-in-from-top-4 duration-300 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="py-2 mb-4 border-b border-border/50">
            <span className="eyebrow text-[0.6rem] text-taupe">Navegação</span>
          </div>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-3.5 font-serif text-2xl text-foreground hover:text-gold transition-colors"
            >
              {n.label}
            </a>
          ))}
          <div className="pt-6 mt-4 space-y-3">
            <a
              href={SALON.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-solid w-full text-center"
            >
              Agendar no WhatsApp
            </a>
            <p className="text-center eyebrow text-[0.55rem] text-taupe pt-2">
              Canela • RS · (54) 3303-4162
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
