import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entre Direitos e Deveres — Informar, Educar, Empoderar" },
      { name: "description", content: "Informa, educa e inspira mulheres e meninas em Angola, promovendo igualdade, respeito e oportunidades para todas." },
      { property: "og:title", content: "Entre Direitos e Deveres — Informar, Educar, Empoderar" },
      { property: "og:description", content: "Informa, educa e inspira mulheres e meninas em Angola, promovendo igualdade, respeito e oportunidades para todas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "pt-AO" }, body: {  } } },
  component: Index,
});

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const [podcastPerView, setPodcastPerView] = useState(1);
  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => setPodcastPerView(lg.matches ? 3 : md.matches ? 2 : 1);
    update();
    md.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => { md.removeEventListener("change", update); lg.removeEventListener("change", update); };
  }, []);
  const podcastEpisodes: [number, string, string][] = [
    [10, "O direito à educação: histórias da sala de aula", "24 min"],
    [9, "Trabalho e igualdade: mulheres no mercado laboral", "31 min"],
    [8, "Segurança: falar da violência sem medo", "28 min"],
  ];
  const podcastMaxSlide = Math.max(0, podcastEpisodes.length - podcastPerView);
  const podcastSlide = Math.min(activeSlide0, podcastMaxSlide);
  const carouselContent0 = (<>
<div className="overflow-hidden">
  <div className="flex -ml-4 transition-transform duration-500 ease-in-out" style={{ transform: `translate3d(-${podcastSlide * (100 / podcastPerView)}%, 0px, 0px)` }}>
    {podcastEpisodes.map(([number, title, duration]) => (
    <div key={number} className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3" role="group" aria-roledescription="slide">
      <article className={"h-full overflow-hidden rounded-lg \x62g-card text-card-foreground"}>
        <div className="relative">
          <img className="aspect-[16/9] w-full object-cover" src="/site-assets/56c09146c9af2e06.jpg" alt="Microfone e auscultadores no estúdio do podcast" width="1536" height="1024" loading="lazy" />
          <span className="absolute bottom-3 left-3 rounded-md bg-gold px-2.5 py-1 text-[11px] font-bold text-gold-foreground">EPISÓDIO {number}</span>
        </div>
        <div className="flex min-h-36 flex-col p-4">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>{duration}</p>
          <h3 className="mt-2 flex-1 font-display text-base font-semibold text-primary">{title}</h3>
          <a className={"inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x75nderline-offset-4 \x68over:\x75nderline h-9 mt-4 justify-start self-start p-0 text-magenta"} href="/multimedia">Ver episódio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
        </div>
      </article>
    </div>
    ))}
  </div>
</div>
{podcastMaxSlide > 0 && (<>
<button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x73hadow-sm absolute rounded-full bottom-0 left-auto right-14 top-auto h-10 w-10 \x74ranslate-y-0 \x62order-primary-foreground/\x330 bg-transparent text-primary-foreground \x68over:\x62g-primary-foreground hover:text-primary"} onClick={() => setActiveSlide0(Math.max(0, podcastSlide - 1))} disabled={podcastSlide === 0} aria-label="Podcast anterior" title="Podcast anterior" type="button">
  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
  <span className={"\x73r-only"}>Previous slide</span>
</button>
<button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x73hadow-sm absolute rounded-full bottom-0 right-0 top-auto h-10 w-10 \x74ranslate-y-0 \x62order-primary-foreground/\x330 bg-transparent text-primary-foreground \x68over:\x62g-primary-foreground hover:text-primary"} onClick={() => setActiveSlide0(Math.min(podcastMaxSlide, podcastSlide + 1))} disabled={podcastSlide === podcastMaxSlide} aria-label="Podcast seguinte" title="Podcast seguinte" type="button">
  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
  <span className={"\x73r-only"}>Next slide</span>
</button>
</>)}
</>);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="flex min-h-screen flex-col">
        <ImportedHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden bg-primary text-primary-foreground">
            <img className={"absolute inset-0 h-full w-full object-cover \x6fbject-top opacity-45"} src="/site-assets/6c288d0b5cf21648.jpg" alt="Mulher angolana a olhar para o futuro" />
            <div className={"absolute inset-0 \x62g-gradient-to-r \x66rom-primary \x76ia-primary/\x390 \x74o-primary/\x330"} />
            <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">Conhecer os seus direitos é o primeiro passo <span className="text-gold">para um futuro melhor.</span></h1>
              <p className={"mt-5 max-w-xl text-base \x74ext-primary-foreground/\x385"}>O projecto Entre Direitos e Deveres informa, educa e inspira mulheres e meninas em Angola, promovendo igualdade, respeito e oportunidades para todas.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className={"rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} href="/direitos">Explorar Direitos →</a>
                <a className={"inline-flex items-center gap-2 rounded-full \x62order \x62order-primary-foreground/\x330 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors \x68over:\x62g-primary-foreground/\x310"} href="/multimedia"><svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" /><circle cx="12" cy="12" r="10" /></svg>Ver Vídeo</a>
              </div>
            </div>
          </section>
          <ImportedSection />
          <ImportedSectionDireitosEDeveres />
          <ImportedSectionHistRiasReais />
          <section className="bg-primary py-16 text-primary-foreground" aria-labelledby="podcast-title">
            <div className="mx-auto max-w-6xl px-4">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-gold">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 19v3" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <rect x="9" y="2" width="6" height="13" rx="3" />
                    </svg>
                    <span className="font-display text-sm font-semibold">Vozes de Mulheres · Podcast</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl" id="podcast-title">Conversas que informam e empoderam</h2>
                  <p className={"mt-3 text-sm \x74ext-primary-foreground/\x380"}>Histórias e conversas sobre direitos, saúde, trabalho e família.</p>
                </div>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x73hadow h-9 px-4 py-2 bg-gold text-gold-foreground \x68over:\x62g-gold/\x390"} href="/multimedia">Todos os episódios <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </div>
              <div className={podcastMaxSlide > 0 ? "relative mt-8 pb-16" : "relative mt-8"} role="region" aria-roledescription="carousel" aria-label="Episódios do podcast" data-site-import-carousel-root="0">{carouselContent0}</div>
            </div>
          </section>
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
        <a className="flex items-center gap-2.5" aria-current="page" data-status="active" href="/">
          <img className="h-10 w-10" src="/site-assets/d1adfa892763f7ab.png" alt="Logótipo Entre Direitos e Deveres" width="40" height="40" />
          <span className="font-display text-base font-bold leading-none text-primary">Entre Direitos<br />e Deveres</span>
        </a>
        <nav className={"hidden items-center gap-4 \x6cg:\x66lex"} aria-label="Navegação principal">
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="/">Início</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/direitos">Direitos e Deveres</a>
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
            ].map(([href, label], index) => (
              <li key={href}>
                <a className={"block rounded-lg px-3 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:bg-secondary hover:text-primary \x64ata-[\x73tatus=\x61ctive]:bg-secondary \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href={href} {...(index === 0 ? { "data-status": "active", "aria-current": "page" as const } : {})} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li><a className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-gold-foreground" href="/contacto" onClick={() => setMenuOpen(false)}>Participar →</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/direitos">
          <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-primary"}>
            <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
          </div>
          <h3 className="mt-4 font-display text-base font-semibold text-primary">Os teus Direitos</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">Conhece os principais direitos e deveres das mulheres.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
        </a>
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/quiz">
          <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-primary"}>
            <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="6" x2="10" y1="11" y2="11" />
              <line x1="8" x2="8" y1="9" y2="13" />
              <line x1="15" x2="15.01" y1="12" y2="12" />
              <line x1="18" x2="18.01" y1="10" y2="10" />
              <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
            </svg>
          </div>
          <h3 className="mt-4 font-display text-base font-semibold text-primary">Quiz «E se fosse Você»</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">Testa o teu conhecimento e aprende de forma divertida.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
        </a>
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/multimedia">
          <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-primary"}>
            <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
              <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
              <circle cx="13" cy="7" r="1" fill="currentColor" />
              <rect x="8" y="2" width="14" height="14" rx="2" />
            </svg>
          </div>
          <h3 className="mt-4 font-display text-base font-semibold text-primary">Multimédia</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">Vídeos, podcast, imagens e publicações inspiradoras.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
        </a>
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/historias-reais">
          <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-primary"}>
            <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
          </div>
          <h3 className="mt-4 font-display text-base font-semibold text-primary">Histórias Reais</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">Mulheres que partilham experiências e inspiram outras.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-magenta">Saber mais<svg className={"h-4 w-4 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
        </a>
      </div>
    </section>
  );
}

function ImportedSectionDireitosEDeveres() {
  return (
    <section className={"\x62g-secondary py-16"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="section-title text-2xl md:text-3xl">Direitos e Deveres</h2>
          <p className="mt-3 text-muted-foreground">Conhecer os direitos é essencial — mas os deveres fazem parte do mesmo caminho. Descobre o que a lei garante a cada mulher e o que cada uma de nós deve ao país, à família e à comunidade.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold">Os teus direitos</h3>
            </div>
            <ul className={"mt-5 \x73pace-y-2.\x35"}>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito à Educação</li>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito ao Trabalho</li>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito à Saúde</li>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito à Segurança</li>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito à Participação Política</li>
              <li className={"flex items-start gap-2 text-sm \x74ext-primary-foreground/\x385"}><svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Direito à Vida Familiar</li>
            </ul>
            <a className={"mt-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} href="/direitos">Ver todos os direitos<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
          <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-7"}>
            <div className="flex items-center gap-3">
              <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-primary"}>
                <svg className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v18" />
                  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M7 21h10" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">Os teus deveres</h3>
            </div>
            <ul className={"mt-5 \x73pace-y-4"}>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v18" />
                  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M7 21h10" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dever de cumprir as leis</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Conhecer e respeitar as leis da República de Angola é o primeiro passo para exigir os teus direitos — e para garantir os direitos de todas as mulheres à tua volta.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dever de educar e cuidar da família</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Educar os filhos, garantir que as raparigas vão à escola e criar um lar com respeito, igualdade e dignidade para todos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dever de trabalhar e servir a comunidade</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Contribuir, com o teu trabalho e a tua voz, para o desenvolvimento da tua comunidade e do país — e transmitir às novas gerações o valor da igualdade.</p>
                </div>
              </li>
            </ul>
            <a className={"mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta \x68over:\x75nderline"} href="/direitos">Conhecer direitos e deveres<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionHistRiasReais() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="section-title text-2xl md:text-3xl">Histórias Reais</h2>
          <p className="mt-3 text-muted-foreground">Mulheres que partilham as suas experiências e inspiram outras a acreditar nos seus direitos.</p>
        </div>
        <a className={"inline-flex items-center gap-1.5 text-sm font-semibold text-magenta \x68over:\x75nderline"} href="/historias-reais">Ver todas as histórias<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <a className={"group overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/historias-reais">
          <img className="aspect-[4/3] w-full object-cover" src="/site-assets/3b4a41f5ab18e8bc.jpg" alt="Ana Paula" width="1024" height="1024" loading="lazy" />
          <div className="p-5">
            <p className="text-sm text-foreground">«Comecei a vender no mercado com um banco e um guarda-chuva. Hoje as minhas filhas estão na escola — é isso que me faz seguir.»</p>
            <p className="mt-3 font-display text-sm font-semibold text-primary">Ana Paula · <span className="font-normal text-muted-foreground">Luanda</span></p>
          </div>
        </a>
        <a className={"group overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/historias-reais">
          <img className="aspect-[4/3] w-full object-cover" src="/site-assets/2fc88d88cbbee038.jpg" alt="Marta de Jesus" width="1024" height="1024" loading="lazy" />
          <div className="p-5">
            <p className="text-sm text-foreground">«Quando ajudo uma mãe a trazer um filho ao mundo com segurança, sinto que estou a servir o país.»</p>
            <p className="mt-3 font-display text-sm font-semibold text-primary">Marta de Jesus · <span className="font-normal text-muted-foreground">Benguela</span></p>
          </div>
        </a>
        <a className={"group overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"} href="/historias-reais">
          <img className="aspect-[4/3] w-full object-cover" src="/site-assets/34230323d49ce4a7.jpg" alt="Fernanda Lúcia" width="1024" height="1024" loading="lazy" />
          <div className="p-5">
            <p className="text-sm text-foreground">«Aprendi que a minha voz conta. Depois ensinei as minhas vizinhas a usar as delas.»</p>
            <p className="mt-3 font-display text-sm font-semibold text-primary">Fernanda Lúcia · <span className="font-normal text-muted-foreground">Huambo</span></p>
          </div>
        </a>
      </div>
    </section>
  );
}

function ImportedFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-footer text-footer-foreground">
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="/">Início</a>
            </li>
            <li>
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/direitos">Direitos e Deveres</a>
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
