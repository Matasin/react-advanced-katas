import { memo } from 'react';

type PerformanceMemoProps = {
  name: string;
};

export const PerformanceMemo = memo(({
  name,
}: PerformanceMemoProps) => {
  console.log('render')
  
  return (
    <div>Memo: {name}</div>
  );
});
