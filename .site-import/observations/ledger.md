# Observation ledger — https://green-cream-curiosity-club.lovable.app/ -> /

| Control | Viewport | Trigger | Expected (source) | Preview result | Status | Evidence |
|---|---|---|---|---|---|---|
| Desktop main nav | 1280x900, window scroll 0 | links in "Navegação principal" | 7 links + Participar to same-site paths | hrefs preserved on preview origin (/, /direitos, /quiz, /e-se-fosse-voce, /multimedia, /historias-reais, /contacto) | pass (pages other than / not imported) | source_desktop_00.png / preview_desktop_00.png |
| Search button | 1280x900 | click "Pesquisar" | no visible change on source | no-op | pass | source_desktop_search_click.png |
| Phone menu open | 390x844, scroll 0 | "Abrir menu" | mobile nav panel with 7 links + Participar, icon becomes X "Fechar menu" | same; aria-expanded=true | pass (repaired: was inert) | source_phone_menu_open.png / preview_phone_menu_open.png, source_phone_menu_open_header.html |
| Phone menu close | 390x844 | "Fechar menu", Escape | panel closes | closes; Escape returns focus to button | pass | — |
| Phone menu link | 390x844 | Quiz | /quiz | http://localhost:8080/quiz | pass (page not imported) | — |
| Hero CTA | 1280x900 | "Explorar Direitos →" | /direitos | http://localhost:8080/direitos | pass (page not imported) | — |
| Podcast carousel | 1280x900 | "Podcast seguinte" | advances one episode (Ep. 9, Ep. 8 visible) | same | pass | source/preview_desktop_carousel_1.png |
| Media | all | — | no video/canvas on page | — | n/a | — |

Sections compared by scroll screenshots (desktop 4, phone 8): all visible, page heights identical (3569 / 6120). Only differences: hosting "Edit with Lovable" badge and hover lift from test pointer.

# Batch 2 — /direitos, /quiz, /e-se-fosse-voce, /multimedia, /historias-reais, /contacto

Paired screenshots: pages/source_* vs pages/preview_* (desktop 1280x900, phone 390x844, window scroll via wheel). All pages identical height; no screenshot pair differs by more than 0.3% pixels.

| Control | Route | Expected (source) | Preview | Status |
|---|---|---|---|---|
| Phone menu open/active item/link | all 6 | panel with 7 links + Participar, current page highlighted | same, link navigates | pass (repaired) |
| Topic filters + search | /direitos | filters cards by topic / text; empty state message | text identical for Educação, Saúde, Todos, "violência"; empty state shown | pass (repaired) |
| Rights card "Saber mais" | /direitos | /direitos/<slug> detail page | same path on preview origin | pass — detail pages not imported |
| Game themes, answers, feedback, next, result, replay | /e-se-fosse-voce | 6 themes x 2 situations, scoring, result screen | text identical at every recorded step; result + "Jogar de novo" work | pass (repaired) |
| Media tabs | /multimedia | Vídeos / Imagens / Podcast / Publicações | text identical; all pictures load (podcast cover added as /site-assets/podcast-cover.jpg) | pass (repaired) |
| Contact form | /contacto | browser validation on empty submit; "Mensagem enviada!" on submit (no data sent) | same | pass (repaired; source submission not exercised) |
| Footer newsletter | all 7 | "Obrigada!..." after valid email (no data sent) | same | pass (repaired; source submission not exercised) |
| Media playback | — | no video/audio players on any page | — | n/a |

Asset map: hero-home→6c288d0b5cf21648.jpg, hero-direitos→d1b55f4f504dbe3a.jpg, hero-quiz→2263a09dfab71c45.jpg, story-1→3b4a41f5ab18e8bc.jpg, story-2→2fc88d88cbbee038.jpg, story-3→34230323d49ce4a7.jpg, podcast-cover→podcast-cover.jpg.
