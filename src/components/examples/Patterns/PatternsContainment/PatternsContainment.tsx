import { Row } from '@/components/shared/Row';
import { PropsWithChildren } from 'react';

export const PatternsContainment = ({
  children,
}: PropsWithChildren) => {
  return (
    <div>
      <Row
        header='Fancy wrapper for'
        isIconVisible={false}
      >
        <div>
          {children}
        </div>
      </Row>
    </div>
  );
};
