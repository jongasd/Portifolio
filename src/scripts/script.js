/* --- Menu Mobile --- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navLinksItems = document.querySelectorAll(".nav-link, .nav-btn");
const icon = hamburger.querySelector("i");

function toggleMenu() {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("ph-list");
    icon.classList.add("ph-x");
  } else {
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  }
}

hamburger.addEventListener("click", toggleMenu);

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });
});

/* --- Mudar Navbar ao Rolar --- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 12, 0.95)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.background = "rgba(10, 10, 12, 0.7)";
    navbar.style.boxShadow = "none";
  }
});

/* --- Animação de Scroll (Reveal Elements) --- */
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-up",
);

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, revealOptions);

revealElements.forEach((el) => {
  revealOnScroll.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  const skillElements = document.querySelectorAll("#skills .reveal");
  skillElements.forEach((el) => {
    observer.observe(el);
  });
});

/* ==========================================================
   --- Seletor de Idioma (PT-BR / EN) ---
   ========================================================== */
const translations = {
  pt: {
    "nav.studio": "Studio",
    "nav.expertise": "Expertise",
    "nav.works": "Projetos",
    "nav.contact": "Contato",

    "hero.kicker": "Desenvolvedor & Criativo",
    "hero.title":
      'Criando experiências digitais de <span class="text-gradient">outro nível.</span>',
    "hero.subtitle":
      "Especialista em transformar ideias complexas em interfaces funcionais, rápidas e visualmente impactantes.",
    "hero.btnPortfolio": "Ver Portfólio",
    "hero.btnTalk": "Vamos Conversar",

    "about.heading": 'O <span class="text-gradient">Studio</span>',
    "about.subheading": "Mais do que código, eu construo soluções.",
    "about.text":
      "Olá! Meu nome é Jonas Daniel de Brito Lopes, tenho 17 anos e sou um programador Backend Júnior apaixonado por tecnologia e desenvolvimento de software. Possuo mais de 4 anos de experiência prática, adquirida por meio de estudos contínuos, projetos pessoais e aplicações reais. Meu objetivo vai além de escrever código: busco entender o problema, pensar na solução e entregar valor real através da tecnologia. Tenho foco em boas práticas, organização, design intuitivo e arquitetura bem estruturada, sempre priorizando performance, usabilidade e qualidade. Estou em constante evolução, aberto a novos desafios e motivado a crescer profissionalmente na área de desenvolvimento.",
    "about.statProjects": "Projetos Entregues",
    "about.statYears": "Anos de Experiência",

    "expertise.heading": 'Minha <span class="text-gradient">Expertise</span>',
    "expertise.toolsHeading":
      '<i class="ph ph-paint-brush-broad"></i> Ferramentas & Design',

    "skills.heading": 'Minhas <span class="highlight">Habilidades</span>',
    "skills.subtitle": "Tecnologias e ferramentas que domino.",
    "skills.languages": "Linguagens",
    "skills.frameworks": "Frameworks & Dados",
    "skills.tools": "Ferramentas",

    "works.heading":
      'Trabalhos <span class="text-gradient">Selecionados</span>',
    "works.subtitle": "Uma coleção de projetos que definem minha trajetória.",
    "works.visitSite": "Visitar Site",
    "works.code": "Código",
    "works.p1.desc":
      "O TechPartz Eletrônicos foi um projeto desenvolvido em equipe em conjunto com a equipe do SENAI em Itu-SP. O objetivo desse projeto foi desenvolver uma aplicação para uma empresa de gerenciamento de estoque de componentes eletrônicos, que organize e mostre os produtos e registre todo o processo. Esse projeto trouxe para a equipe uma experiência real de como aplicar um projeto desde o levantamento de requisitos até o desenvolvimento das páginas e também a importância de comprimento de prazos e metas.",
    "works.p2.desc":
      "Projeto desenvolvido para o SESI com o objetivo de divulgar notícias e informações de forma organizada e acessível, funcionando como uma revista digital para a comunidade atendida pela instituição.",
    "works.p3.desc":
      "Projeto pessoal de um sistema PDV (Ponto de Venda) para um aplicativo de minimercado de condomínio, permitindo o registro de vendas, controle de produtos e gestão do pequeno negócio de forma prática.",
    "works.p4.title": "Gerador de Senhas Fortes",
    "works.p4.desc":
      "Este projeto consiste em um gerador de senhas fortes, desenvolvido com o objetivo de auxiliar usuários na criação de senhas seguras para suas contas. A aplicação contribui diretamente para a proteção de dados, gerando combinações robustas que aumentam a segurança contra acessos não autorizados.",

    "contact.title":
      'Vamos construir algo <span class="text-gradient">incrível</span> juntos?',
    "contact.text":
      "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.",

    "footer.text": "© 2025 Jonas Daniel. Todos os Direitos Reservados.",
  },
  en: {
    "nav.studio": "Studio",
    "nav.expertise": "Expertise",
    "nav.works": "Projects",
    "nav.contact": "Contact",

    "hero.kicker": "Developer & Creative",
    "hero.title":
      'Creating digital experiences on <span class="text-gradient">another level.</span>',
    "hero.subtitle":
      "Specialized in turning complex ideas into functional, fast, and visually impactful interfaces.",
    "hero.btnPortfolio": "View Portfolio",
    "hero.btnTalk": "Let's Talk",

    "about.heading": 'The <span class="text-gradient">Studio</span>',
    "about.subheading": "More than code, I build solutions.",
    "about.text":
      "Hi! My name is Jonas Daniel de Brito Lopes, I'm 17 years old and I'm a Junior Backend Developer passionate about technology and software development. I have more than 4 years of hands-on experience, gained through continuous study, personal projects, and real-world applications. My goal goes beyond writing code: I aim to understand the problem, think through the solution, and deliver real value through technology. I focus on best practices, organization, intuitive design, and well-structured architecture, always prioritizing performance, usability, and quality. I'm constantly evolving, open to new challenges, and motivated to grow professionally in the development field.",
    "about.statProjects": "Delivered Projects",
    "about.statYears": "Years of Experience",

    "expertise.heading": 'My <span class="text-gradient">Expertise</span>',
    "expertise.toolsHeading":
      '<i class="ph ph-paint-brush-broad"></i> Tools & Design',

    "skills.heading": 'My <span class="highlight">Skills</span>',
    "skills.subtitle": "Technologies and tools I've mastered.",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Data",
    "skills.tools": "Tools",

    "works.heading": 'Selected <span class="text-gradient">Works</span>',
    "works.subtitle": "A collection of projects that define my journey.",
    "works.visitSite": "Visit Site",
    "works.code": "Code",
    "works.p1.desc":
      "TechPartz Eletrônicos was a project developed as a team together with the SENAI team in Itu-SP. The goal of this project was to build an application for an electronics component stock management company, organizing and displaying products while logging the entire process. This project gave the team real-world experience in applying a project from requirements gathering all the way to page development, as well as the importance of meeting deadlines and goals.",
    "works.p2.desc":
      "Project developed for SESI with the goal of sharing news and information in an organized and accessible way, working as a digital magazine for the community served by the institution.",
    "works.p3.desc":
      "Personal project of a POS (Point of Sale) system for a condominium mini-market app, allowing sales logging, product control, and practical management of the small business.",
    "works.p4.title": "Strong Password Generator",
    "works.p4.desc":
      "This project is a strong password generator, built to help users create secure passwords for their accounts. The application directly contributes to data protection by generating robust combinations that increase security against unauthorized access.",

    "contact.title":
      'Let\'s build something <span class="text-gradient">amazing</span> together?',
    "contact.text":
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

    "footer.text": "© 2025 Jonas Daniel. All Rights Reserved.",
  },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = lang === "en" ? "en" : "pt-br";
}

function setLanguage(lang) {
  applyTranslations(lang);

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch (e) {
    /* localStorage indisponível — segue sem persistir preferência */
  }
}

document.querySelectorAll(".lang-option").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let initialLang = "pt";
try {
  initialLang = localStorage.getItem("portfolio-lang") || "pt";
} catch (e) {
  initialLang = "pt";
}
setLanguage(initialLang);
