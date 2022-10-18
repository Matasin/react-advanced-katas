import { Context } from '@/components/examples/Context';
import { Hook } from '@/components/examples/Hook';
import { BuggyComponent, ErrorBoundary } from '@/components/examples/ErrorBoundary';
import { Performance } from '@/components/examples/Performance';
import { Row } from '@/components/shared/Row';

import './App.css';

const App = () => {
  return (
    <>
      <Row header='React / React with TS'>
        <Context />
      </Row>
      <Row header='React / Hooks'>
        <Hook />
      </Row>
      <Row header='React / Performance'>
        <Performance />
      </Row>
      <Row header='React / Error handling'>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
        <li>Use free plan of Sentry to monitor errors in deployed application. Demonstrate error logs for production environment (you can easily deploy react app with netlify)</li>
        <li>https://glittering-entremet-ca2312.netlify.app/</li>
      </Row>
      <Row header='React / Patterns'>
        <p>?</p>
      </Row>
      <Row header='React / Testing'>
        <p>?</p>
      </Row>
      <Row header='Server State management / Usage'>
        <p>?</p>
      </Row>
      <Row header='Application Features / Bundle optimization'>
        <p>?</p>
      </Row>
      <Row header='Application Features / Realtime'>
        <p>?</p>
      </Row>
      <Row header='Graphql with Apollo / Usage'>
        <p>?</p>
      </Row>
      <Row header='Graphql with Apollo / TypeScript'>
        <p>?</p>
      </Row>
      <Row header='Graphql with Apollo / Subscriptions'>
        <p>?</p>
      </Row>
    </>
  );
};

export default App;
