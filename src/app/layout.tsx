import { SharedOptions } from 'msw';
import { Header } from '~/components/header/Header';
import { AuthProvider } from '~/feature/auth/AuthProvider';
import { server } from '~/mocks/server';
import '~/styles/globals.scss';

if (process.env.NODE_ENV === 'development') {
  const options: SharedOptions = {
    onUnhandledRequest: 'bypass'
  };
  server.listen(options);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head />
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
