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
