import { Progress } from "../../src/app/components/ui/progress";

export function Low() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 240 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span>Daily budget used</span>
        <span style={{ color: "var(--muted-foreground)" }}>25%</span>
      </div>
      <Progress value={25} />
    </div>
  );
}

export function Medium() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 240 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span>Daily budget used</span>
        <span style={{ color: "var(--muted-foreground)" }}>60%</span>
      </div>
      <Progress value={60} />
    </div>
  );
}

export function High() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 240 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span>Daily budget used</span>
        <span style={{ color: "var(--muted-foreground)" }}>90%</span>
      </div>
      <Progress value={90} />
    </div>
  );
}
