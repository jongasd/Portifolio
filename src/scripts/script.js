/**
 * Jonas Daniel | Creative Developer & Backend Júnior
 * Interactive Engine: I18n Translations, Telemetry, Web Audio Synth, Interactive CLI, Canvas Mockups
 */

// Global State
const PortfolioState = {
  currentLang: "pt",
  audioEnabled: false,
  bootComplete: false,
  uptimeSec: 0,
  termHistory: [],
  historyIndex: -1,
};

// Bilingual Translations Dictionary
const TRANSLATIONS = {
  pt: {
    "nav.studio": "Studio",
    "nav.expertise": "Expertise",
    "nav.skills": "Habilidades",
    "nav.works": "Projetos",
    "nav.terminal": "Terminal",
    "nav.contact": "Contato",
    "nav.status": "DISPONÍVEL",

    "hero.kicker": "Desenvolvedor & Criativo // Backend Júnior",
    "hero.title": "Criando experiências digitais de <span class=\"text-gradient\">outro nível.</span>",
    "hero.subtitle": "Especialista em transformar ideias complexas em interfaces funcionais, rápidas e visualmente impactantes com foco em arquitetura robusta e código limpo.",
    "hero.btnPortfolio": "Ver Portfólio",
    "hero.btnTalk": "Vamos Conversar",
    "hero.btnTerminal": "Terminal CLI",
    "hero.scroll": "EXPLORAR",

    "about.heading": "O <span class=\"text-gradient\">Studio</span>",
    "about.subheading": "Mais do que código, eu construo soluções.",
    "about.text": "Olá! Meu nome é <b>Jonas Daniel de Brito Lopes</b>, tenho 17 anos e sou um programador Backend Júnior apaixonado por tecnologia e desenvolvimento de software. Possuo mais de 4 anos de experiência prática, adquirida por meio de estudos contínuos, projetos pessoais e aplicações reais.",
    "about.text2": "Meu objetivo vai além de escrever código: busco entender o problema, pensar na solução e entregar valor real através da tecnologia. Tenho foco em boas práticas, organização, design intuitivo e arquitetura bem estruturada, sempre priorizando performance, usabilidade e qualidade. Estou em constante evolução, aberto a novos desafios e motivado a crescer profissionalmente.",
    "about.statProjects": "Projetos Entregues",
    "about.statYears": "Anos de Experiência",
    "about.statDedication": "Comprometimento",

    "expertise.heading": "Minha <span class=\"text-gradient\">Expertise</span>",
    "expertise.subtitle": "Competências analíticas e técnicas aplicadas em ambientes de desenvolvimento ágeis.",
    "expertise.techHeading": "Tech Stack & Desenvolvimento",
    "expertise.toolsHeading": "Metodologias & Engenharia",
    "exp.agile": "Aplicação de Metodologias Ágeis (Scrum/Kanban)",
    "exp.logical": "Pensamento Lógico & Resolução de Problemas",
    "exp.requirements": "Levantamento de Requisitos",
    "exp.git": "Git & Fundamentos de DevOps",
    "exp.routes": "Mapeamento de Rotas & Arquitetura",
    "exp.goals": "Definição de Metas & Prazos",

    "skills.heading": "Minhas <span class=\"text-gradient\">Habilidades</span>",
    "skills.subtitle": "Tecnologias, frameworks e ferramentas que utilizo no dia a dia.",
    "skills.languages": "Linguagens",
    "skills.frameworks": "Frameworks & Dados",
    "skills.tools": "Ferramentas & Plataformas",

    "works.heading": "Trabalhos <span class=\"text-gradient\">Selecionados</span>",
    "works.subtitle": "Uma coleção de projetos práticos e acadêmicos que definem minha trajetória.",
    "works.inspect": "Ver Especificações",
    "works.code": "Código Fonte",
    "works.visitSite": "Visitar Site Online",
    "works.p1.desc": "O TechPartz Eletrônicos foi um projeto desenvolvido em equipe em conjunto com a equipe do SENAI em Itu-SP. O objetivo desse projeto foi desenvolver uma aplicação para uma empresa de gerenciamento de estoque de componentes eletrônicos, que organize e mostre os produtos e registre todo o processo. Esse projeto trouxe para a equipe uma experiência real de como aplicar um projeto desde o levantamento de requisitos até o desenvolvimento das páginas e também a importância de cumprimento de prazos e metas.",
    "works.p2.desc": "Projeto desenvolvido para o SESI com o objetivo de divulgar notícias e informações de forma organizada e acessível, funcionando como uma revista digital interativa para a comunidade atendida pela instituição escolar. Focado em facilidade de leitura e engajamento da juventude.",
    "works.p3.desc": "Projeto de um sistema PDV (Ponto de Venda) completo para um aplicativo de minimercado autônomo de condomínio. Permite o registro ágil de vendas, controle em tempo real de produtos em estoque e gestão financeira prática para pequenos comércios residenciais.",
    "works.p4.title": "Gerador de Senhas Fortes",
    "works.p4.desc": "Este projeto consiste em um gerador de senhas seguras, desenvolvido com o objetivo de auxiliar usuários na criação de credenciais robustas para suas contas. A aplicação contribui diretamente para a proteção de dados pessoais, gerando combinações randômicas que impedem ataques de força bruta e acessos não autorizados.",

    "terminal.heading": "Terminal <span class=\"text-gradient\">Interativo CLI</span>",
    "terminal.subtitle": "Execute comandos para consultar dados sobre Jonas Daniel em tempo real.",

    "contact.title": "Vamos construir algo <span class=\"text-gradient\">incrível</span> juntos?",
    "contact.text": "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua equipe.",
    "form.name": "Seu Nome / Empresa *",
    "form.email": "Seu E-mail *",
    "form.msg": "Mensagem / Proposta *",
    "form.submit": "Enviar Mensagem Direta",

    "footer.text": "© 2026 Jonas Daniel de Brito Lopes. Todos os Direitos Reservados.",
  },

  en: {
    "nav.studio": "Studio",
    "nav.expertise": "Expertise",
    "nav.skills": "Skills",
    "nav.works": "Projects",
    "nav.terminal": "Terminal",
    "nav.contact": "Contact",
    "nav.status": "AVAILABLE",

    "hero.kicker": "Developer & Creative // Junior Backend",
    "hero.title": "Crafting digital experiences to <span class=\"text-gradient\">the next level.</span>",
    "hero.subtitle": "Specialist in transforming complex ideas into functional, rapid, and visually striking interfaces with a focus on robust architecture and clean code.",
    "hero.btnPortfolio": "View Portfolio",
    "hero.btnTalk": "Let's Talk",
    "hero.btnTerminal": "CLI Terminal",
    "hero.scroll": "EXPLORE",

    "about.heading": "The <span class=\"text-gradient\">Studio</span>",
    "about.subheading": "More than code, I build solutions.",
    "about.text": "Hello! My name is <b>Jonas Daniel de Brito Lopes</b>, I am 17 years old and a Junior Backend Developer passionate about technology and software engineering. I have over 4 years of hands-on experience gained through continuous study, personal projects, and real applications.",
    "about.text2": "My purpose goes beyond writing code: I seek to understand the problem, architect the solution, and deliver genuine value through technology. Focused on best practices, intuitive design, and clean architecture, always prioritizing performance, usability, and quality.",
    "about.statProjects": "Projects Delivered",
    "about.statYears": "Years of Experience",
    "about.statDedication": "Commitment",

    "expertise.heading": "My <span class=\"text-gradient\">Expertise</span>",
    "expertise.subtitle": "Analytical and technical competencies applied across agile development environments.",
    "expertise.techHeading": "Tech Stack & Development",
    "expertise.toolsHeading": "Methodologies & Engineering",
    "exp.agile": "Application of Agile Methodologies (Scrum/Kanban)",
    "exp.logical": "Logical Thinking & Problem Solving",
    "exp.requirements": "Requirements Gathering",
    "exp.git": "Git & DevOps Fundamentals",
    "exp.routes": "Route Mapping & Architecture",
    "exp.goals": "Definition of Goals & Milestones",

    "skills.heading": "My <span class=\"text-gradient\">Skills</span>",
    "skills.subtitle": "Technologies, frameworks, and tools I use on a daily basis.",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Data",
    "skills.tools": "Tools & Platforms",

    "works.heading": "Selected <span class=\"text-gradient\">Works</span>",
    "works.subtitle": "A collection of practical and academic projects defining my journey.",
    "works.inspect": "View Specifications",
    "works.code": "Source Code",
    "works.visitSite": "Visit Live Site",
    "works.p1.desc": "TechPartz Eletrônicos was a team-developed software project in partnership with the SENAI team in Itu-SP. The objective was to build an ERP stock management system for an electronic components enterprise, organizing catalog products and logging workflows.",
    "works.p2.desc": "Project built for SESI with the goal of broadcasting news and institutional announcements in an accessible format, functioning as an interactive digital magazine for the student community.",
    "works.p3.desc": "Complete Point of Sale (POS) system engineered for a condominium convenience store app, enabling rapid sales logging, real-time inventory management, and business tracking for micro-retail.",
    "works.p4.title": "Strong Password Generator",
    "works.p4.desc": "A cryptographic password generator designed to assist users in creating secure credentials. Protects personal user data by generating high-entropy combinations resilient to brute-force vectors.",

    "terminal.heading": "Interactive <span class=\"text-gradient\">CLI Terminal</span>",
    "terminal.subtitle": "Run commands to inspect real-time information about Jonas Daniel.",

    "contact.title": "Let's build something <span class=\"text-gradient\">extraordinary</span> together?",
    "contact.text": "I am always open to discussing new projects, creative challenges, or opportunities to join your team.",
    "form.name": "Your Name / Organization *",
    "form.email": "Your Email *",
    "form.msg": "Message / Proposal *",
    "form.submit": "Dispatch Direct Message",

    "footer.text": "© 2026 Jonas Daniel de Brito Lopes. All Rights Reserved.",
  },
};

