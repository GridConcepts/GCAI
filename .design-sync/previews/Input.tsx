import { Input } from "../../src/app/components/ui/input";
import { Label } from "../../src/app/components/ui/label";

export function Default() {
  return <Input placeholder="Search campaigns..." style={{ width: 280 }} />;
}

export function WithLabel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 280 }}>
      <Label htmlFor="campaign-name">Campaign name</Label>
      <Input id="campaign-name" defaultValue="Spring Sale — Search" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 280 }}>
      <Label htmlFor="account-id">Account ID</Label>
      <Input id="account-id" defaultValue="ACC-48213" disabled />
    </div>
  );
}
