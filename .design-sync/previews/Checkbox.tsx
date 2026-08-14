import { Checkbox } from "../../src/app/components/ui/checkbox";
import { Label } from "../../src/app/components/ui/label";

export function Default() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Checkbox id="marketing" />
      <Label htmlFor="marketing">Send me marketing emails</Label>
    </div>
  );
}

export function Checked() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">I accept the terms and conditions</Label>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox id="d1" disabled />
        <Label htmlFor="d1">Disabled, unchecked</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox id="d2" disabled defaultChecked />
        <Label htmlFor="d2">Disabled, checked</Label>
      </div>
    </div>
  );
}
