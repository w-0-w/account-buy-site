import { useLocale } from 'ice';

import { ZH, EN } from '@/config/i18n';

export function useBiz() {
  const [locale] = useLocale();

  return {
    lang: locale === EN ? EN : ZH,
    routePrefix: locale === EN ? `/${EN}` : '',
    currency: locale === ZH ? '¥' : '$',
    comma: locale === ZH ? '，' : ', ',
  };
}
