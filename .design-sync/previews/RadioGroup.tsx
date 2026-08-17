import { RadioGroup, RadioGroupItem } from "../../src/app/components/ui/radio-group";
import { Label } from "../../src/app/components/ui/label";

export function Default() {
  return (
    <RadioGroup defaultValue="search" style={{ width: 260 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="search" id="campaign-search" />
        <Label htmlFor="campaign-search">Search campaign</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="display" id="campaign-display" />
        <Label htmlFor="campaign-display">Display campaign</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="performance-max" id="campaign-pmax" />
        <Label htmlFor="campaign-pmax">Performance Max</Label>
      </div>
    </RadioGroup>
  );
}

export function Disabled() {
  return (
    <RadioGroup defaultValue="monthly" disabled style={{ width: 260 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="monthly" id="billing-monthly" />
        <Label htmlFor="billing-monthly">Bill monthly</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="annual" id="billing-annual" />
        <Label htmlFor="billing-annual">Bill annually (save 15%)</Label>
      </div>
    </RadioGroup>
  );
}
