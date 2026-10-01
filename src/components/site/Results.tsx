import { useState } from "react";
import { ArrowRight, Instagram, Sparkles, X, Play } from "lucide-react";
import { results, SALON, type Media } from "@/lib/media";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type CategoryFilter = "Todos" | "Cabelos" | "Unhas" | "Maquiagem" | "Procedimentos";

const CATEGORIES: CategoryFilter[] = ["Todos", "Cabelos", "Unhas", "Maquiagem", "Procedimentos"];

export function Results() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("Todos");
  const [activeMedia, setActiveMedia] = useState<Media | null>(null);

  const filteredResults =
    selectedCategory === "Todos"
      ? results
      : results.filter((r) => r.category === selectedCategory);

  return (
    <section id="resultados" className="bg-[#141312] text-[#F5F2ED] px-6 py-28 lg:px-10 lg:py-36 border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-gold" />
              <p className="eyebrow text-gold">Transformações Reais</p>
            </div>
            <h2 className="text-5xl md:text-7xl leading-tight">
              Resultados que <em className="text-sand italic font-serif">falam por si.</em>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#D8CFC2]/80">
              O salão vende transformação visual. Cada mecha, corte, maquiagem e procedimento é realizado com precisão técnica para valorizar a sua essência e elevar sua autoestima.
            </p>
          </Reveal>

          <Reveal delay={100} className="shrink-0">
            <a
              href={SALON.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-gold hover:text-sand transition-colors pb-1 border-b border-gold/40 hover:border-sand"
            >
              <Instagram className="h-4 w-4" />
              <span>Ver feed diário no Instagram</span>
            </a>
          </Reveal>
        </div>

        {/* Filter categories */}
        <Reveal delay={150} className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-300 font-medium rounded-full cursor-pointer",
                selectedCategory === cat
                  ? "bg-gold text-ink font-semibold shadow-md shadow-gold/20"
                  : "bg-white/5 text-[#F5F2ED]/70 hover:bg-white/10 hover:text-white border border-white/10",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResults.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 80}>
              <div
                onClick={() => setActiveMedia(item.media)}
                className="group relative flex flex-col bg-[#1a1918] border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
              >
                {/* Media area */}
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <MediaSlot media={item.media} dark />
                  </div>

                  {/* Overlay badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-block bg-ink/80 backdrop-blur-xs px-2.5 py-1 text-[0.58rem] tracking-[0.18em] uppercase text-gold border border-gold/30 rounded-xs">
                      {item.tag}
                    </span>
                  </div>

                  {item.media.type === "video" && (
                    <div className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-gold border border-gold/40">
                      <Play className="h-3.5 w-3.5 fill-gold translate-x-0.5" />
                    </div>
                  )}

                  {/* Hover action overlay */}
                  <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20 pointer-events-none">
                    <span className="btn-light !px-4 !py-2 !text-[0.62rem] !tracking-[0.2em] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Card description */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="eyebrow text-[0.58rem] text-gold/80 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-[#F5F2ED] group-hover:text-gold transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#D8CFC2]/75">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[0.6rem] tracking-wider text-[#F5F2ED]/50 uppercase">
                      @salao.conceito
                    </span>
                    <a
                      href={`https://wa.me/${SALON.whatsappNumber}?text=${encodeURIComponent(`Olá! Vi o resultado de "${item.title}" no site do Conceito Salon Shop e gostaria de agendar uma avaliação.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.16em] uppercase text-gold hover:text-sand font-medium transition-colors"
                    >
                      <span>Quero esse visual</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={200} className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-[#F5F2ED]">
              Deseja uma transformação personalizada?
            </p>
            <p className="text-sm text-[#D8CFC2]/70 mt-1">
              Nossa equipe avalia a sua necessidade e indica o melhor procedimento para o seu objetivo.
            </p>
          </div>
          <div className="flex gap-4">
            <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-light">
              Agendar avaliação no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setActiveMedia(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute right-6 top-6 text-[#F5F2ED] hover:text-gold transition-colors p-2"
            onClick={() => setActiveMedia(null)}
          >
            <X strokeWidth={1.5} className="h-8 w-8" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative bg-[#171717] border border-gold/30 rounded-xs overflow-hidden shadow-2xl",
              activeMedia.vertical || activeMedia.type === "video"
                ? "aspect-[9/16] h-[85vh] max-w-full"
                : "aspect-[4/3] w-full max-w-4xl",
            )}
          >
            <MediaSlot media={activeMedia} dark />
          </div>
        </div>
      )}
    </section>
  );
}
