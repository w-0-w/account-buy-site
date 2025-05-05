import {
  // Meta,
  // Title,
  Links,
  Main,
  Scripts,
} from 'ice';

import { Conf } from '@/config/page';

export default function Document({ pagePath }) {
  const pp = `/${pagePath.split('/')?.[1] || ''}`;
  // console.log('pp:: ', pp);
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
