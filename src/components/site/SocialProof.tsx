import { Star, ExternalLink, CheckCircle } from "lucide-react";
import { SALON, reviews } from "@/lib/media";
import { Reveal } from "./Reveal";

export function SocialProof() {
  return (
    <section id="avaliacoes" className="bg-[#171717] text-[#F5F2ED] px-6 py-28 lg:px-10 lg:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Rating Hero */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow text-gold">Prova Social</p>
              <div className="mt-4 flex items-center gap-1.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold stroke-gold" />
                ))}
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-6xl md:text-7xl font-normal text-[#F5F2ED] tracking-tight">
                  {SALON.googleRating}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-wide text-[#F5F2ED]">no Google</span>
                  <span className="text-xs text-[#D8CFC2]/70 font-sans">{SALON.googleReviewsCount}</span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#D8CFC2]/80 max-w-sm">
                A confiança das nossas clientes é o nosso maior orgulho. Atendimento humano, respeito à saúde dos fios e resultados que encantam.
              </p>

              <div className="mt-8">
                <a
                  href={SALON.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-light !px-6 !py-3 !text-[0.68rem] gap-2"
                >
                  <span>Ver avaliações no Google</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Customer Reviews */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {reviews.map((rev, idx) => (
              <Reveal key={idx} delay={idx * 120} className="h-full">
                <div className="h-full flex flex-col justify-between p-6 bg-[#1f1e1d] border border-white/10 rounded-sm hover:border-gold/40 transition-colors duration-400">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-gold mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold stroke-gold" />
                      ))}
                    </div>

                    <blockquote className="font-serif text-base text-[#F5F2ED]/95 leading-relaxed italic">
                      “{rev.comment}”
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs font-semibold text-[#F5F2ED] flex items-center gap-1.5">
                        {rev.author}
                        <CheckCircle className="h-3 w-3 text-gold shrink-0" />
                      </p>
                      <p className="text-[0.62rem] text-[#D8CFC2]/60 mt-0.5">{rev.city}</p>
                    </div>
                    <span className="text-[0.55rem] tracking-wider uppercase text-gold/80 bg-gold/10 px-2 py-0.5 rounded-full font-mono">
                      Google
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
