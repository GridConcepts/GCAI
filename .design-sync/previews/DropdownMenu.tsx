import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "../../src/app/components/ui/dropdown-menu";
import { buttonVariants } from "../../src/app/components/ui/button";

// NOTE: the site's Button component isn't wrapped in React.forwardRef (this
// repo is on React 18, not 19), so `<DropdownMenuTrigger asChild><Button/></DropdownMenuTrigger>`
// silently fails to attach Radix's positioning ref to the trigger, which makes
// the popper-positioned content render off-screen. Styling the Trigger
// primitive directly with `buttonVariants` sidesteps the bug while still
// looking identical to a real Button — flagged in NOTES.md as a real site bug.
export function Default() {
  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
        Campaign actions
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ width: 224 }}>
        <DropdownMenuLabel>AI Leads campaign</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Duplicate campaign
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Edit budget</DropdownMenuItem>
        <DropdownMenuItem>Pause campaign</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Delete campaign
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
