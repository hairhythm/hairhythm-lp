/**
 * GA4 イベント計測ユーティリティ
 * 育毛の学校 LP — Google Analytics 4 (G-3NXEWBVWG6)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4にカスタムイベントを送信する */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/** LINEボタンクリックを計測する */
export function trackLineClick(location: string) {
  trackEvent("line_button_click", {
    event_category: "engagement",
    event_label: location,
  });
}

/** フォーム送信完了を計測する（postMessageで検知） */
export function trackFormSubmit() {
  trackEvent("form_submit", {
    event_category: "conversion",
    event_label: "contact_form",
  });
}
