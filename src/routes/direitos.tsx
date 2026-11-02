import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/direitos.css?raw";

export const Route = createFileRoute("/direitos")({
  head: () => ({ meta: [{ title: "Direitos e Deveres das Mulheres — Entre Direitos e Deveres" }] }),
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
      <ImportedAsideEditWithLovable />
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-50 \x62order-b \x62order-border \x62g-background/\x395 \x62ackdrop-blur"}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a className="flex items-center gap-2.5" href="/">
          <img className="h-10 w-10" src="/site-assets/d1adfa892763f7ab.png" alt="Logótipo Entre Direitos e Deveres" width="40" height="40" />
          <span className="font-display text-base font-bold leading-none text-primary">Entre Direitos<br />e Deveres</span>
        </a>
        <nav className={"hidden items-center gap-4 \x6cg:\x66lex"} aria-label="Navegação principal">
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href="/">Início</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="#">Direitos e Deveres</a>
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
        <button className={"rounded-md p-2 text-primary \x6cg:\x68idden"} type="button" aria-label="Abrir menu">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function ImportedSectionOsTeusDireitos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <svg className={"absolute left-4 top-1/2 h-4.5 w-4.5 \x2dtranslate-y-1/\x32 text-muted-foreground"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input className={"w-full rounded-full \x62order \x62order-input \x62g-card py-3 pl-11 pr-4 text-sm \x73hadow-sm \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring"} type="search" placeholder="Pesquisar direito..." defaultValue="" />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground" type="button">Todos</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Educação</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Trabalho</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Saúde</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Segurança</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Participação Política</button>
          <button className={"rounded-full \x62order \x62order-border \x62g-card px-4 py-1.5 text-xs font-medium \x74ext-foreground/\x375 transition-colors \x68over:\x62g-secondary"} type="button">Vida Familiar</button>
        </div>
      </div>
      <h2 className="section-title mt-12 text-2xl">Os teus direitos</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="#">Direitos e Deveres</a>
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
          <form className="mt-4 flex gap-2">
            <input className={"w-full rounded-lg \x62order \x62order-primary-foreground/\x320 \x62g-primary-foreground/\x310 px-3 py-2.5 text-sm text-primary-foreground \x70laceholder:\x74ext-primary-foreground/\x350 \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-gold"} type="email" required placeholder="O teu email" defaultValue="" />
            <button className={"flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground transition-colors \x68over:\x62g-gold/\x390"} type="submit"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>Subscrever</button>
          </form>
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

function ImportedAsideEditWithLovable() {
  return (
    <aside className="[will-change:transform,opacity]" id="lovable-badge" role="complementary" dir="ltr" lang="en" aria-label="Edit with Lovable"><a aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_74tjz15c2p99sr8tkt0r8gab5h?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none" viewBox="0 0 52 16">{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse"><stop offset=".106" stopColor="#FE7B02" /><stop offset=".394" stopColor="#FE3F21" /><stop offset=".608" stopColor="#F858BC" /><stop offset=".929" stopColor="#575ECF" /></radialGradient></defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a><span id="lovable-badge-divider" aria-hidden="true" /><button className="min-w-[24px]" id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button></aside>
  );
}
