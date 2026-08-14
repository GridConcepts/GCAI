import { Switch } from "../../src/app/components/ui/switch";
import { Label } from "../../src/app/components/ui/label";

export function Off() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Switch id="weekend-pacing" />
      <Label htmlFor="weekend-pacing">Pause spend on weekends</Label>
    </div>
  );
}

export function On() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Switch id="auto-bid" defaultChecked />
      <Label htmlFor="auto-bid">Automated bidding</Label>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="locked-off" disabled />
        <Label htmlFor="locked-off">Enable A/B testing (plan upgrade required)</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="locked-on" disabled defaultChecked />
        <Label htmlFor="locked-on">Conversion tracking (managed by admin)</Label>
      </div>
    </div>
  );
}
