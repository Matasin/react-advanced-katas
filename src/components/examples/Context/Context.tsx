import { useNameContext } from '@/contexts';

export const Context = () => {
  const { 
    name,
  } = useNameContext();

  return (
    <p>Default value of useNameContext: {name}</p>
  );
};
