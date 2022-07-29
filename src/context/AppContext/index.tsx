import type { ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return <>{children}</>;
}
