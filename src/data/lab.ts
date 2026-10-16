/** Conteúdo central da MATHRICK LAB — edite aqui, as páginas / e /projetos leem deste arquivo. */

export const site = {
  name: "MATHRICK LAB",
  whatsapp: "https://wa.me/553131917191",
  whatsappMsg:
    "https://wa.me/553131917191?text=Ol%C3%A1%20Mathrick%2C%20tenho%20uma%20ideia%20e%20gostaria%20de%20conversar%21",
  email: "contato@mathrick.com.br",
  base: "",
};

export const ticker = [
  "SaaS",
  "Ferramentas pessoais",
  "Sites personalizados",
  "Hubs",
  "Dashboards",
  "Web apps",
  "Apps mobile",
  "Automação",
  "Protótipos",
  "Ideias",
];

/** O que o laboratório produz. `variant` escolhe a ilustração em Panel.astro (0-6). */
export const capabilities = [
  {
    tag: "SaaS",
    variant: 3,
    title: "Ferramentas como serviço",
    text: "Produtos web com conta, plano e recorrência: do problema que alguém repete todo dia até o sistema que resolve de forma escalável.",
  },
  {
    tag: "Ferramentas pessoais",
    variant: 2,
    title: "Utilitários feitos para uso próprio",
    text: "Pequenas ferramentas que nascem de uma necessidade real do dia a dia. Rápidas, sem frescura, e que às vezes viram produto.",
  },
  {
    tag: "Sites personalizados",
    variant: 0,
    title: "Sites sob medida",
    text: "Presença digital desenhada do zero, sem template. Cada site combina identidade, clareza e cuidado com quem navega.",
  },
  {
    tag: "Hubs",
    variant: 4,
    title: "Hubs que reúnem tudo",
    text: "Um ponto central para links, ferramentas, conteúdos e fluxos. Tudo o que importa em um lugar só, com a identidade de quem o criou.",
  },
  {
    tag: "Dashboards",
    variant: 5,
    title: "Painéis que mostram o que importa",
    text: "Dados transformados em decisão: indicadores claros, filtros úteis e atualização em tempo real, sem planilha gigante para interpretar.",
  },
  {
    tag: "Web apps",
    variant: 1,
    title: "Aplicações no navegador",
    text: "Sistemas completos rodando na web, sem instalação: rifas, vaquinhas, painéis internos e ferramentas com regras de negócio.",
  },
  {
    tag: "Apps mobile",
    variant: 6,
    title: "Aplicativos para o bolso",
    text: "Experiências pensadas para o polegar: interface nativa-like, rápidas de abrir e feitas para serem usadas todos os dias.",
  },
];

/** Pilares do lab (seção "O processo"). */
export const philosophy = [
  {
    key: "A",
    title: "Processo em aberto",
    text: "Testar cedo, compartilhar o raciocínio e aprender com o uso. Cada tentativa ajuda a fazer perguntas melhores e a refinar a solução.",
  },
  {
    key: "B",
    title: "Lógica com sensibilidade",
    text: "Estrutura para orientar, espaço para respirar. Forma, ritmo e pequenos detalhes tornam o que é técnico mais claro e humano.",
  },
  {
    key: "C",
    title: "Decisões que fazem sentido",
    text: "Entender a rotina de quem usa vem antes de escolher a ferramenta. O produto evolui quando resolve uma necessidade real com simplicidade.",
  },
];

/** Etapas do ciclo do laboratório. */
export const stages = [
  { key: "01", name: "Ideia", text: "Um problema, uma hipótese." },
  { key: "02", name: "Protótipo", text: "Funcional o bastante para testar." },
  { key: "03", name: "Produto", text: "Uma solução em uso e evolução." },
];

