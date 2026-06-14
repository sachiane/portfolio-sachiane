import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sachiane Ghignatti — Product Owner | GovTech | CSPO®" },
      {
        name: "description",
        content:
          "Product Owner com 17 anos de experiência em GovTech, sistemas críticos e produtos regulados. Transformando complexidade em soluções de alto impacto.",
      },
      { property: "og:title", content: "Sachiane Ghignatti — Product Owner | GovTech" },
      {
        property: "og:description",
        content:
          "PO especializada em produtos públicos, integrações críticas e ambientes regulados.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const metrics = [
  { value: "80%", label: "Redução em demandas corretivas" },
  { value: "90%", label: "Redução no tempo de atendimento" },
  { value: "17", label: "Anos em tecnologia" },
  { value: "10+", label: "Órgãos públicos atendidos" },
];

const howIWork = [
  {
    phase: "01",
    title: "Discovery",
    icon: "◐",
    items: [
      "Entrevistas com usuários e stakeholders",
      "Mapeamento de jornadas e processos",
      "Identificação de oportunidades de evolução",
    ],
  },
  {
    phase: "02",
    title: "Delivery",
    icon: "◑",
    items: [
      "User stories e critérios de aceite",
      "Gestão e priorização de backlog",
      "Acompanhamento de desenvolvimento",
    ],
  },
  {
    phase: "03",
    title: "Liderança de Produto",
    icon: "●",
    items: [
      "Alinhamento técnico e de negócio",
      "Remoção de impedimentos",
      "Qualidade e aderência das entregas",
    ],
  },
];

const projects = [
  {
    tag: "Infraestrutura Pública",
    title: "Sistemas de Licitações",
    desc: "Entrega de sistemas críticos com regras legais complexas e múltiplas integrações estaduais.",
    details: [
      "Desafios do projeto incluíam prazo fixo para entrada em produção, necessidade de rápida compreensão da Lei 8.666 e alinhamento entre múltiplos stakeholders com diferentes expectativas. Além disso, havia a complexidade de mapear integrações com outros sistemas do estado e garantir consistência das informações.",
      "Para lidar com esse cenário, atuei na organização e priorização das demandas, estruturação clara dos requisitos e alinhamento contínuo com stakeholders e equipe técnica, garantindo entendimento comum e foco nas entregas críticas.",
      "Como resultado, o projeto foi conduzido dentro do prazo previsto, com aderência às regras legais e integração com sistemas essenciais, assegurando a entrega do produto conforme as necessidades do cliente.",
    ],
  },
  {
    tag: "Mobile · Fiscalização",
    title: "App de Fiscalização Rodoviária",
    desc: "Digitalização de processo manual, aumentando eficiência operacional e rastreabilidade.",
  },
  {
    tag: "Suporte · Atendimento",
    title: "Central de Atendimento",
    desc: "Redução de ruído operacional e melhoria de experiência do usuário final.",
  },
  {
    tag: "Dados Abertos",
    title: "Mapa da Transparência do Estado",
    desc: "Plataforma pública de dados de obras com foco em transparência e controle social.",
  },
  {
    tag: "Search · BI",
    title: "Busca + Dashboards Analíticos",
    desc: "Modernização de busca de processos e criação de dashboards executivos.",
  },
];

const contexts = [
  "Tribunais de Justiça",
  "Secretarias Estaduais",
  "Departamentos de Estradas e Rodagens",
  "Sistemas de infraestrutura pública",
  "Integrações entre sistemas críticos",
  "Ambientes regulatórios — GovTech",
];

const testimonials = [
  {
    name: "Cristiano Carneiro",
    role: "Senior Product Designer",
    quote:
      "Sachiane tem um olhar sistêmico único e grande criatividade na construção de produtos. Isso gera mais assertividade e entregas mais refinadas e de alta qualidade.",
  },
  {
    name: "Yssis Samantha Comarella de Souza",
    role: "Senior Software Engineer",
    quote:
      "'Ridiculamente eficiente' define a Sachiane. Sua capacidade de traduzir requisitos para o time técnico com clareza é rara e extremamente valiosa.",
  },
  {
    name: "Alex Martins Celso",
    role: "Senior Software Engineer",
    quote:
      "Demonstra dedicação, excelência e forte capacidade de liderança. Transforma necessidades de negócio em soluções concretas com grande precisão e valor agregado.",
  },
];

const tools = [
  "SQL", "Jira", "RTC (IBM)", "DOORS", "Enterprise Architect", "Bizagi",
  "Power BI", "Oracle", "SQL Server", "Postman", "UML", "Git", "Trello",
];

