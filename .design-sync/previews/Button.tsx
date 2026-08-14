import { Button } from "../../src/app/components/ui/button";
import { Mail, Trash2 } from "lucide-react";

export function Default() {
  return <Button>Get started</Button>;
}

export function Variants() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Delete">
        <Trash2 />
      </Button>
    </div>
  );
}

export function WithIconAndDisabled() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button>
        <Mail /> Send email
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
