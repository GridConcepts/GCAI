import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../../src/app/components/ui/sheet";
import { Button } from "../../src/app/components/ui/button";
import { Label } from "../../src/app/components/ui/label";
import { Input } from "../../src/app/components/ui/input";

export function Default() {
  return (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button variant="outline">Edit campaign</Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        style={{ position: "static", transform: "none", width: 360, height: 480 }}
      >
        <SheetHeader>
          <SheetTitle>Edit campaign</SheetTitle>
          <SheetDescription>
            Update settings for &quot;AI Leads — Search&quot;. Changes apply from
            tomorrow&apos;s billing cycle.
          </SheetDescription>
        </SheetHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="sheet-campaign-name">Campaign name</Label>
            <Input id="sheet-campaign-name" defaultValue="AI Leads — Search" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label htmlFor="sheet-daily-budget">Daily budget (AUD)</Label>
            <Input id="sheet-daily-budget" defaultValue="85.00" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
