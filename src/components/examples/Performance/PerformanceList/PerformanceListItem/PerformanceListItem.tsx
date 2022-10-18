export type ItemType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  ewqeqw: string;
};

type PerformanceListItemProps = {
  item: ItemType;
};

export const PerformanceListItem = ({
  item
}: PerformanceListItemProps) => {
  return (
    <li className='item'>
      <b>{`${item.first_name} ${item.last_name}`}</b>
      <span>{` - ${item.email} - ${item.gender}`}</span>
      <pre>{item.ip_address}</pre>
    </li>
  );
};
