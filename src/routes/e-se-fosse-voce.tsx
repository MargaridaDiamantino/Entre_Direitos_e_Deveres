import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/e-se-fosse-voce.css?raw";

export const Route = createFileRoute("/e-se-fosse-voce")({
  head: () => ({
    meta: [
      { title: "E SE FOSSE VOCÊ? — Jogo sobre os direitos das mulheres | Entre Direitos e Deveres" },
      { name: "description", content: "Situações reais, escolhas tuas: um jogo para descobrires o quanto sabes sobre os direitos das mulheres em Angola." },
      { property: "og:title", content: "E SE FOSSE VOCÊ? — Jogo sobre os direitos das mulheres | Entre Direitos e Deveres" },
      { property: "og:description", content: "Situações reais, escolhas tuas: um jogo para descobrires o quanto sabes sobre os direitos das mulheres em Angola." },
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
          <section className="bg-primary py-14 text-primary-foreground">
            <div className="mx-auto max-w-6xl px-4 text-center">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">Quiz · Entre Direitos e Deveres</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">E SE FOSSE<br />VOCÊ?</h1>
              <p className={"mx-auto mt-4 max-w-xl text-sm \x74ext-primary-foreground/\x385"}>Situações reais, escolhas suas. Escolhe um tema e descobre o quanto sabes sobre os direitos das mulheres em Angola.</p>
            </div>
          </section>
          <ImportedSectionTemas />
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
          <a className={"text-sm font-medium \x74ext-foreground/\x380 transition-colors hover:text-magenta \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} aria-current="page" data-status="active" href="/e-se-fosse-voce">E se fosse Você</a>
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
                <a className={"block rounded-lg px-3 py-2.5 text-sm font-medium \x74ext-foreground/\x385 transition-colors hover:bg-secondary hover:text-primary \x64ata-[\x73tatus=\x61ctive]:bg-secondary \x64ata-[\x73tatus=\x61ctive]:\x66ont-semibold \x64ata-[\x73tatus=\x61ctive]:\x74ext-primary"} href={href} {...(href === "/e-se-fosse-voce" ? { "data-status": "active", "aria-current": "page" as const } : {})} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li><a className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-gold-foreground" href="/contacto" onClick={() => setMenuOpen(false)}>Participar →</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

type GameOption = { text: string; correct: boolean; feedback: string };
type GameSituation = { id: string; themeId: string; situation: string; options: GameOption[] };

const GAME_THEMES: { id: string; label: string; icon: ReactNode }[] = [
  { id: "educacao", label: "Educação", icon: <><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></> },
  { id: "trabalho", label: "Trabalho", icon: <><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></> },
  { id: "saude", label: "Saúde", icon: <><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></> },
  { id: "seguranca", label: "Segurança", icon: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></> },
  { id: "participacao", label: "Participação Política", icon: <><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" /><path d="M8 6v8" /></> },
  { id: "familia", label: "Vida Familiar", icon: <><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" /></> },
];

const GAME_SITUATIONS: GameSituation[] = [
  {
    "id": "edu-1",
    "themeId": "educacao",
    "situation": "E se fosse você? Ana tem 15 anos. O pai diz que ela deve deixar a escola para se casar com um homem mais velho.",
    "options": [
      {
        "text": "Aceitar, porque o pai decide pela família.",
        "correct": false,
        "feedback": "Não. O casamento antes dos 18 anos é proibido pelo Código da Família, e ninguém pode obrigar uma menina a casar."
      },
      {
        "text": "Continuar a estudar — a educação é um direito garantido pela Constituição e ninguém o pode tirar.",
        "correct": true,
        "feedback": "Certo! A Constituição da República de Angola garante a educação a todos, e a família deve proteger — não interromper — o futuro de Ana."
      },
      {
        "text": "Sair da escola, mas prometer estudar depois do casamento.",
        "correct": false,
        "feedback": "Quase nunca volta. A escola é agora: o Estado, a família e a comunidade devem proteger o direito de Ana à educação."
      }
    ]
  },
  {
    "id": "edu-2",
    "themeId": "educacao",
    "situation": "E se fosse você? Na escola de Teresa, as raparigas são mandadas limpar as salas enquanto os rapazes estudam.",
    "options": [
      {
        "text": "Concordar, porque são «tarefas de raparigas».",
        "correct": false,
        "feedback": "Não existe tarefa «de rapariga». Tratar as alunas de forma diferente é discriminação, proibida na escola e em todo o lado."
      },
      {
        "text": "Falar com a directora ou com o conselho da escola para que todos sejam tratados de forma igual.",
        "correct": true,
        "feedback": "Certo! Exigir igualdade de tratamento dentro da escola é exercer o direito à educação sem discriminação."
      },
      {
        "text": "Deixar de ir às aulas para evitar o problema.",
        "correct": false,
        "feedback": "Assim quem perde é Teresa. O problema deve ser denunciado, não fugido."
      }
    ]
  },
  {
    "id": "trab-1",
    "themeId": "trabalho",
    "situation": "E se fosse você? Esmeralda está grávida e a empresa despede-a assim que a chefe descobre.",
    "options": [
      {
        "text": "Aceitar, porque a empresa pode despedir quem quiser.",
        "correct": false,
        "feedback": "Não pode. O Código do Trabalho proíbe o despedimento de trabalhadoras grávidas."
      },
      {
        "text": "Denunciar à inspecção do trabalho ou a uma organização de apoio — o despedimento por gravidez é ilegal.",
        "correct": true,
        "feedback": "Certo! A maternidade está protegida por lei e Esmeralda tem direito a manter o seu emprego."
      },
      {
        "text": "Esconder a gravidez para não perder o emprego.",
        "correct": false,
        "feedback": "Esconder não resolve: o direito existe e deve ser exercido, com apoio da inspecção do trabalho."
      }
    ]
  },
  {
    "id": "trab-2",
    "themeId": "trabalho",
    "situation": "E se fosse você? A empresa de Adélia paga aos homens mais do que às mulheres pelo mesmo trabalho.",
    "options": [
      {
        "text": "Falar com a direcção e denunciar a desigualdade — salário igual para trabalho igual é um direito.",
        "correct": true,
        "feedback": "Certo! A Constituição e o Código do Trabalho garantem salário igual para trabalho igual, sem discriminação."
      },
      {
        "text": "Aceitar em silêncio, porque «assim é em todo o lado».",
        "correct": false,
        "feedback": "Não é verdade. A discriminação salarial é ilegal e deve ser denunciada."
      },
      {
        "text": "Pedir apenas mais horas extras para compensar.",
        "correct": false,
        "feedback": "Isso não corrige a injustiça: o que deve mudar é o salário, não a carga de trabalho."
      }
    ]
  },
  {
    "id": "sau-1",
    "themeId": "saude",
    "situation": "E se fosse você? Marta chega ao posto de saúde com dores fortes, mas o atendente diz que só é atendida se o marido vier junto.",
    "options": [
      {
        "text": "Voltar para casa e esperar que o marido possa acompanhá-la.",
        "correct": false,
        "feedback": "Esperar pode custar a vida. Nenhuma mulher precisa de autorização para ser atendida."
      },
      {
        "text": "Exigir o atendimento — o acesso à saúde não depende de autorização do marido.",
        "correct": true,
        "feedback": "Certo! O acesso aos cuidados de saúde é um direito próprio de cada mulher, sempre e em qualquer situação."
      },
      {
        "text": "Comprar medicamentos por conta própria, sem consulta.",
        "correct": false,
        "feedback": "Perigoso. Automedicar-se não substitui uma consulta e pode agravar o problema."
      }
    ]
  },
  {
    "id": "sau-2",
    "themeId": "saude",
    "situation": "E se fosse você? Joana, 17 anos, quer informar-se sobre planeamento familiar, mas tem vergonha e ninguém explica.",
    "options": [
      {
        "text": "Renunciar à informação, porque é assunto de adultos.",
        "correct": false,
        "feedback": "Informação em saúde é um direito de todas, incluindo das jovens."
      },
      {
        "text": "Procurar o centro de saúde ou uma organização de jovens — todos têm direito a informação em saúde sexual e reprodutiva.",
        "correct": true,
        "feedback": "Certo! Profissionais de saúde devem atender com respeito e confidencialidade."
      },
      {
        "text": "Pedir conselhos apenas às amigas da mesma idade.",
        "correct": false,
        "feedback": "Melhor que nada, mas a informação correcta vem dos profissionais de saúde."
      }
    ]
  },
  {
    "id": "seg-1",
    "themeId": "seguranca",
    "situation": "E se fosse você? O marido de Domingas agride-a. Ela tem medo de denunciar porque «é assunto de casa».",
    "options": [
      {
        "text": "Denunciar à polícia ou procurar apoio — a violência doméstica é crime e a denúncia é gratuita e confidencial.",
        "correct": true,
        "feedback": "Certo! Ninguém tem o direito de agredir, e «assunto de casa» nunca justifica violência."
      },
      {
        "text": "Aguentar em silêncio para proteger os filhos.",
        "correct": false,
        "feedback": "A violência nunca protege ninguém — incluir os filhos, que aprendem o que vêem."
      },
      {
        "text": "Confiar que a família resolve por dentro.",
        "correct": false,
        "feedback": "A violência doméstica é crime: cabe ao Estado proteger a vítima, não só à família."
      }
    ]
  },
  {
    "id": "seg-2",
    "themeId": "seguranca",
    "situation": "E se fosse você? No mercado, um homem toca nas raparigas sem consentimento e ninguém diz nada.",
    "options": [
      {
        "text": "Fingir que não se vê, porque «é normal».",
        "correct": false,
        "feedback": "Não é normal. O silêncio permite que continue."
      },
      {
        "text": "Denunciar o assédio às autoridades — o corpo de cada mulher é inviolável.",
        "correct": true,
        "feedback": "Certo! O assédio é punível por lei, e denunciar protege a próxima vítima."
      },
      {
        "text": "Dizer às raparigas que elas é que provocam.",
        "correct": false,
        "feedback": "A vítima nunca é culpada. Quem comete o assédio é o único responsável."
      }
    ]
  },
  {
    "id": "par-1",
    "themeId": "participacao",
    "situation": "E se fosse você? A família de Catarina diz que política é coisa de homens e que ela não precisa de votar.",
    "options": [
      {
        "text": "Ficar em casa no dia das eleições.",
        "correct": false,
        "feedback": "Assim Catarina abdica de uma voz que é sua por lei."
      },
      {
        "text": "Ir votar — votar é um direito e um dever de todos os cidadãos, homens e mulheres.",
        "correct": true,
        "feedback": "Certo! A Constituição garante a participação política a todos os cidadãos, sem distinção de sexo."
      },
      {
        "text": "Deixar o marido decidir por ela.",
        "correct": false,
        "feedback": "O voto é individual e secreto: ninguém decide por ti."
      }
    ]
  },
  {
    "id": "par-2",
    "themeId": "participacao",
    "situation": "E se fosse você? Adriana quer candidatar-se a líder da comissão de moradores, mas o regedor diz que mulher não manda.",
    "options": [
      {
        "text": "Desistir, porque assim é a tradição.",
        "correct": false,
        "feedback": "Nenhuma tradição pode substituir a lei."
      },
      {
        "text": "Apresentar a candidatura — nenhuma lei ou tradição pode tirar o direito de uma mulher de liderar.",
        "correct": true,
        "feedback": "Certo! Liderar é um direito, e mais mulheres a liderar inspira outras a fazê-lo."
      },
      {
        "text": "Esperar que um homem a indique.",
        "correct": false,
        "feedback": "A candidatura é dela: não precisa de ser indicada por ninguém."
      }
    ]
  },
  {
    "id": "fam-1",
    "themeId": "familia",
    "situation": "E se fosse você? Quando o marido de Célia morre, os irmãos dele querem ficar com a casa e os bens do casal.",
    "options": [
      {
        "text": "Entregar tudo, porque os bens «pertencem à família dele».",
        "correct": false,
        "feedback": "Não pertencem. A mulher tem direitos iguais sobre os bens do casal."
      },
      {
        "text": "Reivindicar os seus direitos — o Código da Família garante à mulher direitos iguais sobre os bens do casal e na herança.",
        "correct": true,
        "feedback": "Certo! Ninguém pode expulsar uma viúva de casa por ser mulher."
      },
      {
        "text": "Ir embora com os filhos sem nada, para evitar conflito.",
        "correct": false,
        "feedback": "Evitar conflito custa os direitos de Célia e dos filhos. A lei está do lado dela."
      }
    ]
  },
  {
    "id": "fam-2",
    "themeId": "familia",
    "situation": "E se fosse você? Bibi tem 8 anos. Os tios querem levá-la para outra província sem perguntar à mãe, que tem a guarda da filha.",
    "options": [
      {
        "text": "Deixar, porque os tios sabem o que é melhor.",
        "correct": false,
        "feedback": "Quem tem a guarda decide. Ninguém pode levar a criança sem o consentimento da mãe."
      },
      {
        "text": "Exigir que ninguém leve a criança sem o consentimento da mãe — o Código da Família protege o poder materno e o interesse da criança.",
        "correct": true,
        "feedback": "Certo! O interesse superior da criança e a guarda da mãe são protegidos por lei."
      },
      {
        "text": "Propor que a mãe só volte a ver a filha quando aceitar.",
        "correct": false,
        "feedback": "Isso é violência: afastar a mãe da filha é ilegal."
      }
    ]
  }
];

function ImportedSectionTemas() {
  const [themeId, setThemeId] = useState(GAME_THEMES[0].id);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const theme = GAME_THEMES.find(t => t.id === themeId)!;
  const situations = GAME_SITUATIONS.filter(item => item.themeId === themeId);
  const current = (situations[step] ?? situations[0]) as GameSituation;
  const chosen = selected === null ? undefined : current.options[selected];
  function startTheme(id: string) { setThemeId(id); setStep(0); setSelected(null); setScore(0); setFinished(false); }
  function choose(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (current.options[index]?.correct) setScore(value => value + 1);
  }
  function next() {
    if (step + 1 < situations.length) { setStep(step + 1); setSelected(null); } else setFinished(true);
  }
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside>
          <h2 className="section-title text-base">Temas</h2>
          <ul className={"mt-3 flex flex-wrap gap-2 \x6cg:\x66lex-col"}>
            {GAME_THEMES.map(item => {
              const active = item.id === themeId;
              return (
                <li className="w-full lg:w-auto" key={item.id}>
                  <button className={active ? "flex w-full items-center gap-2.5 rounded-xl bg-primary px-4 py-3 text-left text-sm font-semibold text-primary-foreground \x73hadow-sm" : "flex w-full items-center gap-2.5 rounded-xl \x62order \x62order-border \x62g-card px-4 py-3 text-left text-sm font-medium \x74ext-foreground/\x380 transition-colors \x68over:\x62g-secondary hover:text-primary"} type="button" aria-pressed={active} onClick={() => startTheme(item.id)}><svg className={active ? "h-4.5 w-4.5 text-gold" : "h-4.5 w-4.5 text-magenta"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>{item.label}</button>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-6 \x73hadow-sm md:p-8"}>
          {finished ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-magenta">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" /><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" /><path d="M18 9h1.5a1 1 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /><path d="M6 9H4.5a1 1 0 0 1 0-5H6" /></svg>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">Terminaste o tema {theme.label}!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Acertaste <strong className="text-primary">{score}</strong> de {situations.length} situações.</p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">Continua a aprender: experimenta outro tema ou volta à página do quiz.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary" type="button" onClick={() => startTheme(themeId)}><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>Jogar de novo</button>
                <a className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90" href="/quiz">Voltar ao quiz<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={"rounded-full \x62g-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"}>{theme.label}</span>
                <span className="text-xs font-medium text-muted-foreground">Situação {step + 1} de {situations.length} · Pontos: {score}</span>
              </div>
              <div className={"mt-3 h-1.5 w-full overflow-hidden rounded-full \x62g-secondary"}>
                <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${((step + (selected === null ? 0 : 1)) / situations.length) * 100}%` }} />
              </div>
              <div className={"mt-6 flex items-start gap-3 rounded-xl \x62g-secondary p-5"}>
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v18" />
              <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
              <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
              <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
              <path d="M7 21h10" />
            </svg>
                <p className="text-sm leading-relaxed text-foreground">{current.situation}</p>
              </div>
              <div className={"mt-6 \x73pace-y-3"}>
                {current.options.map((option, index) => {
                  const isCorrect = selected !== null && option.correct;
                  const isWrong = selected === index && !option.correct;
                  return (
                    <button key={index} className={isCorrect ? "flex w-full items-start gap-3 rounded-xl border-2 border-gold bg-gold/10 p-4 text-left text-sm font-medium text-foreground" : isWrong ? "flex w-full items-start gap-3 rounded-xl border-2 border-destructive bg-destructive/5 p-4 text-left text-sm font-medium text-foreground" : "flex w-full items-start gap-3 rounded-xl \x62order \x62order-border bg-background p-4 text-left text-sm \x74ext-foreground/\x385 transition-colors \x68over:\x62order-magenta \x68over:\x62g-secondary disabled:opacity-70"} type="button" disabled={selected !== null} onClick={() => choose(index)}>
                      {isCorrect ? (
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-magenta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      ) : isWrong ? (
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      ) : (
                        <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62order \x62order-border font-display text-[11px] font-bold text-primary"}>{String.fromCharCode(65 + index)}</span>
                      )}
                      {option.text}
                    </button>
                  );
                })}
              </div>
              {chosen && (
                <div className="mt-6">
                  <p className={chosen.correct ? "rounded-xl bg-gold/15 p-4 text-sm font-medium text-foreground" : "rounded-xl bg-secondary p-4 text-sm font-medium text-foreground"} role="status">{chosen.feedback}</p>
                  <div className="mt-5 flex justify-end">
                    <button className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90" type="button" onClick={next}>{step + 1 < situations.length ? "Próxima situação" : "Ver resultado"}<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                  </div>
                </div>
              )}
            </>
          )}
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
              <a className={"text-sm \x74ext-primary-foreground/\x380 transition-colors hover:text-gold"} aria-current="page" data-status="active" href="/e-se-fosse-voce">E se fosse Você</a>
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
