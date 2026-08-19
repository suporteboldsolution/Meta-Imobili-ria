import { InstagramPost, NeighborhoodInfo, ServiceItem, Testimonial } from '../types';
import simImg from '../assets/images/house_sim_bairro_1786454941893.jpg';
import mangabeiraImg from '../assets/images/house_mangabeira_1786454955078.jpg';
import centroImg from '../assets/images/house_centro_1786454968418.jpg';
import tombaImg from '../assets/images/house_tomba_1786454979638.jpg';

export const STORE_INFO = {
  name: 'Meta Imobiliária',
  fullName: 'Meta Imobiliária LTDA',
  slogan: 'Mais que imóveis, realizamos sonhos e construímos futuros.',
  address: 'Av. Francisco Fraga Maia, 5150 - Centro',
  city: 'Feira de Santana',
  state: 'BA',
  zipCode: '44056-232',
  phone: '(75) 98357-3793',
  whatsappNumber: '5575983573793',
  email: 'contato@ametaimobiliaria.com.br',
  instagramHandle: '@ametaimobiliaria',
  instagramUrl: 'https://www.instagram.com/ametaimobiliaria/',
  creci: 'CRECI J - 3158',
  cnpj: '61.020.229/0001-82',
  openingHours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00',
  googleMapsUrl: 'https://www.google.com/maps/place/META+IMOBILI%C3%81RIA/@-12.2222405,-38.9542826,1117m/data=!3m2!1e3!4b1!4m6!3m5!1s0x714392faaa9b907:0x2cd2e7e1bd49f6ad!8m2!3d-12.2222405!4d-38.9517077!16s%2Fg%2F11xgf8fw57?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D',
};

