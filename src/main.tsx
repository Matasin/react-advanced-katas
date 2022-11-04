import React from 'react';
import ReactDOM from 'react-dom/client';
// import { init as sentryInit } from '@sentry/react';
// import { BrowserTracing } from '@sentry/tracing';
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import './index.css';

// const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
// const MODE = import.meta.env.MODE;

// sentryInit({
//   dsn: SENTRY_DSN,
//   integrations: [new BrowserTracing()],
//   tracesSampleRate: MODE === 'production' ? 0.75 : 1.0,
// });

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SentryErrorBoundary fallback={() => <div>An error occurred.</div>}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </SentryErrorBoundary>
  </React.StrictMode>
);
