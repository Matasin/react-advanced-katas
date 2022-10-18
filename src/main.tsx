import React from 'react';
import ReactDOM from 'react-dom/client';
import { init as sentryInit } from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react';

import App from './App';
import './index.css';

sentryInit({
  dsn: "https://a4eea289e2a04804b0fd945a2199a826@o4504004738154496.ingest.sentry.io/4504004739334144",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SentryErrorBoundary fallback={() => <div>An error occurred.</div>}>
      <App />
    </SentryErrorBoundary>
  </React.StrictMode>
);
