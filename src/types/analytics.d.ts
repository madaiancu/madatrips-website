// Global analytics types for MadaTrips
declare global {
  interface Window {
    trackEvent?: (action: string, category: string, label: string) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};






