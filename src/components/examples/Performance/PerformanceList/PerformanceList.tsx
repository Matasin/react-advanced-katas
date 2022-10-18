import { memo } from 'react';

import {
  type ItemType,
  PerformanceListItem,
} from './PerformanceListItem';

type PerformanceListProps = {
  items: ItemType[];
};

export const PerformanceList = ({
  items
}: PerformanceListProps) => {
  console.log('PerformanceList');
  return (
    <div className='list'>
      <h4>List:</h4>
      <ul>
        {items.map(item => (
          <PerformanceListItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

PerformanceList.displayName = 'PerformanceList';

const PerformanceListMemo = memo(({
  items
}: PerformanceListProps) => {
  console.log('PerformanceListMemo');
  return (
    <div className='list'>
      <h4>List with memo:</h4>
      <ul>
        {items.map(item => (
          <PerformanceListItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
});

PerformanceListMemo.displayName = 'PerformanceListMemo';

PerformanceList.Memo = PerformanceListMemo;
