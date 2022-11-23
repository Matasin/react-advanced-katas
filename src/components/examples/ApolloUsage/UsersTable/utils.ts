import type { User } from '@/queries/__generated__/types';

export const getUserKeys = (user: User | null) => {
  if (!user) {
    return null;
  }

  type ObjectKey = keyof typeof user;

  const keys = Object
    .keys(user)
    .filter((k) => k.indexOf('__') !== 0);

  return keys as ObjectKey[];
};
