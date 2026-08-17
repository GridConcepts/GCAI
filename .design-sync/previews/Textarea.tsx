import { Textarea } from "../../src/app/components/ui/textarea";
import { Label } from "../../src/app/components/ui/label";

export function Default() {
  return (
    <Textarea
      placeholder="Describe the audience and goals for this campaign..."
      style={{ width: 320 }}
    />
  );
}

export function WithLabel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
      <Label htmlFor="ad-copy">Ad description</Label>
      <Textarea
        id="ad-copy"
        defaultValue="Get 20% off your first order when you sign up for our AI-powered ad management platform. Limited time offer for new advertisers."
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
      <Label htmlFor="notes">Internal notes</Label>
      <Textarea
        id="notes"
        defaultValue="Locked for review by the account manager."
        disabled
      />
    </div>
  );
}
