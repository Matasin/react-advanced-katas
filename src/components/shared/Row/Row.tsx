import { PropsWithChildren } from 'react';

type RowProps = PropsWithChildren & {
  header: string;
  isIconVisible?: boolean;
};

export const Row = ({
  header,
  isIconVisible = true,
  children,
}: RowProps) => {
  const renderIcon = () => (
    isIconVisible ?
      '📦' : null
  );

  return (
    <div className='row'>
      <h2>
        {renderIcon()} {header}
      </h2>
      {children}
    </div>
  );
};
