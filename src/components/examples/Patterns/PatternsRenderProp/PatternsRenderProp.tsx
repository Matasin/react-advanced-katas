import { ReactNode } from 'react';

const someData = 'Some data from PatternsRenderProp';

type PatternsRenderPropProps = {
  render: (text: string) => ReactNode;
};

export const PatternsRenderProp = ({
  render,
}: PatternsRenderPropProps) => {
  return (
    <div>
      {render(someData)}
    </div>
  );
};
