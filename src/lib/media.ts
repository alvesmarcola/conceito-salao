// Real Instagram media from @salao.conceito goes here.
// Fill `src` (image URL or video URL) and optional `poster`. Empty `src` renders an editorial beauty placeholder.
export type Media = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  label: string;
  vertical?: boolean;
  category?: string;
  tag?: string;
  caption?: string;
};

export const SALON = {
  name: "Conceito Salon Shop",
  eyebrow: "Beleza com Conceito",
  tagline: "Beleza que combina com você.",
  description: "Cabelos, unhas, maquiagem e drenagem modeladora em um espaço pensado para cuidar de você.",
  location: "Canela • RS",
  city: "Canela",
  state: "RS",
  instagram: "https://www.instagram.com/salao.conceito/",
  handle: "@salao.conceito",
  phone: "(54) 3303-4162",
  tel: "+555433034162",
  whatsappNumber: "555433034162",
  whatsapp: `https://wa.me/555433034162?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços e horários do Conceito Salon Shop.")}`,
  street: "Av. Osvaldo Aranha, 266 — Sala 1",
  district: "Centro — Canela/RS",
  cep: "95680-000",
  maps: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Av. Osvaldo Aranha, 266, Canela - RS, 95680-000"),
  mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Av. Osvaldo Aranha, 266, Canela - RS, 95680-000") + "&output=embed",
  googleRating: "4,8",
  googleRatingStars: 5,
  googleReviewsCount: "87 avaliações",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Conceito Salon Shop Canela RS"),
};

