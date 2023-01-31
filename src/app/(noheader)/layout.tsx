import '~/styles/globals.scss';

export default function NoHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