// Project Specifications Database for Modals
const REAL_PROJECT_DATA = {
  p1: {
    id: "#SENAI-01 // ERP & ESTOQUE",
    title: "TechPartz Eletrônicos // Gestão de Estoque",
    desc: "Aplicação corporativa desenvolvida em equipe junto ao SENAI Itu-SP para gerenciamento de estoque de componentes eletrônicos. Inclui catálogo dinâmico de produtos, controle de entrada/saída de componentes e rastreamento completo de pedidos.",
    challenges: [
      "Levantamento detalhado de requisitos com stakeholders para modelar o fluxo de inventário de componentes eletrônicos.",
      "Estruturação de banco de dados relacional para garantir consistência e integridade das quantidades em estoque.",
      "Aplicação de metodologias ágeis (Scrum), entregando cada sprint dentro dos prazos estipulados pela banca do SENAI.",
    ],
    stack: ["Node.js", "Express", "SQL", "EJS / HTML5", "CSS3", "JavaScript"],
    live: null,
    code: "https://github.com/jongasd/SENAI/tree/main/Projeto%20Software",
  },
  p2: {
    id: "#SESI-02 // REVISTA DIGITAL",
    title: "Conecta Jovem // Revista Digital SESI",
    desc: "Portal web responsivo criado para o SESI com foco em distribuição de notícias, artigos culturais e informativos escolares. Desenvolvido para oferecer carregamento instantâneo e layout acessível para estudantes e professores.",
    challenges: [
      "Criação de interface fluida e responsiva com foco na facilidade de leitura em dispositivos móveis e desktops.",
      "Organização modular de seções jornalísticas com navegação intuitiva.",
      "Deploy e otimização contínua de performance e assets na plataforma Vercel.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Design Responsivo", "Vercel"],
    live: "https://projeto-revista.vercel.app",
    code: "https://github.com/jongasd/projeto-revista",
  },
  p3: {
    id: "#PDV-03 // MOBILE & REST API",
    title: "fcondo-system // PDV Minimercado de Condomínio",
    desc: "Sistema de Ponto de Venda (PDV) integrado a aplicativo mobile para minimercados autônomos residenciais. Facilita o autoatendimento dos moradores, controle de estoque e balanço de vendas.",
    challenges: [
      "Desenvolvimento de interface mobile intuitiva com React Native e Expo para agilizar a leitura de produtos e finalização de compras.",
      "Integração com API Node.js para sincronização de vendas e atualização imediata do estoque.",
      "Tratamento de estados e validações de pagamento para pequenos comércios residenciais.",
    ],
    stack: ["Node.js", "React Native", "Expo", "API REST", "JSON", "JavaScript"],
    live: null,
    code: "https://github.com/jongasd/fcondo-system",
  },
  p4: {
    id: "#SEC-04 // CRIPTOGRAFIA WEB",
    title: "Gerador de Senhas Fortes // Security Toolkit",
    desc: "Aplicação focada em segurança cibernética e privacidade de dados, gerando chaves criptográficas de alta entropia com parâmetros configuráveis de caracteres especiais, números e símbolos.",
    challenges: [
      "Implementação de algoritmos de aleatoriedade forte em JavaScript para impedir padrões previsíveis.",
      "Interface limpa com cópia instantânea para a área de transferência com feedback visual de segurança.",
      "Métricas de medição de força de senha para conscientizar o usuário sobre segurança digital.",
    ],
    stack: ["JavaScript", "Criptografia", "HTML5", "CSS3", "Git"],
    live: null,
    code: "https://github.com/jongasd/Projetos-Lopes/tree/main/Html%2C%20Css%2C%20JS/Gerador%20de%20Senhas%20Online",
  },
};

