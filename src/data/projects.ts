
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  challenges: string;
  solution: string;
  features: string[];
}

export const projects: Project[] = [
  
  {
  id: 1,
  title: "PodoClinic Pro",
  description:
    "Sistema para gestão de atendimentos em clínica de podologia, controle de pacientes, agendamentos, e histórico de tratamentos. Projeto pessoal disponível no GitHub.",
  image: "https://i.imgur.com/Pj39DAd.jpeg", // substitua por imagem/screenshot real
  technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"], // ajuste conforme o stack real
  link: "https://preview--happy-feet-planner.lovable.app/", // ou se houver deploy, link direto
  github: "https://github.com/fabioalexandre1911/v0-podologia-system",
  challenges:
    "Entender o fluxo de atendimento específico de podologia e estruturar o banco de dados para pacientes, tratamentos, agendamentos e histórico, além de garantir usabilidade para clínicos.",
  solution:
    "Desenvolvi uma API com Node.js/Express e banco PostgreSQL, criei front-end com React + TypeScript para interface responsiva, e implementei funcionalidades de CRUD e relatórios para facilitar o acompanhamento dos casos.",
  features: [
    "Cadastro e gestão de pacientes",
    "Agendamento de atendimentos com histórico",
    "Relatórios e filtros por tratamentos/sessões",
  ],
},
{
  id: 2,
  title: "KeyKeeper Essence",
  description:
    "Aplicativo web para gestão de chaves e acessos (KeyKeeper Essence) desenvolvida com stack moderna. O projeto visa organizar e controlar chaves, permissões e histórico de uso em ambientes corporativos ou residenciais.",
  image: "https://i.imgur.com/HAqeSyg.jpeg", // substitua pela screenshot ou logo real
  technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn-ui"], // tecnologias identificadas no repo :contentReference[oaicite:1]{index=1}
  link: "https://preview--keykeeper-essence.lovable.app/", // se houver deploy público, coloque aqui
  github: "https://github.com/fabioalexandre1911/keykeeper-essence",
  challenges:
    "Configurar a estrutura inicial com Vite + React + TypeScript e integrar uma UI moderna com shadcn-ui, além de garantir uma arquitetura escalável desde o início para futuras funcionalidades.",
  solution:
    "Utilizei Vite para configuração rápida e construção leve, TypeScript para tipagem estática e organização de código, e shadcn-ui com Tailwind CSS para estilização e componentes prontos, acelerando o desenvolvimento do front-end e garantindo consistência visual.",
  features: [
    "Interface moderna com React + shadcn-ui",
    "Tema claro/escuro com Tailwind CSS",
    "Gerenciamento de chaves, acessos e histórico",
  ],
},
{
  id: 3,
  title: "Website Edmárcio Rodrigues",
  description:
    "Este é um website de Edmárcio Rodrigues, mestre de artes marciais com mais de três décadas de dedicação e paixão por diversas modalidades de luta.",
  image: "https://fabioalexandre1911.github.io/portfolio-fabio/assets/edmarcio-BY9J6qg2.jpg", // substitua pela screenshot ou logo real
  technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn-ui"], // tecnologias identificadas no repo :contentReference[oaicite:1]{index=1}
  link: "https://edmarciorodrigues.com.br/", // se houver deploy público, coloque aqui
  //github: "https://github.com/fabioalexandre1911/keykeeper-essence",
  challenges:
    "Configurar a estrutura inicial com Vite + React + TypeScript e integrar uma UI moderna com shadcn-ui, além de garantir uma arquitetura escalável desde o início para futuras funcionalidades.",
  solution:
    "Utilizei Vite para configuração rápida e construção leve, TypeScript para tipagem estática e organização de código, e shadcn-ui com Tailwind CSS para estilização e componentes prontos, acelerando o desenvolvimento do front-end e garantindo consistência visual.",
  features: [
    "Interface moderna com React + shadcn-ui",
    "Tema claro/escuro com Tailwind CSS",
    "Gerenciamento de chaves, acessos e histórico",
  ],
},
{
  id: 4,
  title: "Amopé Podologia",
  description:
    "Este é um website de cliníca de podologia em Fortaleza! Com vários tipos de tratamentos com profissionais altamente especializadas. Construção com HTML, CSS e JavaScript e Wordpress",
  image: "https://fabioalexandre1911.github.io/portfolio-fabio/assets/amope-8jZO5BcU.jpg", // substitua pela screenshot ou logo real
  technologies: ["Wordpress", "Bootstrap", "CSS"], // tecnologias identificadas no repo :contentReference[oaicite:1]{index=1}
  link: "https://amopepodologia.com.br/", // se houver deploy público, coloque aqui
  //github: "https://github.com/fabioalexandre1911/keykeeper-essence",
  challenges:
    "Configurar a estrutura inicial com Vite + React + TypeScript e integrar uma UI moderna com shadcn-ui, além de garantir uma arquitetura escalável desde o início para futuras funcionalidades.",
  solution:
    "Utilizei Vite para configuração rápida e construção leve, TypeScript para tipagem estática e organização de código, e shadcn-ui com Tailwind CSS para estilização e componentes prontos, acelerando o desenvolvimento do front-end e garantindo consistência visual.",
  features: [
    "Interface moderna com bootstrap",
    "Tema wordpress",
    "Gerenciamento de conteúdo",
  ],
},
{
  id: 5,
  title: "Erpress",
  description:
    "Sistema de gestão - ERP fácil e descomplicado, atende diversos seguimentos no mercado, tecnologias aplicadas, PHP e MYSQL",
  image: "https://fabiosousa.dev.br/agendamento-online/booking.png", // substitua pela screenshot ou logo real
  technologies: ["CodeIgniter", "PHP", "MYSQL"], // tecnologias identificadas no repo :contentReference[oaicite:1]{index=1}
  link: "https://fabiosousa.dev.br/agendamento-online/", // se houver deploy público, coloque aqui
  //github: "https://github.com/fabioalexandre1911/keykeeper-essence",
  challenges:
    "Configurar a estrutura inicial com Vite + React + TypeScript e integrar uma UI moderna com shadcn-ui, além de garantir uma arquitetura escalável desde o início para futuras funcionalidades.",
  solution:
    "Utilizei Vite para configuração rápida e construção leve, TypeScript para tipagem estática e organização de código, e shadcn-ui com Tailwind CSS para estilização e componentes prontos, acelerando o desenvolvimento do front-end e garantindo consistência visual.",
  features: [
    "CodeIgniter", "PHP", "MYSQL",
    "bootstrap",
    "Gerenciamento de chaves, acessos e histórico",
  ],
},
{
  id: 6,
  title: "Advocacia",
  description:
    "Site institucional de um escritório de advocacia, apresentando serviços jurídicos e informações sobre a equipe.",
  image: "https://fabioalexandre1911.github.io/portfolio-fabio/assets/advocacia-DPNgYQO-.jpg", // substitua pela screenshot ou logo real
  technologies: ["Wordpress", "Bootstrap", "CSS"], // tecnologias identificadas no repo :contentReference[oaicite:1]{index=1}
  link: "https://downloadsistemas.com.br/advogado/", // se houver deploy público, coloque aqui
  //github: "https://github.com/fabioalexandre1911/keykeeper-essence",
  challenges:
    "Configurar a estrutura inicial com Wordpress + Bootstrap + Sass e integrar uma UI moderna com shadcn-ui, além de garantir uma arquitetura escalável desde o início para futuras funcionalidades.",
  solution:
    "Utilizei Vite para configuração rápida e construção leve, TypeScript para tipagem estática e organização de código, e shadcn-ui com Tailwind CSS para estilização e componentes prontos, acelerando o desenvolvimento do front-end e garantindo consistência visual.",
  features: [
    "Interface moderna com bootstrap",
    "Tema wordpress",
    "Gerenciamento de conteúdo",
  ],
}

];
