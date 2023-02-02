import { SharedOptions } from 'msw';
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
        <AuthProvider>
          <div className='sm:container sm:mx-auto sm:max-w-screen-sm'>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
