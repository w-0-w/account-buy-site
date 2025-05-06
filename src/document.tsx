import {
  // Meta,
  // Title,
  Links,
  Main,
  Scripts,
} from 'ice';

import { Conf } from '@/config/page';

export default function Document({ pagePath }: { pagePath: string }) {
  const EnPre = '/en-US';
  const realPagePath = pagePath.startsWith(EnPre)
    ? pagePath.substring(EnPre.length)
    : pagePath;
  const pp = `/${realPagePath.split('/')?.[1] || ''}`;
  const { title = '-', pageMeta } = Conf[pp] || {};
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        {/* <Meta /> */}
        {(pageMeta || []).map((pm, pi) => {
          return (
            <meta
              key={pi}
              {...pm}
            />
          );
        })}
        {/* <Title /> */}
        <title>{title}</title>
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
