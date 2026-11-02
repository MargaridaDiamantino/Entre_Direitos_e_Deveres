import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/direitos.css?raw";

export const Route = createFileRoute("/direitos")({
  head: () => ({
    meta: [
      { title: "Direitos e Deveres das Mulheres — Entre Direitos e Deveres" },
      { name: "description", content: "Conhece os direitos das mulheres em Angola — educação, trabalho, saúde, segurança, participação política e vida familiar — e os deveres que caminham ao lado deles." },
      { property: "og:title", content: "Direitos e Deveres das Mulheres — Entre Direitos e Deveres" },
      { property: "og:description", content: "Conhece os direitos das mulheres em Angola — educação, trabalho, saúde, segurança, participação política e vida familiar — e os deveres que caminham ao lado deles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "pt-AO" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="flex min-h-screen flex-col">
        <ImportedHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden bg-primary text-primary-foreground">
            <img className={"absolute inset-0 h-full w-full object-cover \x6fbject-top opacity-40"} src="/site-assets/d1b55f4f504dbe3a.jpg" alt="" />
            <div className={"absolute inset-0 \x62g-gradient-to-r \x66rom-primary \x76ia-primary/\x385 \x74o-primary/\x340"} />
            <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Direitos e Deveres das Mulheres</h1>
              <p className={"mt-4 max-w-xl text-base \x74ext-primary-foreground/\x385"}>Informação, igualdade e respeito. Conhece os teus direitos e exerce-os — e descobre também os deveres que caminham ao lado deles.</p>
            </div>
          </section>
          <ImportedSectionOsTeusDireitos />
        </main>
        <ImportedFooter />
      </div>
    </>
  );
}

function ImportedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  return (
    <header className={"sticky top-0 z-50 \x62order-b \x62order-border \x62g-background/\x395 \x62ackdrop-blur"}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a className="flex items-center gap-2.5" href="/">
          <img className="h-10 w-10" src="/site-assets/d1adfa892763f7ab.png" alt="Logótipo Entre Direitos e Deveres" width="40" height="40" />
          <span className="font-display text-base font-bold leading-none text-primary">Entre Direitos<br />e Deveres</span>
        </a>
        <nav className={"hidden items-center gap-4 \x6cg:\x66lex"} aria-label="Navegação principal">
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/">Início</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="/direitos">Direitos e Deveres</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/quiz">Quiz</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/e-se-fosse-voce">E se fosse Você</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/multimedia">Multimédia</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/historias-reais">Histórias Reais</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/contacto">Contacto</a>
          <button className={"ml-1 rounded-full p-2 \x74ext-foreground/\x370 transition-colors \x68over:\x62g-secondary hover:text-primary"} type="button" aria-label="Pesquisar">
            <svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <a className={"rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} href="/contacto">Participar →</a>
        </nav>
        <button ref={menuButtonRef} className={"rounded-md p-2 text-primary \x6cg:\x68idden"} type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className={"border-t border-border bg-background px-4 py-3 \x6cg:\x68idden"} aria-label="Navegação móvel">
          <ul className="flex flex-col gap-1">
            {[
              ["/", "Início"],
              ["/direitos", "Direitos e Deveres"],
              ["/quiz", "Quiz"],
              ["/e-se-fosse-voce", "E se fosse Você"],
              ["/multimedia", "Multimédia"],
              ["/historias-reais", "Histórias Reais"],
              ["/contacto", "Contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <a className={"block rounded-lg px-3 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:bg-secondary hover:text-primary \x64ata-[\x73tatus=\x61ctive]:bg-secondary \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href={href} {...(href === "/direitos" ? { "data-status": "active", "aria-current": "page" as const } : {})} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li><a className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-gold-foreground" href="/contacto" onClick={() => setMenuOpen(false)}>Participar →</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function ImportedSectionOsTeusDireitos() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const RIGHTS: [string, string, string][] = [
    ["Educação", "Direito à Educação", "Toda a mulher e menina tem direito a uma educação de qualidade, sem discriminação, em todos os níveis de ensino."],
    ["Trabalho", "Direito ao Trabalho", "Igualdade de oportunidades, remuneração justa e condições seguras no emprego, sem discriminação."],
    ["Saúde", "Direito à Saúde", "Acesso a serviços de saúde de qualidade, incluindo a saúde maternal, sexual e reprodutiva."],
    ["Segurança", "Direito à Segurança", "Protecção contra todas as formas de violência — física, psicológica ou económica — dentro e fora de casa."],
    ["Participação Política", "Direito à Participação Política", "Direito de votar, de ser votada e de participar na vida política e comunitária do país."],
    ["Vida Familiar", "Direito à Vida Familiar", "Casamento livre e igualitário, protecção da maternidade e direitos iguais sobre os bens da família."],
  ];
  function isVisible(tag: string, title: string, summary: string) {
    const term = query.trim().toLowerCase();
    return (filter === "Todos" || tag === filter) && (!term || title.toLowerCase().includes(term) || summary.toLowerCase().includes(term));
  }
  const visibleCount = RIGHTS.filter(([tag, title, summary]) => isVisible(tag, title, summary)).length;
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <svg className={"absolute left-4 top-1/2 h-4.5 w-4.5 \x2dtranslate-y-1/\x32 text-muted-foreground"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input className={"w-full rounded-full \x62order \x62order-input \x62g-card py-3 pl-11 pr-4 text-sm \x73hadow-sm \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring"} type="search" placeholder="Pesquisar direito..." value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button className={filter === "Todos" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Todos"} onClick={() => setFilter("Todos")}>Todos</button>
          <button className={filter === "Educação" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Educação"} onClick={() => setFilter("Educação")}>Educação</button>
          <button className={filter === "Trabalho" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Trabalho"} onClick={() => setFilter("Trabalho")}>Trabalho</button>
          <button className={filter === "Saúde" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Saúde"} onClick={() => setFilter("Saúde")}>Saúde</button>
          <button className={filter === "Segurança" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Segurança"} onClick={() => setFilter("Segurança")}>Segurança</button>
          <button className={filter === "Participação Política" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Participação Política"} onClick={() => setFilter("Participação Política")}>Participação Política</button>
          <button className={filter === "Vida Familiar" ? "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" : "rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={filter === "Vida Familiar"} onClick={() => setFilter("Vida Familiar")}>Vida Familiar</button>
        </div>
      </div>
      <h2 className="section-title mt-12 text-2xl">Os teus direitos</h2>
      {visibleCount === 0 && (
        <div className={"mt-8 flex flex-col items-center rounded-2xl \x62order \x62order-border \x62g-secondary py-14 text-center"}>
          <svg className="h-8 w-8 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13.5 8.5-5 5" /><path d="m8.5 8.5 5 5" /><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <p className="mt-3 text-sm text-muted-foreground">Nenhum direito encontrado. Tenta outra pesquisa.</p>
        </div>
      )}
      <div hidden={visibleCount === 0} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isVisible("Educação", "Direito à Educação", "Toda a mulher e menina tem direito a uma educação de qualidade, sem discriminação, em todos os níveis de ensino.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/educacao">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/d1b55f4f504dbe3a.jpg" alt="Direito à Educação" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Educação</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito à Educação</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Toda a mulher e menina tem direito a uma educação de qualidade, sem discriminação, em todos os níveis de ensino.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
        {isVisible("Trabalho", "Direito ao Trabalho", "Igualdade de oportunidades, remuneração justa e condições seguras no emprego, sem discriminação.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/trabalho">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/3b4a41f5ab18e8bc.jpg" alt="Direito ao Trabalho" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Trabalho</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito ao Trabalho</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Igualdade de oportunidades, remuneração justa e condições seguras no emprego, sem discriminação.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
        {isVisible("Saúde", "Direito à Saúde", "Acesso a serviços de saúde de qualidade, incluindo a saúde maternal, sexual e reprodutiva.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/saude">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/2fc88d88cbbee038.jpg" alt="Direito à Saúde" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Saúde</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito à Saúde</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Acesso a serviços de saúde de qualidade, incluindo a saúde maternal, sexual e reprodutiva.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
        {isVisible("Segurança", "Direito à Segurança", "Protecção contra todas as formas de violência — física, psicológica ou económica — dentro e fora de casa.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/seguranca">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/34230323d49ce4a7.jpg" alt="Direito à Segurança" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Segurança</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito à Segurança</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Protecção contra todas as formas de violência — física, psicológica ou económica — dentro e fora de casa.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
        {isVisible("Participação Política", "Direito à Participação Política", "Direito de votar, de ser votada e de participar na vida política e comunitária do país.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/participacao-politica">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/6c288d0b5cf21648.jpg" alt="Direito à Participação Política" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Participação Política</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
                  <path d="M8 6v8" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito à Participação Política</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Direito de votar, de ser votada e de participar na vida política e comunitária do país.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
        {isVisible("Vida Familiar", "Direito à Vida Familiar", "Casamento livre e igualitário, protecção da maternidade e direitos iguais sobre os bens da família.") && (
          <a className={"group flex flex-col overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos/vida-familiar">
            <div className="relative">
              <img className="aspect-[16/10] w-full object-cover" src="/site-assets/2263a09dfab71c45.jpg" alt="Direito à Vida Familiar" width="1024" height="1024" loading="lazy" />
              <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>Vida Familiar</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
                </svg>
                <h3 className="font-display text-base font-semibold text-primary">Direito à Vida Familiar</h3>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">Casamento livre e igualitário, protecção da maternidade e direitos iguais sobre os bens da família.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
            </div>
          </a>
        )}
      </div>
      <div className={"mt-16 rounded-3xl \x62g-secondary p-8 md:p-10"}>
        <h2 className="section-title text-2xl">Os teus deveres</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Direitos e deveres andam juntos: o que a lei garante a cada mulher pede também o seu contributo para uma sociedade mais justa e igualitária.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-gold/\x320 text-magenta"}>
              <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v18" />
                <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M7 21h10" />
              </svg>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-primary">Dever de cumprir as leis</h3>
            <p className="mt-2 text-sm text-muted-foreground">Conhecer e respeitar as leis da República de Angola é o primeiro passo para exigir os teus direitos — e para garantir os direitos de todas as mulheres à tua volta.</p>
          </div>
          <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-gold/\x320 text-magenta"}>
              <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
              </svg>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-primary">Dever de educar e cuidar da família</h3>
            <p className="mt-2 text-sm text-muted-foreground">Educar os filhos, garantir que as raparigas vão à escola e criar um lar com respeito, igualdade e dignidade para todos.</p>
          </div>
          <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-gold/\x320 text-magenta"}>
              <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-primary">Dever de trabalhar e servir a comunidade</h3>
            <p className="mt-2 text-sm text-muted-foreground">Contribuir, com o teu trabalho e a tua voz, para o desenvolvimento da tua comunidade e do país — e transmitir às novas gerações o valor da igualdade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img className="h-12 w-12" src="/site-assets/d1adfa892763f7ab.png" alt="Logótipo Entre Direitos e Deveres" width="48" height="48" loading="lazy" />
            <span className="font-display text-lg font-bold leading-tight">Entre Direitos<br />e Deveres</span>
          </div>
          <p className={"mt-3 text-sm \x74ext-primary-foreground/\x380"}>Informar · Educar · Empoderar</p>
          <p className={"mt-3 max-w-xs text-sm \x74ext-primary-foreground/\x370"}>Um projecto que informa, educa e inspira mulheres em Angola, promovendo igualdade, respeito e oportunidades para todas.</p>
          <div className="mt-4 flex gap-3">
            <a className={"rounded-full \x62g-primary-foreground/\x310 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground"} aria-label="YouTube" href="https://youtube.com" rel="noreferrer" target="_blank">
              <svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a className={"rounded-full \x62g-primary-foreground/\x310 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground"} aria-label="Instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
              <svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a className={"rounded-full \x62g-primary-foreground/\x310 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground"} aria-label="Facebook" href="https://facebook.com" rel="noreferrer" target="_blank">
              <svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Links úteis</h3>
          <ul className={"mt-4 \x73pace-y-2.\x35"}>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/">Início</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="/direitos">Direitos e Deveres</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/quiz">Quiz</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/e-se-fosse-voce">E se fosse Você</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/multimedia">Multimédia</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/historias-reais">Histórias Reais</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Subscreve a nossa newsletter</h3>
          <p className={"mt-4 text-sm \x74ext-primary-foreground/\x370"}>Recebe novidades, novos episódios e materiais educativos.</p>
          {subscribed ? (
            <p className="mt-4 flex items-center gap-2 rounded-lg bg-gold/15 px-4 py-3 text-sm font-medium text-gold"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Obrigada! Receberás as novidades no teu email.</p>
          ) : (
          <form className="mt-4 flex gap-2" onSubmit={event => { event.preventDefault(); if (email.trim()) setSubscribed(true); }}>
            <input className={"w-full rounded-lg \x62order \x62order-primary-foreground/\x320 \x62g-primary-foreground/\x310 px-3 py-2.5 text-sm text-primary-foreground \x70laceholder:\x74ext-primary-foreground/\x350 \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-gold"} type="email" required placeholder="O teu email" value={email} onChange={event => setEmail(event.target.value)} />
            <button className={"flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} type="submit"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>Subscrever</button>
          </form>
          )}
        </div>
      </div>
      <div className={"\x62order-t \x62order-primary-foreground/\x315"}>
        <div className={"mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs \x74ext-primary-foreground/\x360 \x73m:\x66lex-row"}>
          <p>© 2026 Entre Direitos e Deveres · Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a className="transition-colors hover:text-gold" href="#">Política de Privacidade</a>
            <a className="transition-colors hover:text-gold" href="#">Termos de Utilização</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
