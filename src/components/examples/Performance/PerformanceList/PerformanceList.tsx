import { memo } from 'react';
import { FixedSizeList } from 'react-window';

import {
  type ItemType,
  PerformanceListItem,
} from './PerformanceListItem';

type PerformanceListProps = {
  items: ItemType[];
};

const renderItem = (item: ItemType) => {
  return (
    <PerformanceListItem
      key={item.id}
      item={item}
    />
  );
};

export const PerformanceList = ({
  items
}: PerformanceListProps) => {
  console.log('PerformanceList');
  return (
    <div className='list'>
      <h4>List:</h4>
      <ul>
        {items.map(renderItem)}
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
        {items.map(renderItem)}
      </ul>
    </div>
  );
});

PerformanceListMemo.displayName = 'PerformanceListMemo';

const PerformanceListVirtualized = memo(({
  items
}: PerformanceListProps) => {
  return (
    <>
      <h4>List virtualized:</h4>
      <FixedSizeList
        height={250}
        width='100%'
        itemCount={items.length}
        itemSize={155}
      >
        {({ index, style }) => {
          const item = items[index];
          return (
            <div style={style}>
              {renderItem(item)}
            </div>
          );
        }}
      </FixedSizeList>
    </>
  );
});

PerformanceListVirtualized.displayName = 'PerformanceListVirtualized';

PerformanceList.Memo = PerformanceListMemo;
PerformanceList.Virtualized = PerformanceListVirtualized;