export function getServiceWhatsapp(serviceName: string) {
  const msg = `Olá! Gostaria de saber mais sobre os serviços de ${serviceName} e agendar um horário no Conceito Salon Shop.`;
  return `https://wa.me/${SALON.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export const heroMedia: Media = {
  type: "video",
  label: "Vídeo editorial — Conceito Salon Shop",
  category: "EDITORIAL SALÃO",
  tag: "Beleza & Transformação",
  caption: "Ambiente e atendimento no Conceito Salon Shop em Canela/RS",
};

export const introMedia: Media = {
  type: "image",
  label: "Espaço e atendimento Conceito",
  category: "O SALÃO",
  tag: "Canela • RS",
  caption: "Ambiente exclusivo desenhado para a sua experiência de beleza",
};

export const aboutMedia: Media = {
  type: "image",
  label: "Recepção e espaço Conceito",
  category: "AMBIENTE",
  tag: "Experiência",
  caption: "Estrutura acolhedora pensada para o seu conforto",
};

export const ctaMedia: Media = {
  type: "image",
  label: "Conceito Salon Shop — Canela/RS",
  category: "TRANSFORMAÇÃO",
  tag: "Agende seu Momento",
  caption: "Viva a experiência Conceito Salon Shop",
};

export const services: {
  n: string;
  title: string;
  text: string;
  highlights: string[];
  media: Media;
  whatsappUrl: string;
}[] = [
  {
    n: "01",
    title: "Cabelos",
    text: "Cuidados e transformação para valorizar sua beleza.",
    highlights: ["Cortes autorais", "Mechas & Morena Iluminada", "Coloração personalizada", "Tratamentos profundos", "Escovas modeladas"],
    media: {
      type: "image",
      label: "Transformação capilar — Cabelos",
      category: "CABELOS",
      tag: "Corte, Cor & Tratamento",
    },
    whatsappUrl: getServiceWhatsapp("Cabelos"),
  },
  {
    n: "02",
    title: "Unhas",
    text: "Detalhes que completam o seu visual.",
    highlights: ["Manicure & Pedicure", "Esmaltação em gel", "Nail design sofisticado", "Spa de mãos e pés"],
    media: {
      type: "image",
      label: "Design e esmaltação — Unhas",
      category: "UNHAS",
      tag: "Manicure & Nail Design",
    },
    whatsappUrl: getServiceWhatsapp("Unhas"),
  },
  {
    n: "03",
    title: "Maquiagem",
    text: "Produções para momentos especiais.",
    highlights: ["Maquiagem social", "Eventos & Formaturas", "Noivas & Convidadas", "Pele iluminada e duradoura"],
    media: {
      type: "image",
      label: "Produção de beleza — Maquiagem",
      category: "MAQUIAGEM",
      tag: "Make Social & Eventos",
    },
    whatsappUrl: getServiceWhatsapp("Maquiagem"),
  },
  {
    n: "04",
    title: "Drenagem Modeladora",
    text: "Um momento de cuidado corporal e bem-estar.",
    highlights: ["Contorno corporal", "Redução de inchaço", "Estímulo à circulação", "Relaxamento e revitalização"],
    media: {
      type: "image",
      label: "Cuidado corporal — Drenagem Modeladora",
      category: "DRENAGEM MODELADORA",
      tag: "Corpo & Bem-Estar",
    },
    whatsappUrl: getServiceWhatsapp("Drenagem Modeladora"),
  },
];

export const results: {
  id: string;
  title: string;
  category: "Cabelos" | "Unhas" | "Maquiagem" | "Procedimentos";
  description: string;
  tag: string;
  media: Media;
}[] = [
  {
    id: "r1",
    title: "Loiro & Mechas Personalizadas",
    category: "Cabelos",
    description: "Iluminação sob medida com máxima preservação da saúde e vitalidade dos fios.",
    tag: "Mechas & Iluminação",
    media: { type: "image", label: "Loiro & Mechas — Trabalho Real", category: "CABELOS", tag: "Transformação" },
  },
  {
    id: "r2",
    title: "Morena Iluminada Avelã",
    category: "Cabelos",
    description: "Contraste sutil e elegante, criando pontos de luz harmonizados com o tom de pele.",
    tag: "Morena Iluminada",
    media: { type: "image", label: "Morena Iluminada — Trabalho Real", category: "CABELOS", tag: "Cor & Brilho" },
  },
  {
    id: "r3",
    title: "Corte Autoral & Movimento",
    category: "Cabelos",
    description: "Design de corte com leveza, camadas estratégicas e acabamento moderno.",
    tag: "Corte & Styling",
    media: { type: "image", label: "Corte com Movimento — Trabalho Real", category: "CABELOS", tag: "Corte Autoral" },
  },
  {
    id: "r4",
    title: "Nail Design & Esmaltação em Gel",
    category: "Unhas",
    description: "Precisão na cuticulagem, simetria e acabamento espelhado de alta durabilidade.",
    tag: "Nails Premium",
    media: { type: "image", label: "Esmaltação & Unhas — Trabalho Real", category: "UNHAS", tag: "Nail Design" },
  },
  {
    id: "r5",
    title: "Maquiagem Glow & Sofisticada",
    category: "Maquiagem",
    description: "Pele com acabamento natural, olhos expressivos e fixação prolongada para celebrações.",
    tag: "Make Social",
    media: { type: "image", label: "Maquiagem para Evento — Trabalho Real", category: "MAQUIAGEM", tag: "Make Glow" },
  },
  {
    id: "r6",
    title: "Recuperação & Brilho Espelhado",
    category: "Cabelos",
    description: "Tratamento profundo pós-coloração, devolvendo maleabilidade, selagem e maciez.",
    tag: "Tratamento Intensivo",
    media: { type: "image", label: "Tratamento & Brilho — Trabalho Real", category: "CABELOS", tag: "Nutrição & Brilho" },
  },
  {
    id: "r7",
    title: "Drenagem Modeladora & Contorno",
    category: "Procedimentos",
    description: "Técnica focada em desinchaço imediato, ativação linfática e sensação de leveza corporal.",
    tag: "Drenagem",
    media: { type: "image", label: "Drenagem Modeladora — Trabalho Real", category: "DRENAGEM MODELADORA", tag: "Corpo & Bem-Estar" },
  },
  {
    id: "r8",
    title: "Penteado & Produção Completa",
    category: "Cabelos",
    description: "Ondas clássicas e penteado semi-preso para ocasiões memoráveis.",
    tag: "Penteados",
    media: { type: "video", vertical: true, label: "Reel de Transformação — Penteado", category: "CABELOS", tag: "Reel Transformação" },
  },
];

export const pillars: { title: string; text: string; media: Media }[] = [
  { title: "Cuidado", text: "Cada atendimento pensado exclusivamente para você.", media: { type: "image", label: "Atendimento dedicado" } },
  { title: "Profissionalismo", text: "Técnicas atualizadas e precisão em cada detalhe.", media: { type: "image", label: "Profissionais especialistas" } },
  { title: "Acolhimento", text: "Um espaço elegante para você desacelerar e renovar sua autoestima.", media: { type: "image", label: "Ambiente do salão" } },
];

export const gallery: (Media & { span: 1 | 2 | "full" })[] = [
  { type: "image", label: "Ambiente e bancadas do salão", span: 2, category: "AMBIENTE", tag: "Canela • RS" },
  { type: "video", label: "Reel — Bastidores & Mechas", vertical: true, span: 1, category: "CABELOS", tag: "Bastidores" },
  { type: "image", label: "Resultado Loiro & Iluminação", span: 1, category: "CABELOS", tag: "Resultado Real" },
  { type: "image", label: "Unhas & Esmaltação Sofisticada", span: 1, category: "UNHAS", tag: "Detalhe" },
  { type: "video", label: "Reel — Atendimento & Lavatório", vertical: true, span: 1, category: "EXPERIÊNCIA", tag: "Cuidado" },
  { type: "image", label: "Maquiagem Social para Evento", span: 1, category: "MAQUIAGEM", tag: "Produção" },
  { type: "image", label: "Espaço do salão em Canela", span: "full", category: "SALÃO", tag: "Av. Osvaldo Aranha" },
  { type: "image", label: "Experiência e bem-estar da cliente", span: 1, category: "CLIENTE", tag: "Autoestima" },
  { type: "video", label: "Reel — Transformação de Corte e Cor", vertical: true, span: 1, category: "TRANSFORMAÇÃO", tag: "Antes & Depois" },
  { type: "image", label: "Equipe de profissionais Conceito", span: 2, category: "EQUIPE", tag: "Especialistas" },
];

export const instagramFeed: Media[] = [
  { type: "image", label: "Transformação Mechas", category: "CABELOS", tag: "Loiro Perfeito" },
  { type: "video", label: "Reel Corte em Camadas", vertical: true, category: "CABELOS", tag: "Movimento" },
  { type: "image", label: "Esmaltação Nude Chic", category: "UNHAS", tag: "Nail Care" },
  { type: "image", label: "Make Iluminada Noite", category: "MAQUIAGEM", tag: "Editorial" },
  { type: "video", label: "Reel Drenagem Corporal", vertical: true, category: "DRENAGEM", tag: "Bem-estar" },
  { type: "image", label: "Morena Iluminada Caramelo", category: "CABELOS", tag: "Brilho Real" },
  { type: "image", label: "Detalhes do Salão em Canela", category: "AMBIENTE", tag: "Espaço" },
  { type: "video", label: "Reel Escova Modelada", vertical: true, category: "CABELOS", tag: "Finalização" },
  { type: "image", label: "Cliente Sorrindo pós-make", category: "BELEZA", tag: "Autoestima" },
];

export const reviews = [
  {
    author: "Patrícia Silveira",
    city: "Canela, RS",
    rating: 5,
    date: "Avaliação no Google",
    comment:
      "Experiência maravilhosa! Fazer minhas mechas no Conceito foi a melhor escolha. As profissionais entenderam perfeitamente o tom que combinava comigo e o cabelo continuou super saudável e brilhoso. Ambiente impecável!",
  },
  {
    author: "Mariana Lemos",
    city: "Gramado, RS",
    rating: 5,
    date: "Avaliação no Google",
    comment:
      "Salão elegante, atendimento atencioso e pontual. Fiz unhas e escova para um casamento e saí apaixonada pelo resultado. O espaço é muito acolhedor e transmite tranquilidade.",
  },
  {
    author: "Fernanda Müller",
    city: "Canela, RS",
    rating: 5,
    date: "Avaliação no Google",
    comment:
      "Profissionais excelentes! A maquiagem ficou leve, iluminada e durou a noite inteira. A drenagem também é maravilhosa. Recomendo de olhos fechados para quem valoriza cuidado e bom gosto.",
  },
];
