import { Skeleton } from "../../src/app/components/ui/skeleton";

export function Default() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Skeleton style={{ width: 40, height: 40, borderRadius: 9999 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton style={{ width: 160, height: 12 }} />
        <Skeleton style={{ width: 100, height: 12 }} />
      </div>
    </div>
  );
}

export function CardLoading() {
  return (
    <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 10 }}>
      <Skeleton style={{ width: "100%", height: 120 }} />
      <Skeleton style={{ width: "70%", height: 14 }} />
      <Skeleton style={{ width: "45%", height: 14 }} />
    </div>
  );
}