const aiUses = [
  "Apoio ao discovery",
  "Análise de requisitos",
  "Geração de user stories",
  "Documentação de produto",
  "Apoio à tomada de decisão",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Sachiane<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#atuacao" className="hover:text-accent transition-colors">Atuação</a>
            <a href="#projetos" className="hover:text-accent transition-colors">Projetos</a>
            <a href="#recomendacoes" className="hover:text-accent transition-colors">Recomendações</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </nav>
          <a
            href="mailto:sachiane@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Falar comigo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-40 relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Product Owner · GovTech · CSPO®
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight max-w-5xl">
            Transformo <em className="text-accent not-italic">complexidade</em> em produtos
            simples, escaláveis e de alto impacto.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sou <strong className="text-foreground">Sachiane Ghignatti</strong>, Product
              Owner com 17 anos em tecnologia. Conecto negócio, tecnologia e experiência do
              usuário em sistemas públicos críticos e ambientes regulados.
            </p>
            <div className="md:col-span-5 md:text-right space-y-1 font-mono text-sm">
              <div className="text-muted-foreground">📍 Brasil · Open to opportunities</div>
              <div>
                <a href="https://linkedin.com/in/sachiane" target="_blank" rel="noreferrer" className="hover:text-accent">
                  linkedin.com/in/sachiane ↗
                </a>
              </div>
              <div>
                <a href="mailto:sachiane@gmail.com" className="hover:text-accent">
                  sachiane@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground">+55 (48) 99640-7617</div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {metrics.map((m) => (
            <div key={m.label} className="py-10 px-4 first:pl-0 last:pr-0 text-center md:text-left">
              <div className="font-display text-5xl md:text-6xl text-primary">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground max-w-[14ch] mx-auto md:mx-0">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              ◦ 01 — Sobre
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Sobre mim
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              Product Owner com <strong>17 anos de experiência</strong> em tecnologia,
              especializada na construção e evolução de produtos digitais complexos em
              ambientes críticos e regulados.
            </p>
            <p className="text-muted-foreground">
              Atuação forte em GovTech, sistemas públicos, integrações entre plataformas e
              regras de negócio complexas, com foco em gerar valor real para usuários e
              instituições. Conecto negócio, tecnologia e experiência do usuário, garantindo
              entregas consistentes, escaláveis e orientadas a impacto.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="atuacao" className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                ◦ 02 — Como atuo
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                Ciclo de produto <em className="text-accent not-italic">end-to-end</em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10">
            {howIWork.map((p) => (
              <div key={p.phase} className="bg-primary p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-primary-foreground/50">{p.phase}</span>
                  <span className="text-3xl text-accent">{p.icon}</span>
                </div>
                <h3 className="font-display text-2xl mb-6">{p.title}</h3>
                <ul className="space-y-3 text-sm text-primary-foreground/80">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXTS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              ◦ 03 — Contexto
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Atuação em ambientes de alta complexidade
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {contexts.map((c, idx) => (
                <li key={c} className="py-5 flex items-center justify-between group">
                  <span className="font-display text-xl md:text-2xl">{c}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              ◦ 04 — Projetos
            </div>
            <h2 className="font-display text-4xl md:text-5xl max-w-3xl">
              Principais <em className="text-accent not-italic">projetos</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`bg-card p-8 md:p-10 rounded-sm border border-border hover:border-accent transition-colors group ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>

          {/* impact bullets */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-display text-2xl mb-8">Cases de impacto</h3>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                "Redução de retrabalho e falhas operacionais",
                "Aumento de eficiência em fluxos críticos",
                "Evolução de produtos usados por múltiplos órgãos",
                "Melhoria de experiência do cidadão e servidores públicos",
                "Digitalização de processos manuais",
              ].map((c) => (
                <li key={c} className="flex gap-3 text-base">
                  <span className="text-accent">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="recomendacoes" className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            ◦ 05 — Recomendações
          </div>
          <h2 className="font-display text-4xl md:text-5xl">Recomendações</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <div className="text-accent text-4xl font-display leading-none mb-4">"</div>
              <blockquote className="text-base leading-relaxed mb-6 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <div className="font-display text-lg">{t.name}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TOOLS + AI */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid md:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              ◦ 06 — Toolkit
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-8">Ferramentas & tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-2 border border-border rounded-full bg-card hover:border-accent transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              ◦ 07 — IA aplicada
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-8">IA no ciclo de produto</h2>
            <ul className="space-y-3">
              {aiUses.map((a) => (
                <li key={a} className="flex items-center gap-4 py-2 border-b border-border">
                  <span className="font-mono text-xs text-accent">◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contato" className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-40 relative">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
            ◦ 08 — Vamos conversar
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl">
            Produtos críticos pedem
            <br />
            <em className="text-accent not-italic">execução precisa.</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Aberta a oportunidades em produto digital, GovTech e ambientes regulados.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:sachiane@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full hover:bg-primary/90 transition font-medium"
            >
              sachiane@gmail.com <span className="text-accent">→</span>
            </a>
            <a
              href="https://linkedin.com/in/sachiane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 rounded-full hover:border-accent hover:text-accent transition font-medium"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+5548996407617"
              className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 rounded-full hover:border-accent hover:text-accent transition font-medium"
            >
              +55 (48) 99640-7617
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div>© {new Date().getFullYear()} Sachiane Ghignatti de Freitas</div>
          <div className="text-primary-foreground/60">
            Product Owner · GovTech · CSPO® — Brasil
          </div>
        </div>
      </footer>
    </div>
  );
}
