import ReactGA from 'react-ga4';

/**
 * [ReactGA.event params]
 * @param action: string
 * @param category: string
 * @param label?: string
 * @param value?: number
 * @param nonInteraction?: boolean
 * @param transport?: 'beacon' | 'xhr' | 'image'
 */

// Init GA
export const initializeGA = () => {
  const { hostname } = window.location;
  if (hostname === 'localhost') return;
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!trackingId) return;
  ReactGA.initialize(trackingId);
};

// 페이지 view 추적
export const trackPageView = (page: string) => {
  if (!page) return;
  ReactGA.set({ page });
  ReactGA.send('pageview');
};
