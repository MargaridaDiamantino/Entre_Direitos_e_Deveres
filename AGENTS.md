<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Each page of the imported site lives entirely in its own route file (`src/routes/<page>.tsx`, with styles in `src/styles/pages/<page>.css` or `src/styles/site.css` for `/`); header, footer and page interactions are duplicated per route, so apply shared changes (navigation, footer) to every route file. Why: keeps each imported page self-contained and matches the site-import layout.
- Forms (contact, newsletter) only show a confirmation message and send nothing anywhere. Why: the original site had no backend; connecting one is a separate decision.