// Posts baseados nas publicações reais da @ametaimobiliaria
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    caption: '💙 Feliz Dia dos Pais! Na Meta Imobiliária, entendemos que mais do que imóveis, realizamos sonhos e construímos futuros para toda a família. Transparência, compromisso e realização em Feira de Santana - BA.',
    likes: 342,
    comments: 28,
    date: 'Publicado recentemente',
    category: 'Atendimento',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
  {
    id: 'post-2',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
    caption: '🔑 "A visão de quem não tem medo de 420 parcelas... Um dia as parcelas acabam e o imóvel próprio fica para a vida toda!" Conquiste sua independência financeira com apoio dos nossos corretores qualificados.',
    likes: 512,
    comments: 41,
    date: 'Há 3 dias',
    category: 'Lançamento',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
  {
    id: 'post-3',
    type: 'carousel',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    caption: '🎉 Momento inesquecível da entrega de chaves! Ver a alegria de nossos clientes em Feira de Santana ao realizar o sonho da casa própria é o que movimenta a equipe Meta Imobiliária (CRECI J - 3158).',
    likes: 428,
    comments: 35,
    date: 'Há 5 dias',
    category: 'Atendimento',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
  {
    id: 'post-4',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    caption: '🏡 Imóveis na Planta ou Prontos para Morar em Feira de Santana? Na Meta Imobiliária orientamos você na escolha que melhor se encaixa no seu orçamento e planejamento familiar.',
    likes: 620,
    comments: 54,
    date: 'Há 1 semana',
    category: 'Investimento',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
  {
    id: 'post-5',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    caption: '📋 Quer vender ou avaliar seu imóvel em Feira de Santana? A Meta Imobiliária conta com corretores qualificados para avaliar seu bem com precisão e acelerar sua negociação.',
    likes: 289,
    comments: 19,
    date: 'Há 2 semanas',
    category: 'Arquitetura',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
  {
    id: 'post-6',
    type: 'carousel',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    caption: '✨ Condomínio fechado, segurança 24h e área de lazer completa em Feira de Santana. Entre em contato conosco via WhatsApp e descubra o formato ideal para seu projeto de vida!',
    likes: 395,
    comments: 23,
    date: 'Há 2 semanas',
    category: 'Lançamento',
    permalink: 'https://www.instagram.com/ametaimobiliaria/',
  },
];

export const NEIGHBORHOODS: NeighborhoodInfo[] = [
  {
    id: 'sim-santa-monica',
    name: 'Bairro SIM & Santa Mônica',
    city: 'Feira de Santana - BA',
    tagline: 'Vetor de crescimento urbano, condomínios fechados e alto padrão',
    description: 'A área de maior valorização em Feira de Santana. Casas soltas de alto padrão, condomínios com infraestrutura estilo resort, proximidade à Av. Noide Cerqueira, FTC e UNIFAN.',
    highlights: ['Condomínios clube com segurança 24h', 'Alta valorização e procura constante', 'Fácil acesso à Av. Noide Cerqueira e Getúlio Vargas'],
    image: simImg,
    avgAppreciation: '+15,0% a.a.',
    vibe: 'Alto Padrão & Expansão',
    priceRange: 'Imóveis de R$ 380 mil a R$ 2,5 mi',
  },
  {
    id: 'mangabeira-papagaio',
    name: 'Mangabeira, Papagaio & Cidade Nova',
    city: 'Feira de Santana - BA',
    tagline: 'Polo residencial diversificado com excelentes opções na planta e prontas',
    description: 'A escolha ideal em Feira de Santana para quem busca casas em condomínio com valores acessíveis, áreas de lazer completas e condições facilitadas de financiamento Caixa.',
    highlights: ['Lançamentos na planta com entrada parcelada', 'Casas prontas com infraestrutura de lazer', 'Comércio forte, escolas e conveniência local'],
    image: mangabeiraImg,
    avgAppreciation: '+12,5% a.a.',
    vibe: 'Conforto & Acessibilidade',
    priceRange: 'Imóveis de R$ 180 mil a R$ 550 mil',
  },
  {
    id: 'centro-kalilandia-capuchinhos',
    name: 'Centro, Kalilândia & Capuchinhos',
    city: 'Feira de Santana - BA',
    tagline: 'Praticidade total, serviços e conveniência no coração da cidade',
    description: 'Regiões consolidadas e nobres de Feira de Santana, perfeitas para quem valoriza morar perto de clínicas, bancos, colégios tradicionais e avenidas principais.',
    highlights: ['Localização central privilegiada', 'Apartamentos e salas comerciais', 'Fácil acesso a transporte e principais vias'],
    image: centroImg,
    avgAppreciation: '+10,8% a.a.',
    vibe: 'Tradição & Praticidade',
    priceRange: 'Imóveis de R$ 220 mil a R$ 1,2 mi',
  },
  {
    id: 'tomba-muchila-campo-limpo',
    name: 'Tomba, Muchila, Campo Limpo & Arredores',
    city: 'Feira de Santana - BA',
    tagline: 'Comércio ativo, comunidades tradicionais e ótimo custo-benefício',
    description: 'Bairros populosos e autossuficientes de Feira de Santana com ampla oferta de casas, terrenos e oportunidades com excelente retorno para investimento e moradia.',
    highlights: ['Excelente custo-benefício por m²', 'Forte comércio de bairro autossuficiente', 'Alta demanda para locação residencial'],
    image: tombaImg,
    avgAppreciation: '+11,2% a.a.',
    vibe: 'Tradição & Custo-benefício',
    priceRange: 'Imóveis de R$ 150 mil a R$ 480 mil',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'imoveis-planta',
    title: 'Imóveis na Planta',
    description: 'Encontre lançamentos e empreendimentos com infraestrutura estilo resort, condições exclusivas de lançamento e entrada parcelada durante a obra.',
    iconName: 'Building2',
    badge: 'Lançamentos',
    highlights: [
      'Entrada facilitada direto com a construtora',
      'Condomínios fechados com infraestrutura de resort',
      'Alto potencial de valorização até as chaves'
    ],
    ctaText: 'Ver Lançamentos',
  },
  {
    id: 'imoveis-prontos',
    title: 'Prontos para Morar',
    description: 'Casas em condomínio fechado, apartamentos e terrenos prontos para mudança imediata nas melhores localizações de Feira de Santana.',
    iconName: 'Home',
    badge: 'Mudança Imediata',
    highlights: [
      'Imóveis 100% prontos para morar',
      'Aceita financiamento bancário e FGTS',
      'Documentação e vistorias regularizadas'
    ],
    ctaText: 'Buscar Prontos',
  },
  {
    id: 'locacao-aluguel',
    title: 'Locação & Aluguel',
    description: 'Casas, apartamentos, salas e pontos comerciais para alugar nas melhores regiões de Feira de Santana, com agilidade e suporte completo.',
    iconName: 'KeyRound',
    badge: 'Para Alugar',
    highlights: [
      'Opções residenciais e comerciais',
      'Processo ágil e sem burocracia desnecessária',
      'Contratos seguros com suporte jurídico'
    ],
    ctaText: 'Opções de Aluguel',
  },
  {
    id: 'avaliacao-venda',
    title: 'Avaliação & Venda',
    description: 'Quer vender ou alugar seu imóvel com rapidez e segurança? Avaliamos pelo valor de mercado e anunciamos para compradores qualificados.',
    iconName: 'TrendingUp',
    badge: 'Proprietários',
    highlights: [
      'Avaliação mercadológica e precificação precisa',
      'Divulgação profissional em canais de alto alcance',
      'Acompanhamento com corretores credenciados'
    ],
    ctaText: 'Avaliar meu Imóvel',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Cláudio & Juliana Silva',
    role: 'Compradores de Imóvel na Planta (SIM / Feira de Santana)',
    rating: 5,
    comment: 'Mais que imóveis, realizamos um sonho antigo! A equipe da Meta Imobiliária nos ajudou a entender o planejamento das parcelas sem sustos. Corretores extremamente atenciosos.',
    location: 'Feira de Santana / BA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-2',
    name: 'Marcos Vinícius',
    role: 'Investidor Imobiliário',
    rating: 5,
    comment: 'Procurei a Meta para entender sobre a valorização do Bairro SIM. Atendimento impecável, clareza nas informações e total transparência. Recomendo fortemente!',
    location: 'Feira de Santana / BA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-3',
    name: 'Renata Albuquerque',
    role: 'Proprietária',
    rating: 5,
    comment: 'Coloquei minha casa para venda com a Meta Imobiliária. O suporte jurídico e a avaliação foram nota dez, e o imóvel foi vendido com rapidez e segurança.',
    location: 'Feira de Santana / BA',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
];
