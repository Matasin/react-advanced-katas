import { memo } from 'react';

type PerformanceMemoProps = {
  name: string;
};

const compareProps = (
  prevProps: PerformanceMemoProps,
  nextProps: PerformanceMemoProps
) => {
  return prevProps.name === nextProps.name;
};

export const PerformanceMemo = memo(({
  name,
}: PerformanceMemoProps) => {
  console.log('render');

  return (
    <div>Memo: {name}</div>
  );
}, compareProps);
