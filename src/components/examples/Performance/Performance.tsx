import { useMemo, useState } from 'react';

import { Image } from '@/components/shared/Image';

import MOCK_DATA from './MOCK_DATA.json';
import { PerformanceMemo } from './PerformanceMemo';
import { PerformanceList } from './PerformanceList';

export const Performance = () => {
  const [_, setState] = useState(0);
  const [list, setList] = useState(MOCK_DATA);

  const filteredListElements = useMemo(
    () => list.filter((_, index) => index % 24),
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
      <PerformanceMemo name='Adam' />
      <PerformanceList items={filteredListElements} />
      <PerformanceList.Memo items={filteredListElements} />
      <h4>Results:</h4>
      <Image
        src='/list-memo-diff.png'
        title='Difference between list and memo list'
      />
    </div>
  );
};
