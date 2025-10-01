import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export default function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const [location] = useLocation();

  useEffect(() => {
    if (!measurementId) return;

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    window.gtag("config", measurementId, {
      page_path: location,
    });
  }, [location, measurementId]);

  return null;
}
