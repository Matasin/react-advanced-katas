import { Context } from '@/components/examples/Context';
import { Hook } from '@/components/examples/Hook';
import { BuggyComponent, ErrorBoundary } from '@/components/examples/ErrorBoundary';
import { Performance } from '@/components/examples/Performance';
import { StateManagement } from '@/components/examples/StateManagement';
import { Bundle } from '@/components/examples/Bundle';
import { Realtime } from '@/components/examples/Realtime';
import { Patterns } from '@/components/examples/Patterns';
import { Testing } from '@/components/examples/Testing';
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
      </Row>
      <Row header='React / Patterns'>
        <Patterns />
      </Row>
      <Row header='React / Testing'>
        <Testing name='Adam'/>
      </Row>
      <Row header='Server State management / Usage'>
        <StateManagement />
      </Row>
      <Row header='Application Features / Bundle optimization'>
        <Bundle />
      </Row>
      <Row header='Application Features / Realtime'>
        <Realtime />
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
