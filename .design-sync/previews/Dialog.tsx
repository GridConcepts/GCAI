import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../../src/app/components/ui/dialog";
import { Button } from "../../src/app/components/ui/button";
import { Label } from "../../src/app/components/ui/label";
import { Input } from "../../src/app/components/ui/input";

export function Default() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Edit budget</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit daily budget</DialogTitle>
          <DialogDescription>
            Update the daily spend cap for &quot;AI Leads — Search&quot;. Changes apply
            from tomorrow&apos;s billing cycle.
          </DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Label htmlFor="daily-budget">Daily budget (AUD)</Label>
          <Input id="daily-budget" defaultValue="85.00" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
