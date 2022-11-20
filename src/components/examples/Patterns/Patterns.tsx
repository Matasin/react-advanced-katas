import { Row } from '@/components/shared/Row';

import { PatternsContainment } from './PatternsContainment/PatternsContainment';
import { PatternsRenderProp } from './PatternsRenderProp';

export const Patterns = () => {
  return (
    <>
      <PatternsRenderProp
        render={(text) => (
          <Row
            header='Patterns comp rendered something'
            isIconVisible={false}
          >
            Hello: {text}
          </Row>
        )}
      />
      <PatternsContainment>
        <div>Some text :D</div>
      </PatternsContainment>
    </>
  );
};
