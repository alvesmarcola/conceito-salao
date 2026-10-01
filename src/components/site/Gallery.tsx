import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";
import { gallery, SALON, type Media } from "@/lib/media";
import { cn } from "@/lib/utils";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<Media | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <section id="galeria" className="px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-taupe">Galeria</p>
            <h2 className="mt-5 text-5xl md:text-7xl">Um pouco do<br /><em>nosso universo.</em></h2>
          </div>
          <a href={SALON.instagram} target="_blank" rel="noreferrer" className="btn-solid self-start md:self-auto">
            Ver mais no Instagram
          </a>
        </Reveal>

        <div className="grid grid-flow-dense auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4 md:gap-4">
          {gallery.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(m)}
              className={cn(
                "group relative overflow-hidden text-left",
                m.span === 2 && "col-span-2",
                m.span === "full" && "col-span-2 md:col-span-4",
                m.vertical && "row-span-2",
              )}
            >
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                <MediaSlot media={m} />
              </div>
              {m.type === "video" && (
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-ink-foreground">
                  <Play className="h-3.5 w-3.5" />
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-solid">Agendar horário</a>
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 animate-in fade-in duration-300" onClick={() => setActive(null)}>
          <button aria-label="Fechar" className="absolute right-5 top-5 text-ink-foreground" onClick={() => setActive(null)}>
            <X strokeWidth={1} className="h-8 w-8" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className={cn("overflow-hidden", active.vertical || active.type === "video" ? "aspect-[9/16] h-[85vh] max-w-full" : "aspect-[4/3] w-full max-w-5xl")}
          >
            {active.src && active.type === "video" ? (
              <video src={active.src} poster={active.poster} controls autoPlay playsInline className="h-full w-full object-cover" />
            ) : (
              <MediaSlot media={active} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
