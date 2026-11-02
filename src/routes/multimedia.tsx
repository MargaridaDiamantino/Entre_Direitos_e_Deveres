import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/multimedia.css?raw";

export const Route = createFileRoute("/multimedia")({
  head: () => ({
    meta: [
      { title: "Multimédia — Vídeos, podcast e publicações | Entre Direitos e Deveres" },
      { name: "description", content: "Vídeos, imagens, publicações e o podcast Vozes de Mulheres — conteúdos que informam, educam e inspiram." },
      { property: "og:title", content: "Multimédia — Vídeos, podcast e publicações | Entre Direitos e Deveres" },
      { property: "og:description", content: "Vídeos, imagens, publicações e o podcast Vozes de Mulheres — conteúdos que informam, educam e inspiram." },
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
            <img className={"absolute inset-0 h-full w-full object-cover \x6fbject-top opacity-40"} src="/site-assets/6c288d0b5cf21648.jpg" alt="" />
            <div className={"absolute inset-0 \x62g-gradient-to-r \x66rom-primary \x76ia-primary/\x385 \x74o-primary/\x340"} />
            <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Multimédia</h1>
              <p className={"mt-4 max-w-xl text-base \x74ext-primary-foreground/\x385"}>Explora vídeos, imagens, publicações e o nosso podcast — conteúdos que informam, educam e inspiram.</p>
            </div>
          </section>
          <ImportedSection />
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
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/direitos">Direitos e Deveres</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/quiz">Quiz</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/e-se-fosse-voce">E se fosse Você</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="/multimedia">Multimédia</a>
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
                <a className={"block rounded-lg px-3 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:bg-secondary hover:text-primary \x64ata-[\x73tatus=\x61ctive]:bg-secondary \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href={href} {...(href === "/multimedia" ? { "data-status": "active", "aria-current": "page" as const } : {})} onClick={() => setMenuOpen(false)}>{label}</a>
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
  const [tab, setTab] = useState("video");
  const TABS: { id: string; label: string; icon: ReactNode }[] = [
    { id: "video", label: "Vídeos", icon: <><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" /><circle cx="12" cy="12" r="10" /></> },
    { id: "image", label: "Imagens", icon: <><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></> },
    { id: "podcast", label: "Podcast", icon: <><path d="M12 19v3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><rect x="9" y="2" width="6" height="13" rx="3" /></> },
    { id: "publication", label: "Publicações", icon: <><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></> },
  ];
  const MEDIA = [
    { kind: "video", title: "Direitos das Mulheres em Angola", detail: "24:45", image: "/site-assets/6c288d0b5cf21648.jpg" },
    { kind: "video", title: "Educação para o futuro", detail: "12:30", image: "/site-assets/d1b55f4f504dbe3a.jpg" },
    { kind: "video", title: "Igualdade no trabalho", detail: "17:45", image: "/site-assets/3b4a41f5ab18e8bc.jpg" },
    { kind: "image", title: "Mulheres que inspiram", detail: "Galeria fotográfica", image: "/site-assets/2fc88d88cbbee038.jpg" },
    { kind: "image", title: "Liderança comunitária", detail: "Galeria fotográfica", image: "/site-assets/34230323d49ce4a7.jpg" },
    { kind: "image", title: "Infografias educativas", detail: "Série de imagens", image: "/site-assets/podcast-cover.jpg" },
    { kind: "publication", title: "Constituição da República de Angola — igualdade em resumo", detail: "Publicação · PDF", image: "/site-assets/2fc88d88cbbee038.jpg" },
    { kind: "publication", title: "Guia rápido: o que fazer quando um direito é violado", detail: "Publicação · PDF", image: "/site-assets/2263a09dfab71c45.jpg" },
  ];
  const EPISODES: [number, string, string][] = [
    [10, "O direito à educação: histórias da sala de aula", "24 min"],
    [9, "Trabalho e igualdade: mulheres no mercado laboral", "31 min"],
    [8, "Segurança: falar da violência sem medo", "28 min"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="flex flex-wrap gap-2">
            {TABS.map(item => (
              <button key={item.id} className={tab === item.id ? "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground" : "inline-flex items-center gap-2 rounded-full \x62order \x62order-border \x62g-card px-5 py-2.5 text-sm font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button" aria-pressed={tab === item.id} onClick={() => setTab(item.id)}><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>{item.label}</button>
            ))}
          </div>
          {tab === "podcast" ? (
            <div className={"mt-8 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm"}>
              <img className="aspect-[16/9] w-full object-cover" src="/site-assets/podcast-cover.jpg" alt="Podcast Vozes de Mulheres" width="1024" height="1024" loading="lazy" />
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-primary">Vozes de Mulheres</h2>
                <p className="mt-2 text-sm text-muted-foreground">Conversas com mulheres de todo o país sobre direitos, saúde, trabalho e família.</p>
                <ul className={"mt-5 \x64ivide-y \x64ivide-border"}>
                  {EPISODES.map(([number, title, duration]) => (
                    <li key={number} className="flex items-center gap-3 py-3.5">
                      <svg className="h-7 w-7 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" /><circle cx="12" cy="12" r="10" /></svg>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">Ep. {number} — {title}</p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground"><svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>{duration}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA.filter(item => item.kind === tab).map(item => (
                <div key={item.title} className={"group overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card \x73hadow-sm transition-all \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-md"}>
                  <div className="relative">
                    <img className="aspect-[4/3] w-full object-cover" src={item.image} alt={item.title} width="1024" height="1024" loading="lazy" />
                    <span className={"absolute bottom-3 left-3 rounded-full \x62g-primary/\x390 px-3 py-1 text-[11px] font-semibold text-primary-foreground"}>{item.detail}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-semibold text-primary">{item.title}</h3>
                  </div>
                </div>
            ))}
          </div>
          )}
        </div>
        <aside>
          <div className={"rounded-2xl \x62order \x62order-border \x62g-secondary p-6"}>
            <h3 className="font-display text-base font-semibold text-primary">Segue-nos nas redes sociais</h3>
            <ul className={"mt-4 \x73pace-y-2.\x35"}>
              <li>
                <a className={"flex items-center gap-3 rounded-xl \x62g-card px-4 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:text-magenta"} href="https://youtube.com" rel="noreferrer" target="_blank"><svg className="h-4.5 w-4.5 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>YouTube</a>
              </li>
              <li>
                <a className={"flex items-center gap-3 rounded-xl \x62g-card px-4 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:text-magenta"} href="https://youtube.com" rel="noreferrer" target="_blank"><svg className="h-4.5 w-4.5 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>Instagram</a>
              </li>
              <li>
                <a className={"flex items-center gap-3 rounded-xl \x62g-card px-4 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:text-magenta"} href="https://youtube.com" rel="noreferrer" target="_blank"><svg className="h-4.5 w-4.5 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</a>
              </li>
            </ul>
            <a className={"mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} href="https://youtube.com" rel="noreferrer" target="_blank">Aceder aos canais<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </aside>
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} href="/">Início</a>
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="/multimedia">Multimédia</a>
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
