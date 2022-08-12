import { Provider } from 'react-redux';

import type { ReactNode } from 'react';

import { store } from 'src/store';

interface StoreContextProps {
  children: ReactNode;
}

export function StoreContext({ children }: StoreContextProps) {
  return <Provider store={store}>{children}</Provider>;
}
