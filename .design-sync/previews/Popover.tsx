import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../src/app/components/ui/popover";
import { Button, buttonVariants } from "../../src/app/components/ui/button";
import { Label } from "../../src/app/components/ui/label";
import { Input } from "../../src/app/components/ui/input";

// NOTE: the site's Button component isn't wrapped in React.forwardRef (this
// repo is on React 18, not 19), so `<PopoverTrigger asChild><Button/></PopoverTrigger>`
// silently fails to attach Radix's positioning ref to the trigger, which makes
// the popper-positioned content render off-screen. Styling the Trigger
// primitive directly with `buttonVariants` sidesteps the bug while still
// looking identical to a real Button — flagged in NOTES.md as a real site bug.
export function Default() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger className={buttonVariants({ variant: "outline" })}>
        Set date range
      </PopoverTrigger>
      <PopoverContent style={{ width: 288 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
              Report date range
            </h4>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted-foreground)" }}>
              Applies to this campaign&apos;s performance charts.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Label htmlFor="range-start">Start</Label>
              <Input id="range-start" defaultValue="2026-07-01" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Label htmlFor="range-end">End</Label>
              <Input id="range-end" defaultValue="2026-08-14" />
            </div>
          </div>
          <Button size="sm">Apply range</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
