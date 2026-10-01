import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MapPin, Phone } from "lucide-react";
import { Header, Logo, NAV } from "@/components/site/Header";
import { MediaSlot } from "@/components/site/MediaSlot";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { SALON, heroMedia, introMedia, aboutMedia, ctaMedia, services, pillars, instagramFeed } from "@/lib/media";

const TITLE = "Conceito Salon Shop | Salão de Beleza em Canela";
const DESC =
  "Conceito Salon Shop em Canela/RS. Beleza, cabelos, unhas, maquiagem e drenagem modeladora em um espaço pensado para você.";

const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SALON.name,
  telephone: "+55 54 3303-4162",
  sameAs: [SALON.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Osvaldo Aranha, 266 — Sala 1",
    addressLocality: "Canela",
    addressRegion: "RS",
    postalCode: SALON.cep,
    addressCountry: "BR",
  },
  areaServed: "Canela, RS",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 animate-in fade-in zoom-in-105 duration-[2000ms]">
          <MediaSlot media={heroMedia} dark />
        </div>
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <p className="eyebrow text-gold animate-in fade-in slide-in-from-bottom-4 duration-1000">Conceito Salon Shop</p>
          <h1 className="mt-6 max-w-4xl text-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000 sm:text-7xl lg:text-8xl">
            Seu momento de cuidado <em className="text-sand">começa aqui.</em>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed opacity-80">
            Beleza, cuidado e experiência em um espaço pensado para você.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-light">Agendar horário</a>
            <a href="#servicos" className="btn-outline-light">Conheça nossos serviços</a>
          </div>
          <p className="eyebrow mt-16 opacity-60">Canela • RS</p>
        </div>
      </section>

      {/* INTRO */}
      <section id="sobre" className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
          <Reveal className="aspect-[4/5] overflow-hidden lg:col-span-6">
            <MediaSlot media={introMedia} />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-taupe">O salão</p>
            <h2 className="mt-5 text-5xl md:text-7xl">Beleza com <em>conceito.</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              No Conceito Salon Shop, cada detalhe foi pensado para proporcionar uma experiência de cuidado, beleza e bem-estar.
            </p>
            <blockquote className="mt-12 border-l border-gold pl-6 font-serif text-2xl italic leading-snug md:text-3xl">
              “Mais do que cuidar da sua aparência, queremos que você se sinta bem.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-card px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-2xl">
            <p className="eyebrow text-taupe">Serviços</p>
            <h2 className="mt-5 text-5xl md:text-7xl">Cuidados que fazem parte do <em>seu estilo.</em></h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:-translate-y-2 group-hover:scale-110">
                      <MediaSlot media={s.media} />
                    </div>
                    <span className="absolute left-4 top-4 font-serif text-xl text-ink">{s.n}</span>
                  </div>
                  <h3 className="mt-6 text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-solid">
              Agendar horário <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow text-taupe">Sobre</p>
            <h2 className="mt-5 text-5xl md:text-7xl">Um espaço <em>para você.</em></h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Um ambiente acolhedor, profissionais preparados e diferentes experiências de beleza reunidas em um só lugar.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {["Canela • RS", "Beleza", "Cuidado", "Experiência"].map((t) => (
                <div key={t} className="eyebrow bg-background py-5 text-center text-[0.6rem]">{t}</div>
              ))}
            </div>
          </Reveal>
          <Reveal className="order-1 aspect-[5/4] overflow-hidden lg:order-2">
            <MediaSlot media={aboutMedia} />
          </Reveal>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="bg-ink px-6 py-28 text-ink-foreground lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-gold">Experiência</p>
            <h2 className="mt-5 max-w-4xl text-5xl md:text-7xl">Seu tempo. Seu cuidado. <em className="text-sand">Seu momento.</em></h2>
          </Reveal>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70">
                    <MediaSlot media={p.media} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="eyebrow text-gold">0{i + 1}</span>
                    <h3 className="mt-3 text-4xl">{p.title}</h3>
                    <p className="mt-3 text-sm opacity-75">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* INSTAGRAM */}
      <section id="instagram" className="bg-card px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Instagram className="mx-auto h-6 w-6 text-gold" strokeWidth={1.25} />
            <h2 className="mt-6 text-5xl md:text-6xl">Veja o Conceito <em>no dia a dia.</em></h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Conheça nossos trabalhos, acompanhe as novidades e veja um pouco mais da experiência Conceito.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-3 gap-2 md:gap-3">
            {instagramFeed.map((m, i) => (
              <a key={i} href={SALON.instagram} target="_blank" rel="noreferrer" className="group aspect-square overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <MediaSlot media={m} />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a href={SALON.instagram} target="_blank" rel="noreferrer" className="btn-solid">
              <Instagram className="h-4 w-4" /> {SALON.handle}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink px-6 py-36 text-ink-foreground lg:px-10 lg:py-48">
        <div className="absolute inset-0 opacity-30"><MediaSlot media={ctaMedia} /></div>
        <div className="absolute inset-0 bg-ink/60" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-7xl">Seu próximo momento <em className="text-sand">começa aqui.</em></h2>
          <p className="mt-8 text-lg opacity-80">Agende seu horário e venha viver a experiência Conceito.</p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn-light">Agendar horário</a>
            <a href={`tel:${SALON.tel}`} className="eyebrow text-gold">{SALON.phone}</a>
          </div>
        </Reveal>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="contato" className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-taupe">Localização</p>
            <h2 className="mt-5 text-5xl md:text-7xl">Estamos <em>em Canela.</em></h2>
            <div className="mt-10 space-y-6 text-muted-foreground">
              <p className="font-serif text-2xl text-foreground">{SALON.name}</p>
              <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                <span>{SALON.street}<br />{SALON.district}<br />CEP {SALON.cep}</span></p>
              <p className="flex gap-3"><Phone className="h-5 w-5 text-gold" strokeWidth={1.25} />
                <a href={`tel:${SALON.tel}`} className="hover:text-foreground">{SALON.phone}</a></p>
            </div>
            <a href={SALON.maps} target="_blank" rel="noreferrer" className="btn-solid mt-10">Como chegar</a>
          </Reveal>
          <Reveal className="min-h-[380px] overflow-hidden lg:col-span-7">
            <iframe title="Mapa Conceito Salon Shop" src={SALON.mapsEmbed} className="h-full min-h-[380px] w-full grayscale" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink px-6 pb-12 pt-20 text-ink-foreground lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-6 font-serif text-xl italic opacity-70">Beleza, cuidado e experiência.</p>
          </div>
          <nav className="grid grid-cols-2 gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="eyebrow text-[0.62rem] opacity-70 hover:text-gold hover:opacity-100">{n.label}</a>
            ))}
          </nav>
          <div className="space-y-3 text-sm opacity-75">
            <a href={SALON.instagram} target="_blank" rel="noreferrer" className="block hover:text-gold">{SALON.handle}</a>
            <a href={`tel:${SALON.tel}`} className="block hover:text-gold">{SALON.phone}</a>
            <p>{SALON.street}<br />{SALON.district}</p>
          </div>
        </div>
        <p className="eyebrow mx-auto mt-16 max-w-7xl border-t border-ink-foreground/10 pt-8 text-[0.55rem] opacity-40">
          © {new Date().getFullYear()} Conceito Salon Shop · Canela • RS
        </p>
      </footer>

      {/* WhatsApp */}
      <a
        href={SALON.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-ink-foreground shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2m5.82 14.13c-.25.69-1.44 1.32-2 1.4-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.62-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46a1.08 1.08 0 0 1 .79-.37h.57c.18 0 .43-.07.67.51.25.59.84 2.04.91 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.09 1.33 2.39 1.48.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.57.35.07.12.07.71-.18 1.4"/></svg>
      </a>
    </div>
  );
}