// ----------------------------------------------------
// TACTILE WEB AUDIO SYNTHESIZER
// ----------------------------------------------------
class PurpleAudioSynth {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq = 600, duration = 0.04, type = "sine", gainVal = 0.04) {
    if (!PortfolioState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {}
  }

  click() {
    this.playTone(850 + Math.random() * 200, 0.02, "triangle", 0.03);
  }

  chime() {
    if (!PortfolioState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.12);
    } catch {}
  }

  whoosh() {
    if (!PortfolioState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(900, now);
      filter.frequency.exponentialRampToValueAtTime(150, now + 0.2);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.2);
    } catch {}
  }

  success() {
    this.playTone(784, 0.06, "sine", 0.05); // G5
    setTimeout(() => this.playTone(1046.5, 0.1, "sine", 0.05), 70); // C6
  }

  error() {
    this.playTone(260, 0.12, "sawtooth", 0.06);
  }
}

const AudioFX = new PurpleAudioSynth();

// ----------------------------------------------------
// INITIALIZATION ON DOM READY
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTelemetry();
  initBootSequence();
  initI18n();
  initAudioControls();
  initMatrixRain();
  initParticleField();
  initCursorGlow();
  initNavbar();
  initTypewriter();
  initCounters();
  initProjectModals();
  initProjectCanvases();
  initTerminalShell();
  initContactForm();
  initCopyButton();
});

