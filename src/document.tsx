import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <Meta />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
