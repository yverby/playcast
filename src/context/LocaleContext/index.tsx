import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import type { ReactNode } from 'react';

import en from 'src/translations/en.json';

interface LocaleContextProps {
  children: ReactNode;
}

const messages = { en };

export function LocaleContext({ children }: LocaleContextProps) {
  const [locale] = useState<keyof typeof messages>('en');

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      onError={() => null}
    >
      {children}
    </IntlProvider>
  );
}
