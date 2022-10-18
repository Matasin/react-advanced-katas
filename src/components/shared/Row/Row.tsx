import { PropsWithChildren } from 'react';

type RowProps = PropsWithChildren & {
  header: string;
};

export const Row = ({
  header,
  children,
}: RowProps) => {
  return (
    <div className='row'>
      <h2>📦 {header}</h2>
      {children}
    </div>
  );
};
