// Real Instagram media from @salao.conceito goes here.
// Fill `src` (image URL or video URL) and optional `poster`. Empty `src` renders a labeled placeholder.
export type Media = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  label: string;
  vertical?: boolean;
};

export const heroMedia: Media = { type: "video", label: "Vídeo do ambiente do salão" };
export const introMedia: Media = { type: "image", label: "Foto do interior do salão" };
export const aboutMedia: Media = { type: "image", label: "Foto do espaço / recepção" };
export const ctaMedia: Media = { type: "image", label: "Foto do salão para fundo" };

export const services: { n: string; title: string; text: string; media: Media }[] = [
  { n: "01", title: "Cabelos", text: "Cuidados e transformação para valorizar sua beleza.", media: { type: "image", label: "Resultado de cabelo" } },
  { n: "02", title: "Unhas", text: "Detalhes que completam o seu visual.", media: { type: "image", label: "Trabalho de unhas" } },
  { n: "03", title: "Maquiagem", text: "Produções para momentos especiais.", media: { type: "image", label: "Produção de maquiagem" } },
  { n: "04", title: "Drenagem Modeladora", text: "Um momento de cuidado corporal e bem-estar.", media: { type: "image", label: "Sala de drenagem / massagem" } },
];

export const pillars: { title: string; text: string; media: Media }[] = [
  { title: "Cuidado", text: "Cada atendimento pensado para você.", media: { type: "image", label: "Atendimento" } },
  { title: "Profissionalismo", text: "Atenção e dedicação em cada detalhe.", media: { type: "image", label: "Profissionais" } },
  { title: "Acolhimento", text: "Um espaço para você desacelerar e aproveitar.", media: { type: "image", label: "Detalhe do ambiente" } },
];

// span: 1 = one column, 2 = two columns, "full" = full width
export const gallery: (Media & { span: 1 | 2 | "full" })[] = [
  { type: "image", label: "Ambiente", span: 2 },
  { type: "video", label: "Reel — bastidores", vertical: true, span: 1 },
  { type: "image", label: "Resultado de cabelo", span: 1 },
  { type: "image", label: "Unhas", span: 1 },
  { type: "video", label: "Reel — atendimento", vertical: true, span: 1 },
  { type: "image", label: "Maquiagem", span: 1 },
  { type: "image", label: "Decoração do salão", span: "full" },
  { type: "image", label: "Experiência da cliente", span: 1 },
  { type: "video", label: "Reel — transformação", vertical: true, span: 1 },
  { type: "image", label: "Equipe", span: 2 },
];

export const instagramFeed: Media[] = Array.from({ length: 9 }, (_, i) => ({
  type: i % 4 === 1 ? "video" : "image",
  label: `Post ${i + 1}`,
}));

export const SALON = {
  name: "Conceito Salon Shop",
  instagram: "https://www.instagram.com/salao.conceito/",
  handle: "@salao.conceito",
  phone: "(54) 3303-4162",
  tel: "+555433034162",
  whatsapp: `https://wa.me/555433034162?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços e horários do Conceito Salon Shop.")}`,
  street: "Av. Osvaldo Aranha, 266 — Sala 1",
  district: "Centro — Canela/RS",
  cep: "95680-000",
  maps: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Av. Osvaldo Aranha, 266, Canela - RS, 95680-000"),
  mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Av. Osvaldo Aranha, 266, Canela - RS, 95680-000") + "&output=embed",
};
