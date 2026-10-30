declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

// Fires the OpenAI Pixel conversion event for ChatGPT ads. The pixel is loaded
// from index.html; this is a no-op if it was blocked or has not loaded.
export function trackConversion() {
  try {
    window.oaiq?.("measure", "contents_viewed", { type: "contents" });
  } catch (error) {
    console.error("[oaiq] measure failed:", error);
  }
}
