import { Outlet, useLocale, getDefaultLocale, useLocation } from 'ice';
import { IntlProvider } from 'react-intl';
import { Shell, ConfigProvider } from '@alifd/next';

import { i18n } from '@/i8n';
import { useBiz } from '@/hooks';
import { BizLogo } from '@/components/Biz/BizLogo';
import { BizLangSwitch } from '@/components/Biz/BizLangSwitch';
import { BizCS } from '@/components/Biz/BizCS';
import Footer from '@/components/Footer';

export default function Layout() {
  const [locale] = useLocale();
  const defaultLocale = getDefaultLocale();
  const customLocation = useLocation();

  const { routePrefix } = useBiz();

  const isFlow = customLocation.pathname.startsWith(`${routePrefix}/flow`);
  const isNotes = customLocation.pathname.startsWith(`${routePrefix}/notes`);

  const hideHeader = isFlow || isNotes;
  const hideFooter = isFlow || isNotes;

  return (
    <IntlProvider
      //
      messages={i18n[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <ConfigProvider device="phone">
        <Shell
          className={hideHeader ? 'g-hide-header-page' : ''}
          style={{
            minHeight: '100vh',
          }}
          type="dark"
          fixedHeader
        >
          <Shell.Branding>{hideHeader ? null : <BizLogo />}</Shell.Branding>
          <Shell.Action>{hideHeader ? null : <BizLangSwitch />}</Shell.Action>
          <Shell.Content>
            <Outlet />
            <BizCS />
          </Shell.Content>
          {hideFooter ? null : (
            <Shell.Footer>
              <Footer />
            </Shell.Footer>
          )}
        </Shell>
      </ConfigProvider>
    </IntlProvider>
  );
}
