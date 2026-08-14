import { Separator } from "../../src/app/components/ui/separator";

export function Horizontal() {
  return (
    <div style={{ width: 320 }}>
      <div>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
          Campaign Settings
        </h4>
        <p style={{ fontSize: 13, margin: "4px 0 0", color: "#71717a" }}>
          Manage targeting, budget, and schedule.
        </p>
      </div>
      <Separator style={{ margin: "12px 0" }} />
      <div>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Billing</h4>
        <p style={{ fontSize: 13, margin: "4px 0 0", color: "#71717a" }}>
          Update your payment method and invoices.
        </p>
      </div>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 40, gap: 16 }}>
      <span style={{ fontSize: 13 }}>Overview</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Campaigns</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Settings</span>
    </div>
  );
}
