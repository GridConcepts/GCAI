import { Label } from "../../src/app/components/ui/label";
import { Input } from "../../src/app/components/ui/input";
import { Switch } from "../../src/app/components/ui/switch";

export function Default() {
  return <Label htmlFor="budget">Daily budget</Label>;
}

export function WithInput() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 260 }}>
      <Label htmlFor="daily-budget">Daily budget (AUD)</Label>
      <Input id="daily-budget" defaultValue="150" />
    </div>
  );
}

export function WithSwitch() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Switch id="auto-optimize" defaultChecked />
      <Label htmlFor="auto-optimize">Enable automated bidding</Label>
    </div>
  );
}
