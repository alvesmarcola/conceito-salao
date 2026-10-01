import { Camera, Play, Sparkles } from "lucide-react";
import type { Media } from "@/lib/media";
import { cn } from "@/lib/utils";

export function MediaSlot({
  media,
  className,
  dark,
  aspectRatio,
}: {
  media: Media;
  className?: string;
  dark?: boolean;
  aspectRatio?: string;
}) {
  if (media.src) {
    return media.type === "video" ? (
      <video
        className={cn("h-full w-full object-cover", className)}
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    ) : (
      <img
        src={media.src}
        alt={media.label}
        loading="lazy"
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  // Editorial Beauty Placeholder
  return (
    <div
      role="img"
      aria-label={`Espaço para mídia de beleza: ${media.label}`}
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-between p-6 overflow-hidden select-none transition-all duration-700",
        dark
          ? "bg-gradient-to-b from-ink via-ink/90 to-ink text-ink-foreground"
          : "bg-gradient-to-b from-[#1c1b1a] via-[#161514] to-[#121110] text-[#F5F2ED]",
        aspectRatio,
        className,
      )}
    >
      {/* Editorial subtle luxury texture / framing */}
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#B59A6A_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="pointer-events-none absolute inset-3 border border-gold/15" />

      {/* Watermark in background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <span className="font-serif text-7xl md:text-9xl font-light tracking-[0.2em] text-gold uppercase select-none">
          Conceito
        </span>
      </div>

      {/* Top Tag */}
      <div className="relative z-10 flex w-full items-center justify-between">
        <span className="eyebrow text-[0.58rem] tracking-[0.25em] text-gold/90 font-medium">
          {media.category || "BELEZA & ESTÉTICA"}
        </span>
        <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#F5F2ED]/40 font-mono">
          CANELA • RS
        </span>
      </div>

      {/* Central Visual Focus */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-3 text-center px-4 py-2">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink/60 shadow-lg backdrop-blur-xs transition-transform duration-500 group-hover:scale-110 group-hover:border-gold">
          {media.type === "video" ? (
            <Play className="h-6 w-6 text-gold fill-gold/20 translate-x-0.5" strokeWidth={1.5} />
          ) : (
            <Sparkles className="h-6 w-6 text-gold" strokeWidth={1.5} />
          )}
          <span className="absolute -inset-1 rounded-full border border-gold/10 animate-pulse" />
        </div>

        <p className="font-serif text-xl sm:text-2xl text-[#F5F2ED] leading-tight tracking-wide max-w-[260px]">
          {media.label}
        </p>

        {media.tag && (
          <span className="inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-[0.6rem] font-medium tracking-wider text-gold uppercase">
            {media.tag}
          </span>
        )}
      </div>

      {/* Bottom Metadata */}
      <div className="relative z-10 flex w-full items-center justify-between text-[0.58rem] text-[#F5F2ED]/50 pt-2 border-t border-white/5">
        <span className="tracking-[0.15em] uppercase">@salao.conceito</span>
        <span className="tracking-wider text-gold/80 hover:text-gold transition-colors">
          Trabalho Real
        </span>
      </div>
    </div>
  );
}
