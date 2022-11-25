import { useMemo, useState } from 'react';

import { Image } from '@/components/shared/Image';

import MOCK_DATA from './MOCK_DATA.json';
import { PerformanceMemo } from './PerformanceMemo';
import { PerformanceList } from './PerformanceList';

export const Performance = () => {
  const [state, setState] = useState(1);
  const [list,] = useState(MOCK_DATA);

  const filteredListElements = useMemo(
    () => list.filter((_, index) => index % 24),
    [list]
  );

  const reversedListElements = useMemo(
    () => filteredListElements.reverse(),
    [list]
  );

  const handleRefreshComponent = () => {
    setState(prev => prev + 1);
    console.log('Performance - CLICK!');
  };

  return (
    <div>
      <Image
        src='/profiler-dev.png'
        title='Profile development mode'
      />
      <Image
        src='/profiler-dev.png'
        title='Profile production mode'
      />
      <button onClick={handleRefreshComponent}>Refresh Component</button>
      <PerformanceMemo
        name='Adam'
        count={state}
      />
      <PerformanceList.Memo items={reversedListElements} />
      <PerformanceList items={filteredListElements} />
      <h4>Results of memoize list:</h4>
      <Image
        src='/list-memo-diff.png'
        title='Difference between list and memo list'
      />
      <PerformanceList.Virtualized items={filteredListElements} />
      <h4>Results of virtualization list:</h4>
      <Image
        src='/list-virtualization-diff.png'
        title='Difference between list and virtualized list'
      />
    </div>
  );
};