export type Project = {
  slug: string;
  name: [string, string];
  title: string;
  type: string;
  kind: string;
  url: string;
  description: string;
  tags: string[];
  status: string;
  hue: string;
  sublinks?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "thais-campos",
    name: ["Thais", "Campos"],
    title: "Thais Campos",
    type: "Site & Ecossistema",
    kind: "Personal Trainer da Mulher · Foco em diástase",
    url: "https://thaiscampos.com",
    description:
      "Projeto de site e ecossistema próprio para Thais Campos, Personal Trainer da Mulher com foco em diástase. Uma plataforma de streaming e distribuição de vídeos, PDFs e conteúdos para as alunas, com autonomia na gestão e propriedade sobre os próprios materiais.",
    tags: ["Streaming", "Área de alunas", "Vídeos & PDFs", "Autonomia", "Conteúdo próprio"],
    status: "Em desenvolvimento",
    hue: "var(--accent-ink)",
  },
  {
    slug: "maria-julia",
    name: ["Maria", "Júlia"],
    title: "Maria Júlia",
    type: "Web app",
    kind: "Sistema de rifas e vaquinha",
    url: "https://mariajulia.med.br/",
    description:
      "Ecossistema web com rifas online, página de doações e vaquinha digital, integração em tempo real com planilhas e funil de WhatsApp.",
    tags: ["Rifas", "Vaquinha", "Google Sheets", "WhatsApp", "Automação"],
    status: "No ar",
    hue: "#e0457b",
    sublinks: [
      { label: "Rifa", url: "https://mariajulia.med.br/rifa" },
      { label: "Vaquinha", url: "https://mariajulia.med.br/vaquinha" },
    ],
  },
  {
    slug: "xpress-branding",
    name: ["Xpress", "Branding"],
    title: "Xpress Branding",
    type: "Site personalizado",
    kind: "Branding & experiência interativa",
    url: "https://www.notsoxpress.com.br/",
    description:
      "Plataforma institucional para estúdio de branding. Na página em construção, um mini-game jogável no navegador inspirado no Dino do Chrome.",
    tags: ["Branding", "Creative Coding", "Mini-game", "Web Design"],
    status: "No ar",
    hue: "#f08a00",
  },
  {
    slug: "trium-lab",
    name: ["Trium", "Lab"],
    title: "Trium Lab",
    type: "Site personalizado",
    kind: "Laboratório & inovação",
    url: "https://www.triumlab.com.br/",
    description:
      "Plataforma institucional e laboratório digital focado em pesquisa, desenvolvimento e soluções de alto impacto.",
    tags: ["UI / UX", "Web Performance", "Branding"],
    status: "No ar",
    hue: "#2d81ff",
  },
  {
    slug: "mari-andrade",
    name: ["Mari", "Andrade"],
    title: "Mari Andrade Advocacia",
    type: "Site personalizado",
    kind: "Direito & alta conversão",
    url: "https://mariandrade.adv.br/",
    description:
      "Presença digital estratégica para escritório de advocacia, com foco em autoridade de marca, experiência do cliente e captação qualificada.",
    tags: ["Landing Page", "Identidade Visual", "CRO"],
    status: "No ar",
    hue: "#7a5cff",
  },
  {
    slug: "fernando-oliveira",
    name: ["Fernando", "Oliveira"],
    title: "Fernando José de Oliveira",
    type: "Site personalizado",
    kind: "Ecossistema corporativo",
    url: "https://www.fernandojosedeoliveira.com.br/",
    description:
      "Estrutura web moderna e sólida, construída para transmitir segurança jurídica, navegação intuitiva e confiabilidade institucional.",
    tags: ["Institucional", "Clean Code", "Design System"],
    status: "No ar",
    hue: "#12a37f",
  },
  {
    slug: "cintia-camargo",
    name: ["Cíntia", "Camargo"],
    title: "Cíntia Camargo Advocacia",
    type: "Site personalizado",
    kind: "Experiência digital & captação",
    url: "https://www.cintiacamargohadv.com.br/",
    description:
      "Plataforma jurídica responsiva com fluxo ágil de atendimento, integração direta de canais e arquitetura de informação otimizada.",
    tags: ["Mobile First", "WhatsApp", "SEO"],
    status: "No ar",
    hue: "#d6453d",
  },
];

