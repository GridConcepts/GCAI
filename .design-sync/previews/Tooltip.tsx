import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../src/app/components/ui/tooltip";
import { buttonVariants } from "../../src/app/components/ui/button";

// NOTE: the site's Button component isn't wrapped in React.forwardRef (this
// repo is on React 18, not 19), so `<TooltipTrigger asChild><Button/></TooltipTrigger>`
// silently fails to attach Radix's positioning ref to the trigger, which makes
// the popper-positioned content render off-screen. Styling the Trigger
// primitive directly with `buttonVariants` sidesteps the bug while still
// looking identical to a real Button — flagged in NOTES.md as a real site bug.
export function Default() {
  return (
    <div style={{ paddingTop: 40, paddingLeft: 24 }}>
      <Tooltip defaultOpen>
        <TooltipTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
          Target CPA
        </TooltipTrigger>
        <TooltipContent>
          <p style={{ margin: 0 }}>
            Average cost you&apos;re willing to pay per lead.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
