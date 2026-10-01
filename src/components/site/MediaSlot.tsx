import { Camera, Play } from "lucide-react";
import type { Media } from "@/lib/media";
import { cn } from "@/lib/utils";

export function MediaSlot({ media, className, dark }: { media: Media; className?: string; dark?: boolean }) {
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
      <img src={media.src} alt={media.label} loading="lazy" className={cn("h-full w-full object-cover", className)} />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Espaço para mídia do Instagram: ${media.label}`}
      className={cn("media-placeholder flex h-full w-full flex-col items-center justify-center gap-3 text-ink/60", dark && "opacity-40", className)}
    >
      {media.type === "video" ? <Play className="h-6 w-6" strokeWidth={1} /> : <Camera className="h-6 w-6" strokeWidth={1} />}
      <span className="eyebrow text-center text-[0.6rem]">{media.label}</span>
    </div>
  );
}