export const upcomingProjects: Project[] = [
  {
    slug: "morphico",
    name: ["Mor", "phico"],
    title: "Morphico",
    type: "App mobile & Web",
    kind: "Rotina fitness, medidas & nutrição",
    url: "",
    description:
      "Aplicativo de rotina fitness e health: registro de medidas corporais, peso, bioimpedância, alimentação e treinos. Traz orientações e indicações de exercícios com passo a passo e registro de alimentos consumidos para acelerar resultados no físico e na dieta.",
    tags: ["Health & Fitness", "Bioimpedância", "Metas & Dieta", "Exercícios Guiados", "Mobile App"],
    status: "No forno",
    hue: "#10b981",
  },
  {
    slug: "comensai",
    name: ["Comen", "sai"],
    title: "Comensai",
    type: "Web app & Mobile",
    kind: "Caderno vivo & compartilhamento de receitas",
    url: "",
    description:
      "Gerenciador colaborativo de receitas culinárias em formato de caderno vivo. Permite salvar criações de amigos no seu próprio caderno mantendo os créditos de origem, além de importar e registrar receitas diretamente por link, vídeo ou foto.",
    tags: ["Caderno de Receitas", "Compartilhamento", "Importação por Vídeo/Link", "Créditos de Autoria"],
    status: "No forno",
    hue: "#f59e0b",
  },
  {
    slug: "pedidoon",
    name: ["Pedido", "On"],
    title: "PedidoOn",
    type: "SaaS & Plataforma",
    kind: "Menu & cardápio digital para delivery",
    url: "",
    description:
      "Plataforma SaaS para pequenos e médios estabelecimentos gastronômicos operarem seus cardápios online com autonomia. Suporta pedidos para delivery próprio, retirada no balcão ou despacho rápido via Uber / 99 Flash com acompanhamento em tempo real.",
    tags: ["SaaS Delivery", "Cardápio Online", "Gestão de Pedidos", "Retirada & 99 Flash", "Autonomia"],
    status: "No forno",
    hue: "#6366f1",
  },
  {
    slug: "salvoai",
    name: ["Sal", "voai"],
    title: "Salvoai",
    type: "Web app & Mobile",
    kind: "Cofre inteligente de links, reels & vídeos com IA",
    url: "",
    description:
      "Ferramenta inteligente para salvar e centralizar links do Instagram, TikTok, YouTube e da web num só lugar. Organiza automaticamente com categorias e temas personalizados e conta com assistente de IA para classificar conteúdos e encontrar rapidamente qualquer vídeo salvo.",
    tags: ["Cofre de Links", "Assistente de IA", "Instagram & TikTok", "YouTube", "Categorização Automática", "Mobile & Web"],
    status: "No forno",
    hue: "#06b6d4",
  },
];

export const principles = [
  {
    title: "Feito do zero",
    text: "Cada linha é escrita para o projeto. Sem tema comprado, sem construtor genérico, sem código que ninguém entende.",
  },
  {
    title: "Rápido por padrão",
    text: "Astro e Tailwind entregam páginas leves, com JavaScript só onde ele realmente importa. Performance alta de fábrica.",
  },
  {
    title: "Mobile first",
    text: "A maior parte do uso acontece no celular. Toda tela nasce pensada para o polegar e depois cresce para o desktop.",
  },
  {
    title: "Conectado ao mundo",
    text: "WhatsApp, planilhas, e-mail, pagamentos e APIs conversam com o produto, para a ideia funcionar de ponta a ponta.",
  },
  {
    title: "Teste cedo",
    text: "Protótipo funcional antes de design final. O laboratório valida a ideia com uso real antes de investir no acabamento.",
  },
  {
    title: "Clareza nas escolhas",
    text: "Cada escolha tem um motivo que pode ser explicado. Do primeiro esboço ao produto em uso, o processo é construído em diálogo.",
  },
];
