import { Row } from '@/components/shared/Row';
import { Optimistic } from './components/examples/Optimistic';
import { Image } from './components/shared/Image';

import './App.css';

const App = () => {
  return (
    <>
      <Row header='Optimistic UI / Context provider'>
        <Optimistic />
        <Image
          src='/context-1.png'
          title='Context 1'
        />
        <Image
          src='/context-2.png'
          title='Context 2'
        />
        <Image
          src='/context-3.png'
          title='Context 3'
        />
      </Row>
    </>
  );
};

export default App;
