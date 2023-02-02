import { Header } from '~/components/header/Header';
import '~/styles/globals.scss';

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
