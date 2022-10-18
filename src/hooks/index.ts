import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(prev => !prev);

  return [value, toggleValue] as const;
};


// export const useToggle = (initialValue: boolean) => {
//   const [isVisible, setIsVisible] = useState(initialValue);

//   const toggleVisible = () => setIsVisible(prev => !prev);

//   return {
//     isVisible,
//     toggleVisible,
//   };
// };