// ----------------------------------------------------
// REAL HARDWARE & SYSTEM TELEMETRY DETECTION
// ----------------------------------------------------
function initTelemetry() {
  // 1. CPU Logical Cores
  const cpuEl = document.getElementById("tele-cpu");
  if (cpuEl) {
    const cores = navigator.hardwareConcurrency || 8;
    cpuEl.textContent = `${cores} CORES`;
  }

  // 2. Memory Capacity
  const memEl = document.getElementById("tele-mem");
  if (memEl) {
    if (navigator.deviceMemory) {
      memEl.textContent = `${navigator.deviceMemory} GB ALLOC`;
    } else {
      memEl.textContent = "V8 ENGINE";
    }
  }

  // 3. WebGL GPU Render Detection
  const gpuEl = document.getElementById("tele-gpu");
  if (gpuEl) {
    try {
      const c = document.createElement("canvas");
      const gl = c.getContext("webgl2") || c.getContext("webgl");
      if (gl) {
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        if (ext) {
          const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
          const cleanRenderer = renderer.split("/")[0].replace("ANGLE (", "").replace(")", "").trim();
          gpuEl.textContent = cleanRenderer.length > 18 ? cleanRenderer.substring(0, 16) + ".." : cleanRenderer;
        } else {
          gpuEl.textContent = "WebGL 2.0";
        }
      }
    } catch {
      gpuEl.textContent = "Canvas 2D";
    }
  }

  // 4. Live Ping Measurement
  const pingEl = document.getElementById("live-ping");
  const measurePing = () => {
    const start = performance.now();
    const img = new Image();
    img.src = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7?t=${Date.now()}`;
    img.onload = img.onerror = () => {
      const ms = Math.max(3, Math.round(performance.now() - start));
      if (pingEl) pingEl.textContent = `${ms} ms`;
    };
  };
  measurePing();
  setInterval(measurePing, 12000);

  // 5. Session Uptime Counter
  const uptimeEl = document.getElementById("uptime");
  setInterval(() => {
    PortfolioState.uptimeSec++;
    const s = PortfolioState.uptimeSec;
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    if (uptimeEl) uptimeEl.textContent = `${h}:${m}:${sec}`;
  }, 1000);
}

// ----------------------------------------------------
// BOOT SEQUENCE & POST WELCOME
// ----------------------------------------------------
function initBootSequence() {
  const screen = document.getElementById("boot-screen");
  const barFill = document.getElementById("boot-bar-fill");
  const percentEl = document.getElementById("boot-percent");
  const statusEl = document.getElementById("boot-status");
  const logBox = document.getElementById("boot-log-box");
  const skipBtn = document.getElementById("btn-skip-boot");

  const logs = [
    { p: 20, text: "[0.015] Perfil carregado: Jonas Daniel de Brito Lopes (17 anos)" },
    { p: 40, text: "[0.042] Especialidade: Backend Júnior, APIs Node.js & Metodologias Ágeis" },
    { p: 65, text: "[0.080] Portfólio Institucional: Projetos SENAI & SESI inicializados" },
    { p: 85, text: "[0.125] Pipeline Gráfico: Interface Roxo/Violeta ativada com sucesso" },
    { p: 100, text: "[0.160] Sistema Online // Seja bem-vindo ao portfólio!" },
  ];

  let currentP = 0;
  let logIdx = 0;

  function finishBoot() {
    if (PortfolioState.bootComplete) return;
    PortfolioState.bootComplete = true;
    if (barFill) barFill.style.width = "100%";
    if (percentEl) percentEl.textContent = "100%";
    if (statusEl) {
      statusEl.textContent = "SISTEMA ONLINE // BEM-VINDO";
      statusEl.style.color = "#a855f7";
    }

    AudioFX.success();

    setTimeout(() => {
      if (screen) screen.classList.add("hidden");
    }, 450);
  }

  if (skipBtn) skipBtn.addEventListener("click", finishBoot);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !PortfolioState.bootComplete) finishBoot();
  });

  const timer = setInterval(() => {
    if (PortfolioState.bootComplete) {
      clearInterval(timer);
      return;
    }

    currentP += 4 + Math.random() * 5;
    if (currentP > 100) currentP = 100;

    if (barFill) barFill.style.width = `${currentP}%`;
    if (percentEl) percentEl.textContent = `${Math.floor(currentP)}%`;

    while (logIdx < logs.length && currentP >= logs[logIdx].p) {
      const entry = document.createElement("div");
      entry.className = "log-entry";
      entry.textContent = logs[logIdx].text;
      if (logBox) {
        logBox.appendChild(entry);
        logBox.scrollTop = logBox.scrollHeight;
      }
      AudioFX.click();
      logIdx++;
    }

    if (currentP >= 100) {
      clearInterval(timer);
      finishBoot();
    }
  }, 45);
}

// ----------------------------------------------------
// BILINGUAL TRANSLATION ENGINE (PT / EN)
// ----------------------------------------------------
function initI18n() {
  const langBtns = document.querySelectorAll(".lang-option");

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    PortfolioState.currentLang = lang;

    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const translated = TRANSLATIONS[lang][key];
      if (translated) {
        el.innerHTML = translated;
      }
    });

    AudioFX.chime();
  }

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ----------------------------------------------------
// AUDIO CONTROLS & SOUND FX
// ----------------------------------------------------
function initAudioControls() {
  const audioBtn = document.getElementById("audio-toggle");
  const audioStateLbl = document.getElementById("audio-state");
  const audioIcon = document.getElementById("audio-icon");

  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      AudioFX.init();
      PortfolioState.audioEnabled = !PortfolioState.audioEnabled;
      audioBtn.setAttribute("aria-pressed", PortfolioState.audioEnabled.toString());
      if (audioStateLbl) audioStateLbl.textContent = PortfolioState.audioEnabled ? "ON" : "OFF";
      if (audioIcon) {
        audioIcon.className = PortfolioState.audioEnabled ? "ph-bold ph-speaker-high" : "ph ph-speaker-simple-slash";
      }
      if (PortfolioState.audioEnabled) AudioFX.chime();
    });
  }

  // Interactive buttons sound feedback
  document.querySelectorAll(".btn, .nav-link, .quick-chip, .btn-chip, .btn-inspect-modal").forEach((el) => {
    el.addEventListener("mouseenter", () => AudioFX.click());
    el.addEventListener("click", () => AudioFX.chime());
  });
}

// ----------------------------------------------------
// MATRIX RAIN CANVAS (Purple & Fuchsia Phosphor)
// ----------------------------------------------------
function initMatrixRain() {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const chars = "0123456789ABCDEF{}[]<>/:*+=~JONAS_DANIEL";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(5, 2, 10, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'Fira Code', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      if (Math.random() > 0.98) {
        ctx.fillStyle = "#ffffff";
      } else {
        ctx.fillStyle = Math.random() > 0.6 ? "rgba(168, 85, 247, 0.4)" : "rgba(217, 70, 239, 0.35)";
      }

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ----------------------------------------------------
// AMBIENT PARTICLE FIELD
// ----------------------------------------------------
function initParticleField() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const count = Math.min(50, Math.floor(window.innerWidth / 25));
  let mouseX = -1000, mouseY = -1000;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: 1 + Math.random() * 1.8,
      color: Math.random() > 0.5 ? "#c084fc" : "#d946ef",
      alpha: 0.2 + Math.random() * 0.4,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        p.x -= dx * 0.01;
        p.y -= dy * 0.01;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.08 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ----------------------------------------------------
// CURSOR GLOW EFFECT
// ----------------------------------------------------
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;
  let mx = 0, my = 0, gx = 0, gy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    glow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });

  function animate() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = `${gx}px`;
    glow.style.top = `${gy}px`;
    requestAnimationFrame(animate);
  }
  animate();
}

// ----------------------------------------------------
// NAVBAR & MOBILE MENU
// ----------------------------------------------------
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("hamburger");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen.toString());
      AudioFX.chime();
    });

    document.querySelectorAll(".nav-link, .nav-btn").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 140;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (navLink) {
        navLink.classList.toggle("active", scrollY >= top && scrollY < top + height);
      }
    });
  });
}

// ----------------------------------------------------
// DYNAMIC TYPEWRITER (Portuguese & English)
// ----------------------------------------------------
function initTypewriter() {
  const el = document.getElementById("hero-typewriter");
  if (!el) return;

  const lines = [
    "Programador Backend Júnior apaixonado por arquitetura.",
    "Projetos desenvolvidos em parceria com SENAI & SESI.",
    "Transformando lógica em código escalável e de alto valor.",
    "Node.js, Express, Python, React Native e SQL.",
  ];

  let lineIdx = 0, charIdx = 0, isDeleting = false, pause = 0;

  function type() {
    if (pause > 0) {
      pause--;
      setTimeout(type, 50);
      return;
    }

    const current = lines[lineIdx];

    if (!isDeleting) {
      charIdx++;
      el.textContent = current.substring(0, charIdx);
      if (charIdx === current.length) {
        pause = 40;
        isDeleting = true;
      }
      setTimeout(type, 30 + Math.random() * 25);
    } else {
      charIdx--;
      el.textContent = current.substring(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        lineIdx = (lineIdx + 1) % lines.length;
        pause = 10;
      }
      setTimeout(type, 18);
    }
  }
  setTimeout(type, 1600);
}

// ----------------------------------------------------
// QUANTITATIVE METRICS COUNTERS
// ----------------------------------------------------
function initCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  let counted = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        counters.forEach((counter) => {
          const target = parseInt(counter.dataset.target, 10);
          const duration = 1800;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(eased * target);

            counter.textContent = val;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = target;
            }
          }
          requestAnimationFrame(update);
        });
      }
    });
  }, { threshold: 0.4 });

  const container = document.querySelector(".stats-row");
  if (container) observer.observe(container);

  // Animate skill progress bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".skills-column").forEach((col) => skillObserver.observe(col));
}

// ----------------------------------------------------
// PROJECT DOSSIER MODALS (Modern Native Dialog)
// ----------------------------------------------------
function initProjectModals() {
  const dialog = document.getElementById("project-modal");
  const closeBtn = document.getElementById("btn-close-modal");
  const dismissBtn = document.getElementById("btn-modal-dismiss");
  const inspectBtns = document.querySelectorAll(".btn-inspect-modal");

  if (!dialog) return;

  function openProjectModal(key) {
    const data = REAL_PROJECT_DATA[key];
    if (!data) return;

    document.getElementById("modal-project-id").textContent = data.id;
    document.getElementById("modal-project-title").textContent = data.title;
    document.getElementById("modal-project-desc").textContent = data.desc;

    // Challenges list
    const list = document.getElementById("modal-project-challenges");
    list.innerHTML = data.challenges.map((c) => `<li>${c}</li>`).join("");

    // Tags
    const tags = document.getElementById("modal-project-stack");
    tags.innerHTML = data.stack.map((s) => `<span>${s}</span>`).join("");

    // Links
    const liveLink = document.getElementById("modal-live-link");
    if (data.live) {
      liveLink.href = data.live;
      liveLink.style.display = "inline-flex";
    } else {
      liveLink.style.display = "none";
    }

    const codeLink = document.getElementById("modal-code-link");
    codeLink.href = data.code;

    dialog.showModal();
    AudioFX.whoosh();
  }

  function closeModal() {
    dialog.close();
    AudioFX.chime();
  }

  inspectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      openProjectModal(target);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (dismissBtn) dismissBtn.addEventListener("click", closeModal);

  // Light dismiss on backdrop click
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeModal();
  });
}

// ----------------------------------------------------
// ANIMATED PROJECT CANVAS MOCKUPS
// ----------------------------------------------------
function initProjectCanvases() {
  // 1. TechPartz Eletrônicos (SENAI Stock ERP)
  const c1 = document.getElementById("canvas-p1");
  if (c1) {
    const ctx = c1.getContext("2d");
    let t = 0;
    function drawP1() {
      ctx.clearRect(0, 0, c1.width, c1.height);

      // Grid Lines
      ctx.strokeStyle = "rgba(168, 85, 247, 0.15)";
      ctx.lineWidth = 1;
      for (let y = 30; y < c1.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(20, y);
        ctx.lineTo(c1.width - 20, y);
        ctx.stroke();
      }

      // Stock Inventory Graph
      ctx.strokeStyle = "#c084fc";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const points = [
        { x: 30, y: 140 },
        { x: 80, y: 110 + Math.sin(t * 0.05) * 10 },
        { x: 140, y: 70 + Math.cos(t * 0.04) * 12 },
        { x: 200, y: 90 + Math.sin(t * 0.03) * 8 },
        { x: 260, y: 50 + Math.cos(t * 0.06) * 14 },
        { x: 330, y: 40 },
      ];
      points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Inventory Pulsing Nodes
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#d946ef";
        ctx.fill();
      });

      t += 0.8;
      requestAnimationFrame(drawP1);
    }
    drawP1();
  }

  // 2. Conecta Jovem (SESI Digital Magazine Feed)
  const c2 = document.getElementById("canvas-p2");
  if (c2) {
    const ctx = c2.getContext("2d");
    let offset = 0;
    function drawP2() {
      ctx.clearRect(0, 0, c2.width, c2.height);

      // Simulated Magazine Article Cards
      for (let i = 0; i < 3; i++) {
        const x = 30 + i * 110;
        const y = 35 + Math.sin(offset * 0.04 + i) * 6;

        ctx.fillStyle = "rgba(26, 16, 51, 0.8)";
        ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(x, y, 95, 120, 6);
        ctx.fill();
        ctx.stroke();

        // Image block
        ctx.fillStyle = i % 2 === 0 ? "rgba(168, 85, 247, 0.3)" : "rgba(217, 70, 239, 0.3)";
        ctx.fillRect(x + 8, y + 8, 79, 45);

        // Text lines
        ctx.fillStyle = "#e9d5ff";
        ctx.fillRect(x + 8, y + 62, 60, 5);
        ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
        ctx.fillRect(x + 8, y + 74, 75, 4);
        ctx.fillRect(x + 8, y + 84, 50, 4);
      }

      offset += 0.8;
      requestAnimationFrame(drawP2);
    }
    drawP2();
  }

  // 3. fcondo-system (POS Checkout & Barcode Scanner)
  const c3 = document.getElementById("canvas-p3");
  if (c3) {
    const ctx = c3.getContext("2d");
    let scanY = 30;
    let scanDir = 1.2;
    function drawP3() {
      ctx.clearRect(0, 0, c3.width, c3.height);

      // Barcode bars
      const startX = 60;
      const barH = 80;
      const bars = [4, 2, 6, 2, 8, 3, 2, 5, 2, 7, 3, 5, 2, 4, 6, 2, 8, 3];
      let curX = startX;

      bars.forEach((w) => {
        ctx.fillStyle = "rgba(233, 213, 255, 0.7)";
        ctx.fillRect(curX, 55, w, barH);
        curX += w + 6;
      });

      // Scanner laser line
      scanY += scanDir;
      if (scanY > 140 || scanY < 45) scanDir *= -1;

      ctx.strokeStyle = "#d946ef";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, scanY);
      ctx.lineTo(c3.width - 40, scanY);
      ctx.stroke();

      requestAnimationFrame(drawP3);
    }
    drawP3();
  }

  // 4. Gerador de Senhas Fortes (Entropy Cipher Matrix)
  const c4 = document.getElementById("canvas-p4");
  if (c4) {
    const ctx = c4.getContext("2d");
    let chars = "A#9!z$7@K&4*";
    let step = 0;
    function drawP4() {
      ctx.clearRect(0, 0, c4.width, c4.height);
      ctx.font = "14px 'Fira Code', monospace";

      for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 5; row++) {
          const x = 50 + col * 35;
          const y = 45 + row * 26;
          const ch = chars[(col + row + Math.floor(step * 0.1)) % chars.length];
          ctx.fillStyle = (col + row) % 2 === 0 ? "#a855f7" : "#c084fc";
          ctx.fillText(ch, x, y);
        }
      }
      step++;
      requestAnimationFrame(drawP4);
    }
    drawP4();
  }
}

// ----------------------------------------------------
// INTERACTIVE TERMINAL CLI SHELL
// ----------------------------------------------------
function initTerminalShell() {
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-cli-input");
  const output = document.getElementById("term-output");
  const quickChips = document.querySelectorAll(".quick-chip");

  if (!form || !input || !output) return;

  function appendLine(cmdText, outputHtml) {
    const row = document.createElement("div");
    row.innerHTML = `
      <div class="term-row-cmd">
        <span class="text-fuchsia">jonas@developer:~$</span>
        <span>${escapeHtml(cmdText)}</span>
      </div>
      <div class="term-row-out">${outputHtml}</div>
    `;
    output.appendChild(row);
    output.scrollTop = output.scrollHeight;
  }

  function executeCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    PortfolioState.termHistory.push(raw);
    PortfolioState.historyIndex = PortfolioState.termHistory.length;

    AudioFX.click();

    switch (cmd) {
      case "help":
        appendLine(cmd, `Comandos disponíveis no Terminal de Jonas Daniel:
  <span class="text-purple">whoami</span>       - Apresentação e perfil profissional
  <span class="text-purple">projects</span>     - Lista dos 4 projetos em produção
  <span class="text-purple">skills</span>       - Competências técnicas e soft skills
  <span class="text-purple">senai</span>        - Experiência e aprendizados com o SENAI Itu
  <span class="text-purple">contact</span>      - E-mail e canais diretos de contato
  <span class="text-purple">github</span>       - Link direto para os repositórios oficiais
  <span class="text-purple">audio</span>        - Alternar efeitos sonoros táteis (ON/OFF)
  <span class="text-purple">lang</span>         - Alternar idioma da interface (PT / EN)
  <span class="text-purple">clear</span>        - Limpar o buffer da tela`);
        break;

      case "whoami":
      case "about":
        appendLine(cmd, `<span class="text-purple">Jonas Daniel de Brito Lopes</span> (17 anos)
Função: Backend Developer Júnior & Creative Tech
Experiência: Mais de 4 anos práticos em desenvolvimento contínuo
Foco: Node.js, Express, APIs REST, Python, C++, SQL, Boas Práticas e Arquitetura Limpa.
Localização: Itu, SP - Brasil`);
        break;

      case "projects":
        appendLine(cmd, `Projetos de Destaque:
  [1] <span class="text-purple">TechPartz Eletrônicos</span>  - Gestão de estoque corporativo (SENAI Itu)
  [2] <span class="text-fuchsia">Conecta Jovem</span>         - Revista digital interativa (SESI)
  [3] <span class="text-purple">fcondo-system</span>         - Sistema PDV para minimercado residencial
  [4] <span class="text-fuchsia">Gerador de Senhas</span>     - Ferramenta de segurança e criptografia`);
        break;

      case "skills":
        appendLine(cmd, `Competências Técnicas:
  Linguagens: JavaScript (90%), Python (87%), TypeScript (85%), C++ (55%), Java (60%), SQL (69%), HTML/CSS
  Frameworks: Node.js, Express, React, React Native, Next.js, MongoDB
  Metodologias: Scrum/Kanban (90%), Pensamento Lógico (88%), Requisitos (87%), Git`);
        break;

      case "senai":
      case "sesi":
        appendLine(cmd, `<span class="text-purple">SENAI Itu & SESI</span>:
Atuação prática no desenvolvimento do sistema de software para gestão de componentes eletrônicos (TechPartz) e da revista digital Conecta Jovem. Foco em trabalho colaborativo, entrega contínua e cumprimento de prazos reais.`);
        break;

      case "contact":
      case "email":
        appendLine(cmd, `Canais de Comunicação Direta:
  E-mail:   <span class="text-purple">lopesjonasdaniel@gmail.com</span>
  LinkedIn: <span class="text-purple">linkedin.com/in/jonas-daniel-9904b6345</span>
  GitHub:   <span class="text-purple">github.com/jongasd</span>
  Instagram:<span class="text-purple">@dlbz.jonas</span>`);
        break;

      case "github":
        appendLine(cmd, `Repositório oficial: <a href="https://github.com/jongasd" target="_blank" class="text-purple">https://github.com/jongasd</a>`);
        break;

      case "audio":
        const audioBtn = document.getElementById("audio-toggle");
        if (audioBtn) audioBtn.click();
        appendLine(cmd, `Efeitos sonoros: <span class="text-purple">${PortfolioState.audioEnabled ? "ATIVADOS" : "DESATIVADOS"}</span>`);
        break;

      case "lang":
        const newLang = PortfolioState.currentLang === "pt" ? "en" : "pt";
        const langBtn = document.querySelector(`.lang-option[data-lang="${newLang}"]`);
        if (langBtn) langBtn.click();
        appendLine(cmd, `Idioma alterado para: <span class="text-purple">${newLang.toUpperCase()}</span>`);
        break;

      case "clear":
        output.innerHTML = "";
        break;

      default:
        AudioFX.error();
        appendLine(cmd, `Comando não reconhecido: '<span class="text-fuchsia">${escapeHtml(cmd)}</span>'. Digite <span class="text-purple">help</span> para a lista de comandos.`);
        break;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value;
    input.value = "";
    executeCommand(val);
  });

  // History Navigation with Up/Down Arrows
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (PortfolioState.historyIndex > 0) {
        PortfolioState.historyIndex--;
        input.value = PortfolioState.termHistory[PortfolioState.historyIndex] || "";
      }
    } else if (e.key === "ArrowDown") {
      if (PortfolioState.historyIndex < PortfolioState.termHistory.length - 1) {
        PortfolioState.historyIndex++;
        input.value = PortfolioState.termHistory[PortfolioState.historyIndex] || "";
      } else {
        PortfolioState.historyIndex = PortfolioState.termHistory.length;
        input.value = "";
      }
    }
  });

  quickChips.forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = btn.dataset.cmd;
      executeCommand(c);
      input.focus();
    });
  });
}

