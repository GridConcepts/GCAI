## Using the GCAI component library

This is Grid Concepts AI's own shadcn/ui + Radix component set (48 source files, `window.GCAI.*`), synced directly from `src/app/components/ui` in the site's own repo — not a separate published package. Build with these exact components; don't recreate a lookalike.

**No wrapper/provider needed for styling.** Tokens and Tailwind utility classes are already baked into `_ds_bundle.css` / `styles.css` — components render correctly standalone. The one exception is `Tooltip`, which wraps itself in its own `TooltipProvider` internally, so it also needs no external setup.

**Styling idiom: Tailwind v4 utility classes over CSS custom properties.** Every component's own classes reference these semantic color tokens (never raw hex/oklch):

| Token | Utility classes | Use for |
|---|---|---|
| `--background` / `--foreground` | `bg-background` / `text-foreground` | Page background, default text |
| `--card` / `--card-foreground` | `bg-card` / `text-card-foreground` | Card surfaces |
| `--popover` / `--popover-foreground` | `bg-popover` / `text-popover-foreground` | Popover/dropdown/select panels |
| `--primary` / `--primary-foreground` | `bg-primary` / `text-primary` | Primary buttons, key actions |
| `--secondary` / `--secondary-foreground` | `bg-secondary` / `text-secondary` | Secondary buttons, badges |
| `--muted` / `--muted-foreground` | `bg-muted` / `text-muted-foreground` | Subdued backgrounds, helper text |
| `--accent` / `--accent-foreground` | `bg-accent` / `text-accent` | Hover states, highlighted rows |
| `--destructive` / `--destructive-foreground` | `bg-destructive` / `text-destructive` | Delete/danger actions and alerts |
| `--border`, `--input`, `--ring` | `border-border`, `border-input`, `ring-ring` | Borders and focus rings |
| `--sidebar*` | `bg-sidebar`, `text-sidebar-foreground`, etc. | The `Sidebar` component family only |
| `--radius` | `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl` | Corner radius, derived from a single `--radius` value |

New layout/glue code you write around these components should use the same utility classes (e.g. `className="flex flex-col gap-4"`), not inline styles or ad hoc colors — that's how every component in this system is built.

**Where the real styles live**: `styles.css` (imports `_ds_bundle.css`, which carries the full compiled Tailwind output — every token and utility class above is defined there). Per-component API and usage: each `components/<group>/<Name>/<Name>.prompt.md`.

**Composing multi-part components**: many components (Card, Dialog, Select, Table, Tabs, Accordion, DropdownMenu, Sheet, Popover, Tooltip, AlertDialog, Breadcrumb, RadioGroup) are families of sub-parts meant to be composed together, not used standalone — e.g. `Card` + `CardHeader` + `CardTitle` + `CardDescription` + `CardContent` + `CardFooter`, or `Select` + `SelectTrigger` + `SelectContent` + `SelectItem`. Follow the shape shown in each component's `.prompt.md` and preview card.

**A note on `Button`**: `Button` is a plain function component (not `React.forwardRef`-wrapped) in this React 18 codebase. Using it as an ordinary child works fine everywhere. But composing it as `<XTrigger asChild><Button>...</Button></XTrigger>` for Popper-positioned overlays (`Popover`, `Tooltip`, `DropdownMenu`) silently breaks the trigger's position measurement. If you need a button-styled trigger for one of those, style the Trigger primitive directly with `buttonVariants(...)` (exported from the `Button` component's source) instead of wrapping `Button`.

**Example — a settings card with a primary action:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Team plan</CardTitle>
    <CardDescription>For growing marketing teams.</CardDescription>
    <CardAction>
      <Badge>Popular</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Includes unlimited campaigns, 10 seats, and priority support.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline">Learn more</Button>
    <Button>Upgrade</Button>
  </CardFooter>
</Card>
```
