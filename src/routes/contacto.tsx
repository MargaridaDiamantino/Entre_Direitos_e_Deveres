import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/contacto.css?raw";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Fala connosco | Entre Direitos e Deveres" },
      { name: "description", content: "Tens dúvidas ou precisas de apoio? Fala connosco — todas as mensagens são confidenciais." },
      { property: "og:title", content: "Contacto — Fala connosco | Entre Direitos e Deveres" },
      { property: "og:description", content: "Tens dúvidas ou precisas de apoio? Fala connosco — todas as mensagens são confidenciais." },
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
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Estamos aqui para ti</h1>
              <p className={"mt-4 max-w-xl text-base \x74ext-primary-foreground/\x385"}>Tem dúvidas? Precisas de apoio? Fala connosco — todas as mensagens são confidenciais.</p>
            </div>
          </section>
          <ImportedSectionEnviaUmaMensagem />
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
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/multimedia">Multimédia</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/historias-reais">Histórias Reais</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="/contacto">Contacto</a>
          <button className={"ml-1 rounded-full p-2 \x74ext-foreground/\x370 transition-colors \x68over:\x62g-secondary hover:text-primary"} type="button" aria-label="Pesquisar">
            <svg className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <a className={"rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} aria-current="page" data-status="active" href="/contacto">Participar →</a>
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
                <a className={"block rounded-lg px-3 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:bg-secondary hover:text-primary \x64ata-[\x73tatus=\x61ctive]:bg-secondary \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href={href} {...(href === "/contacto" ? { "data-status": "active", "aria-current": "page" as const } : {})} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li><a className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-gold-foreground" href="/contacto" onClick={() => setMenuOpen(false)}>Participar →</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function ImportedSectionEnviaUmaMensagem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className={"\x73pace-y-4"}>
          <div className={"flex items-center gap-4 rounded-2xl \x62order \x62order-border \x62g-card p-5 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-magenta"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">elatemdireitos@angola.ao</p>
            </div>
          </div>
          <div className={"flex items-center gap-4 rounded-2xl \x62order \x62order-border \x62g-card p-5 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-magenta"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Telefone</p>
              <p className="text-sm font-medium text-foreground">+244 923 566 799</p>
            </div>
          </div>
          <div className={"flex items-center gap-4 rounded-2xl \x62order \x62order-border \x62g-card p-5 \x73hadow-sm"}>
            <div className={"flex h-11 w-11 items-center justify-center rounded-xl \x62g-secondary text-magenta"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Morada</p>
              <p className="text-sm font-medium text-foreground">Luanda, Angola</p>
            </div>
          </div>
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <h3 className="font-display text-lg font-bold">Juntas por uma Angola mais justa e igualitária!</h3>
            <p className={"mt-2 text-sm \x74ext-primary-foreground/\x380"}>Se estiveres em perigo imediato, contacta a polícia mais próxima. A denúncia é gratuita e confidencial.</p>
          </div>
        </div>
        <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-7 \x73hadow-sm"}>
          <h2 className="font-display text-lg font-bold text-primary">Envia uma mensagem</h2>
          <form className={"mt-5 \x73pace-y-4"}>
            <div>
              <label className={"text-xs font-semibold \x74ext-foreground/\x380"} htmlFor="nome">Nome</label>
              <input className={"mt-1.5 w-full rounded-lg \x62order \x62order-input bg-background px-3.5 py-2.5 text-sm \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring"} id="nome" required placeholder="O teu nome" />
            </div>
            <div>
              <label className={"text-xs font-semibold \x74ext-foreground/\x380"} htmlFor="email">Email</label>
              <input className={"mt-1.5 w-full rounded-lg \x62order \x62order-input bg-background px-3.5 py-2.5 text-sm \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring"} id="email" type="email" required placeholder="O teu email" />
            </div>
            <div>
              <label className={"text-xs font-semibold \x74ext-foreground/\x380"} htmlFor="mensagem">Mensagem</label>
              <textarea className={"mt-1.5 w-full resize-none rounded-lg \x62order \x62order-input bg-background px-3.5 py-2.5 text-sm \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring"} id="mensagem" required rows={5} placeholder="Escreve a tua mensagem..." />
            </div>
            <button className={"inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} type="submit"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>Enviar</button>
          </form>
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="/contacto">Contacto</a>
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
