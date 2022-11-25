import { useToggle } from '@/hooks';

export const Hook = () => {
  const { isVisible, toggleVisible } = useToggle(true);

  return (
    <button onClick={toggleVisible}>
      {isVisible ? 'On' : 'Off'}
    </button>
  );
};
