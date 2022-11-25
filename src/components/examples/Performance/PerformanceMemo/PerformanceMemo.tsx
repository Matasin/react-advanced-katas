import { memo } from 'react';

type PerformanceMemoProps = {
  name: string;
  count: number;
};

const compareProps = (
  prevProps: PerformanceMemoProps,
  nextProps: PerformanceMemoProps
) => {
  return (
    prevProps.name === nextProps.name
  );
};

export const PerformanceMemo = memo(({
  name,
  count,
}: PerformanceMemoProps) => {
  console.log('render');

  return (
    <div>Memo: {name} - count: {count}</div>
  );
}, compareProps);
