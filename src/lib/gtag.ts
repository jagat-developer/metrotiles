export const GOOGLE_ADS_ID = "AW-17772493109";
export const GET_DIRECTIONS_CONVERSION_SEND_TO =
  "AW-17772493109/iRgLCM611ZwcELXyyppC";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export function reportGetDirectionsConversion(url?: string): boolean {
  if (typeof window === "undefined") return true;
  const callback = () => {
    if (url) window.location.href = url;
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GET_DIRECTIONS_CONVERSION_SEND_TO,
      value: 1.0,
      currency: "CAD",
      event_callback: callback,
    });
  } else if (url) {
    callback();
  }
  return false;
}
