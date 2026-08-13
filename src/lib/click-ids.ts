const STORAGE_KEY = "gc_click_ids";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // 90-day attribution window

type ClickIds = { gclid: string; msclkid: string };

/**
 * Reads gclid/msclkid from the current URL (if present) and persists them to
 * localStorage so they survive navigation to a later page/session where the
 * Data Check is actually submitted. Existing stored values are kept if the
 * current URL doesn't carry new ones.
 */
export function captureClickIds(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");
  const msclkid = params.get("msclkid");
  if (!gclid && !msclkid) return;

  const existing = readStored();
  const next: ClickIds & { capturedAt: number } = {
    gclid: gclid || existing.gclid,
    msclkid: msclkid || existing.msclkid,
    capturedAt: Date.now(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable (private browsing, quota) — click IDs simply won't persist
  }
}

/** Returns previously captured click IDs, or empty strings if none/expired. */
export function getStoredClickIds(): ClickIds {
  const stored = readStored();
  const capturedAt = (stored as { capturedAt?: number }).capturedAt ?? 0;
  if (capturedAt && Date.now() - capturedAt > MAX_AGE_MS) {
    return { gclid: "", msclkid: "" };
  }
  return { gclid: stored.gclid, msclkid: stored.msclkid };
}

function readStored(): ClickIds {
  if (typeof window === "undefined") return { gclid: "", msclkid: "" };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { gclid: "", msclkid: "" };
    const parsed = JSON.parse(raw);
    return { gclid: parsed.gclid || "", msclkid: parsed.msclkid || "" };
  } catch {
    return { gclid: "", msclkid: "" };
  }
}