// ----------------------------------------------------
// CONTACT FORM & ENCRYPTED DISPATCH ANIMATION
// ----------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("btn-submit-contact");
  const fill = document.getElementById("dispatch-fill");
  const label = document.getElementById("dispatch-lbl");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    // Reset error messages
    document.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));

    let hasError = false;
    if (!name) {
      document.getElementById("name-error").textContent = "[!] Por favor informe seu nome ou empresa.";
      hasError = true;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("email-error").textContent = "[!] Digite um e-mail válido.";
      hasError = true;
    }
    if (!message || message.length < 8) {
      document.getElementById("message-error").textContent = "[!] A mensagem deve conter pelo menos 8 caracteres.";
      hasError = true;
    }

    if (hasError) {
      AudioFX.error();
      return;
    }

    // Begin Simulated Dispatch
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    AudioFX.click();

    let pct = 0;
    const interval = setInterval(() => {
      pct += 20;
      if (pct <= 40) {
        if (label) label.textContent = `[1/3] CRIPTOGRAFANDO PACOTE... (${pct}%)`;
        if (fill) fill.style.width = `${pct}%`;
        AudioFX.click();
      } else if (pct <= 80) {
        if (label) label.textContent = `[2/3] ENCAMINHANDO PARA JONAS DANIEL... (${pct}%)`;
        if (fill) fill.style.width = `${pct}%`;
        AudioFX.click();
      } else {
        clearInterval(interval);
        if (fill) {
          fill.style.width = "100%";
          fill.style.background = "#34d399";
        }
        if (label) {
          label.textContent = "[SUCESSO] MENSAGEM RECEBIDA COM SUCESSO!";
          label.style.color = "#34d399";
        }

        AudioFX.success();

        submitBtn.innerHTML = '<i class="ph-bold ph-check-circle"></i> Mensagem Enviada!';
        submitBtn.style.background = "#059669";

        setTimeout(() => {
          form.reset();
          submitBtn.disabled = false;
          submitBtn.style.opacity = "1";
          submitBtn.style.background = "";
          submitBtn.innerHTML = '<i class="ph-bold ph-paper-plane-tilt"></i> <span>Enviar Mensagem Direta</span>';
          if (fill) {
            fill.style.width = "0%";
            fill.style.background = "";
          }
          if (label) {
            label.textContent = "AGUARDANDO ENVIO";
            label.style.color = "";
          }
        }, 3500);
      }
    }, 160);
  });
}

// ----------------------------------------------------
// COPY TO CLIPBOARD HELPER
// ----------------------------------------------------
function initCopyButton() {
  const copyBtn = document.getElementById("btn-copy-email");
  const copyText = document.getElementById("copy-btn-text");

  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("lopesjonasdaniel@gmail.com").then(() => {
      if (copyText) copyText.textContent = "COPIADO!";
      copyBtn.style.background = "#7e22ce";
      copyBtn.style.borderColor = "#c084fc";
      AudioFX.success();

      setTimeout(() => {
        if (copyText) copyText.textContent = "COPIAR";
        copyBtn.style.background = "";
        copyBtn.style.borderColor = "";
      }, 2000);
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
