import { Outlet, useLocale, getDefaultLocale } from 'ice';
import { IntlProvider } from 'react-intl';
import { Shell, ConfigProvider } from '@alifd/next';

import { i18n } from '@/i8n';
import { BizLogo } from '@/components/Biz/BizLogo';
import { BizLangSwitch } from '@/components/Biz/BizLangSwitch';
import { BizCS } from '@/components/Biz/BizCS';
import Footer from '@/components/Footer';

export default function Layout() {
  const [locale] = useLocale();
  const defaultLocale = getDefaultLocale();

  return (
    <IntlProvider
      //
      messages={i18n[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <ConfigProvider device="phone">
        <Shell
          style={{
            minHeight: '100vh',
          }}
          type="dark"
          fixedHeader
        >
          <Shell.Branding>
            <BizLogo />
          </Shell.Branding>
          <Shell.Action>
            <BizLangSwitch />
          </Shell.Action>
          <Shell.Content>
            <Outlet />
            <BizCS />
          </Shell.Content>
          <Shell.Footer>
            <Footer />
          </Shell.Footer>
        </Shell>
      </ConfigProvider>
    </IntlProvider>
  );
}
