import { Badge } from "../../src/app/components/ui/badge";

export function VariantSweep() {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

export function CampaignStatus() {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Paused</Badge>
      <Badge variant="destructive">Disapproved</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  );
}
