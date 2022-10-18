import { createContext, useContext } from 'react';

export type NameContextValue = {
  name: string;
};

const defaultValue = {
  name: 'undefined'
};

export const NameContext = createContext<NameContextValue>(defaultValue);

export const useNameContext = () => {
  const contextValue = useContext(NameContext);

  if (!contextValue) {
    throw new Error('ViewModeContext not found');
  }

  return contextValue;
};
